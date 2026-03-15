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
     <div className="fixed top-0 z-50 w-full bg-black h-[80px] border-b border-b-slate-200 flex items-center justify-center">
        <div className="absolute left-[10%] flex items-center justify-center space-x-2">
            <Link href={"/"}><h1 className="text-[40px] font-bold toptext">Primitive</h1></Link>
	    </div>

	<div className="flex  max-[1000px]:hidden justify-center items-center space-x-5">
	   <Link href={"/"}>Primitive App</Link>
	   <Link onClick={moveToworks} href={"/"}>Installation</Link>
      <Link onClick={moveToprice} href={"/"}>Contact us</Link>
	   <Link href={"https://github.com/SuperexMack"}><Github></Github></Link>
	</div>

   <div className="absolute min-[1000px]:hidden right-[10%]">
       <List onClick={toogle} className=" h-[30px] cursor-pointer w-[30px]"></List>
   </div>

     </div>

     {touched?(
       <>
       <div className="flex z-50 fixed top-0 bg-black absolute top-20 p-4 flex-col  space-y-5 items-center w-full h-auto border-b border-slate-200 shadow-2xl shadow-black">
      <Link href={"/"}>Primitive App</Link>
	   <Link onClick={moveToworks} href={"/"}>Installation</Link>
      <Link onClick={moveToprice} href={"/"}>Contact us</Link>
	   <Link href={"https://github.com/SuperexMack"}><Github></Github></Link>
     </div>
       </>
     ):(
      <>
      </>
     )}


     </>
   )
}