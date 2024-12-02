import Image from "next/image"
import React from 'react';

export default function History() {
    return (
        <div className="flex bg-[#0f0f0f] items-center">
          <div className="items-end w-3/6">
           <Image
             src="/modelo1.jpg"
             alt="history-img"
             className="w-full"
             width={200}
             height={200}
           />
          </div>
      
          <div className="p-5 text-white w-3/6 items-baseline">
           <h1 id="history" className="font-bold text-3xl">History</h1>
            <p className="pt-2">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Etiam lacinia ex suscipit, sodales eros ut, suscipit massa. 
             Nam dictum lacus sit amet ante rhoncus aliquet. 
             Suspendisse nec nunc nec eros iaculis porttitor. 
             Suspendisse condimentum rhoncus ipsum.
            </p>
          </div>
        </div>
    )
}