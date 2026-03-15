"use client"
import Link from  "next/link"
import { Github , List} from 'lucide-react';
import { Videotape } from 'lucide-react';
import { useState } from "react";
export default function Navbar({works,contact}:any){

   const [touched,setTouched] = useState(false)

   const toogle = ()=>{
      setTouched(!touched)
   }

  
   
   const moveToworks = ()=>{
      if(!works.current) return
      works.current.scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   }
   
   const moveToprice = ()=>{
      if(!contact.current) return
      contact.current.scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   }

   return(
     <>
     <div className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-md h-[80px]  flex items-center justify-center">
        <div className="absolute left-[10%] flex items-center justify-center space-x-2">
            <Link className="text-white" href={"/"}><h1 className="text-[40px] font-bold toptext">Primitive</h1></Link>
	    </div>

	<div className="flex  max-[1000px]:hidden justify-center items-center space-x-5">
	   <Link className="text-white" target="_blank" href={"https://www.primitive.dev/login"}>Primitive App</Link>
	   <Link className="text-white" onClick={moveToworks} href={"/"}>Installation</Link>
      <Link className="text-white" onClick={moveToprice} href={"/"}>Contact us</Link>
	   <Link className="text-white" href={"https://github.com/SuperexMack/primitive"}><Github></Github></Link>
	</div>

   <div className="absolute min-[1000px]:hidden right-[10%]">
       <List onClick={toogle} className=" h-[30px] text-white cursor-pointer w-[30px]"></List>
   </div>

     </div>

     {touched?(
       <>
       <div className="flex z-50 md:hidden fixed top-0 bg-black/60 backdrop-blur-md absolute top-20 p-4 flex-col  space-y-5 items-center w-full h-auto  shadow-2xl shadow-black">
      <Link className="text-white" target="_blank" href={"https://www.primitive.dev/login"}>Primitive App</Link>
	   <Link className="text-white" onClick={moveToworks} href={"/"}>Installation</Link>
      <Link className="text-white" onClick={moveToprice} href={"/"}>Contact us</Link>
	   <Link className="text-white" href={"https://github.com/SuperexMack/primitive"}><Github></Github></Link>
     </div>
       </>
     ):(
      <>
      </>
     )}


     </>
   )
}