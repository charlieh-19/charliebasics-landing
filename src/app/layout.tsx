import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Charlie Bacis Social Media and Graphic Designer",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[40px] snap-start" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <title>Charlie Bacis Social Media and Graphic Designer</title>
      <Header/> 
      {children}
      </body>        
    </html>
  );
}
