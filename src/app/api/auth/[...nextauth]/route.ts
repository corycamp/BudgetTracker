import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDB } from "@/server/db/mongodb";
import { User } from "@/lib/types";
import bcrypt from "bcryptjs";

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
                const client = new MongoDB();
                await client.connect();
                const user = await client.getCollection<User>("users").findOne({email: credentials.email});
                if(!user) return null;

                const valid = await bcrypt.compare(credentials.password, user.hashedPassword);
                if(!valid) return null;

                return{
                    id:user._id.toString(),
                    email: user.email
                }
            },
        }),
    ],
    pages:{
        signIn: "/login",
    },
    session:{
        strategy: "jwt",
        maxAge: 60 * 30
    },
    secret: process.env.AUTH_SECRET
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};