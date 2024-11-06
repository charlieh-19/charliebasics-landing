"use client"
import Image from "next/image"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';


export default function Home() {
  return (
  <div>  
    <div className="flex bg-[#0f0f0f] items-center">  
    
        <div className="p-5 text-white items-baseline w-3/6">
      
        <h1 className="font-bold text-3xl"
        >Services</h1>

        <p className="pt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam lacinia ex suscipit, sodales eros ut, suscipit massa. 
        Nam dictum lacus sit amet ante rhoncus aliquet. 
        Suspendisse nec nunc nec eros iaculis porttitor. 
        Suspendisse condimentum rhoncus ipsum.
        </p>
        </div>
    
        <div className="items-end w-3/6">
        <Image
          src="/modelo1.jpg"
          alt="services-img"
          className="w-full"
          width={200}
          height={200}
        />
        </div>
    </div>

    
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
        <h1 className="font-bold text-3xl"
        >History</h1>

        <p className="pt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam lacinia ex suscipit, sodales eros ut, suscipit massa. 
        Nam dictum lacus sit amet ante rhoncus aliquet. 
        Suspendisse nec nunc nec eros iaculis porttitor. 
        Suspendisse condimentum rhoncus ipsum.
        </p>
      </div>
    </div>

    <div className="bg-[#124b44] flex justify-around text-white py-5">
      <h1 className="font-bold text-3xl"> Portfolio </h1>
    </div>

    <div className="flex bg-[#0f0f0f]">
        <Swiper
        
        className="myswiper"
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        >
        
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        
        <SwiperSlide className=" text-white p-6">
        
        <div className="relative m-auto w-9/12">
          <Image
            src="/modelo1.jpg"
            alt="services-img"
            className="w-full opacity-60"
            width={200}
            height={200}
          />
        
        <div className="absolute top-10 z-10 pl-5">
          <div className="title font-bold text-3xl" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle text-2xl" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text pt-2" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          </div>

        </div>

        </SwiperSlide>
        <SwiperSlide className=" text-white p-6">
        
        <div className="relative m-auto w-9/12">
          <Image
            src="/modelo1.jpg"
            alt="services-img"
            className="w-full opacity-60"
            width={200}
            height={200}
          />
        
        <div className="absolute top-10 z-10 pl-5">
          <div className="title font-bold text-3xl" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle text-2xl" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text pt-2" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          </div>

        </div>

        </SwiperSlide>
        <SwiperSlide className=" text-white p-6">
        
        <div className="relative m-auto w-9/12">
          <Image
            src="/modelo1.jpg"
            alt="services-img"
            className="w-full opacity-60"
            width={200}
            height={200}
          />
        
        <div className="absolute top-10 z-10 pl-5">
          <div className="title font-bold text-3xl" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle text-2xl" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text pt-2" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>   
    </div>     

    
     <div className="bg-[#0f0f0f] flex justify-center text-white pt-20">
      <h1 className="font-bold text-3xl"> Suscribe </h1>
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
      
      
       <p className="m-auto px-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam lacinia ex suscipit, sodales eros ut, suscipit massa. 
        Nam dictum lacus sit amet ante rhoncus aliquet. 
        Suspendisse nec nunc nec eros iaculis porttitor. 
        Suspendisse condimentum rhoncus ipsum.
       
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
       </p>          

     </div>
 
   </div>
 
  </div>
);
}
