import Image from "next/image";
import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <div className="relative">
        <Image
        src="/header.svg"
        alt="charlie-header"
        className="w-screen"
        width={200}
        height={200}
        />
        <div className="absolute flex items-center justify-center pb-10 bottom-0 w-full z-10 text-white">
          <p>Social Media and Graphic Designer</p>
        </div>
      </div>
      <Navbar/>
    </>
  )
} 