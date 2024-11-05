import Image from "next/image"

export default function Home() {
  return (
    <div className="flex bg-[#0f0f0f] items-center">  
    
        <div className="p-5 text-white items-baseline w-3/6">
      
        <h1 className="font-bold text-3xl"
        >Services</h1>

        <p className="pt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia ex suscipit, sodales eros ut, suscipit massa. Nam dictum lacus sit amet ante rhoncus aliquet. Suspendisse nec nunc nec eros iaculis porttitor. Suspendisse condimentum rhoncus ipsum.
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
  );
}
