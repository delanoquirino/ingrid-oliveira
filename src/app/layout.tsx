import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ingrid Oliveira",
  description: "Designer de sobrancelha e aplicação de cílioss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header /> {children}
      </body>
    </html>
  );
}
