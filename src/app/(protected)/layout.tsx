import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";
import Providers from "@/redux/Providers";
import { UserState } from "@/redux/userSlice";
import { getAllExpenses } from "../api/graphql/resolvers";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  console.log(authOptions)
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const expenses = await getAllExpenses("test@email.com");
  console.log(expenses.getAllExpenses)

  return (
    <Providers user={session.user as UserState}>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </Providers>
  );
}
