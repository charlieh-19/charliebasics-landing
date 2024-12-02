import Image from "next/image"
import React from 'react';

export default function Suscribe() {
    return (
      <div>
          <div className="bg-[#0f0f0f] flex justify-center text-white pt-20">
           <h1 id="suscribe" className="font-bold text-3xl"> Suscribe </h1>
          </div>
          <div className="relative"> 
            <Image 
             src="/footer.svg"
             alt="charlie-footer"
             className="w-screen"
             width={200}
             height={200}
            />
            <div className="absolute top-10 z-10 pt-5 text-white">
            <div className="m-auto px-80">
             <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam lacinia ex suscipit, sodales eros ut, suscipit massa. 
              Nam dictum lacus sit amet ante rhoncus aliquet. 
              Suspendisse nec nunc nec eros iaculis porttitor. 
              Suspendisse condimentum rhoncus ipsum.
             </p>          
            <div className="flex justify-around pt-48">
             <button className="bg-[#88be47] font-bold text-white text-xl py-2 px-4">
              <text>$200 al mes</text>
             </button>
             <button className="bg-[#ee8e0a] font-bold text-white text-xl py-2 px-4">
              <text>$400 al mes</text>
             </button>
             <button className="bg-[#f74a02] font-bold text-white text-xl py-2 px-4">
              <text>$600 al mes</text>
             </button>
            </div>
          </div>
        </div>
       </div>
      </div>
    )
}