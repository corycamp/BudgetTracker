import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/redux/Providers";

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "Helps keep track of your budgets and expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"h-screen m-0 bg-[#0D0F14] "}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
