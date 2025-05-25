import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export const metadata: Metadata = {
  title: "Nikhil",
  description: "Niikhil Sharma",
};
export default function RootLayout({children,}:
Readonly<{children: React.ReactNode;}>) 
{
  return (
    <>
    <Head>
      <title>CHIPSET</title>
      <meta name="Nikhil Sharma" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <html lang="en" className="scrollbar-none overflow-y-scroll">
      <body className={`${inter.className}`}>
          {children}
      </body>
    </html>
    </>
  );
}
