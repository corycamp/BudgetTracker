import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";
import Providers from "@/redux/Providers";
import { UserState } from "@/redux/userSlice";
import { getAllBudgets, getCurrentExpenses } from "../api/graphql/resolvers";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  let expenses = [];
  let budgets = [];
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  if (session.user?.email) {
    expenses = await getCurrentExpenses(session.user?.email ?? "");
    budgets = await getAllBudgets(session.user?.email ?? "");
  }
  return (
    <Providers
      user={session.user as UserState}
      expenses={expenses}
      budgets={budgets}
    >
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </Providers>
  );
}
