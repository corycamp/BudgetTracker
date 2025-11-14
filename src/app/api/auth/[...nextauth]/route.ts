import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:AuthOptions={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:"Email", type:"text"},
                password:{label:"Password", type:"password"}
            },
            async authorize(credentials:any){
                if(
                    credentials?.email === "test@example.com" &&
                    credentials?.password === "password"
                ){
                    return {id: '1', name:"Test User", email: "test@example.com"}
                }
                return null
            },
        }),
    ],
    pages:{
        signIn: "/login",
    },
    session:{
        strategy: "jwt"
    },
    secret: process.env.AUTH_SECRET
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};