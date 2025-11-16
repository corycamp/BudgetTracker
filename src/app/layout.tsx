import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/redux/Providers";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "Helps keep track of your budgets and expenses",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"h-screen m-0 bg-[#0D0F14] "}>{children}</body>
    </html>
  );
}
