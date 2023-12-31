import Navbar from "@/components/nav";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pictoria",
  description: "Generated by M.Abbas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          
            <Sidebar />
          
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
