import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <title>Charlie Bacis Social Media and Graphic Designer</title>
        
      <div className="relative">  
        <Image
          src="/header.svg"
          alt="charlie-header"
          className="w-screen"
          width={200}
          height={200}
        />
       
       <div className="absolute flex items-center justify-center top-10 w-full h-full z-10 text-white">
           <p>Social Media and Graphic Designer</p>
        </div>

      </div>
  
      <div className="bg-[#124b44] flex justify-around text-white py-2">
      <Link href={"/"}> Services</Link>
      <Link href={"/"}> History</Link>
      <Link href={"/"}> Portfolio</Link>
      <Link href={"/"}> Suscribe</Link>   
      </div>

        {children}
      </body>

      

        

    </html>
  );
}
