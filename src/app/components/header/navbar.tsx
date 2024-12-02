"use client"
import Link from "next/link";

export default function Navbar() {
    return (
      <div className="sticky top-0 z-10">
       <div className="bg-[#124b44] flex justify-around text-white py-2">
        <Link href={"#services"}>Services</Link>
        <Link href={"#history"}>History</Link>
        <Link href={"#portfolio"}>Portfolio</Link>
        <Link href={"#suscribe"}>Suscribe</Link>
       </div>
      </div>
    )
}