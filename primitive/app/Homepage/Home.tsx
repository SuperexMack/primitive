import CopyCode from "../Components/CopyCode";
import Navbar from "../Components/Navbar";

export function HomeSection(){
    return(
        <>
        <Navbar></Navbar>

        <div className="w-full h-auto bg-black flex flex-col items-center">


        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

           <div className="w-[80%] h-auto p-3 flex flex-col space-y-1 items-center justify-center mt-[12rem]">
               <h1 className="text-[70px] font-bold"><span className="text-green-700">Primitive</span> is Here.</h1>
               <h1 className="text-[40px] font-bold">Made the emails easy.</h1>
               
               <div className="w-[50%] mt-5">
                 <p className="text-center">
                    We've made email into a developer primitive. Get all of your emails, 
                    across all domains and aliases, sent immediately to your webhook.
                 </p>
               </div>

               <div className="w-[50%] mt-[4rem] flex items-center justify-center space-x-10">

                 <div>
                    <button className="p-4 bg-green-600 border-4 border-white">Get Started</button>
                 </div>

                 <div>
                    <button className="p-4 border-4 border-white">Read Docs</button>
                 </div>

               </div>

           </div>

        <div className="w-full h-auto p-2">
           <CopyCode></CopyCode>
        </div>

        </div>
        </>
    )
}