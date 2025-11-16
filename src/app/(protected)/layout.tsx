import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";
import Providers from "@/redux/Providers";
import { UserState } from "@/redux/userSlice";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <Providers user={session.user as UserState}>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </Providers>
  );
}
