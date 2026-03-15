import { Linkedin, Github, Twitter, Pentagon } from "lucide-react";
import { Videotape } from 'lucide-react';
import Link from "next/link";

export default function Footer({ myref }: any) {
  return (
    <>
      <div
        ref={myref}
        className="w-full mt-[100px] hover:cursor-pointer h-auto p-3 z-40 flex flex-col items-center"
      >
        <div className="md:w-[90%] w-full h-[90%] mt-6 flex justify-around md:flex flex-wrap">
          <div className="w-[500px]  h-full p-7  flex flex-col space-y-5">
            <div className=" flex  space-x-2">
              
              <h1 className="text-[40px] text-white font-bold toptext">Primitive</h1>
            </div>

            <div className="md:w-[70%] w-full">
              <p className="text-white">
                We've made email into a developer primitive. Get all of your emails, 
                across all domains and aliases, sent immediately to your webhook.
              </p>
            </div>

            <div className="md:w-[70%] w-full flex space-x-8">
              <Link className="text-white" href={"/"}>
                <Linkedin></Linkedin>
              </Link>
              <Link className="text-white" href={"https://github.com/SuperexMack/primitive"}>
                <Github></Github>
              </Link>
              <Link className="text-white" href={"/"}>
                <Twitter></Twitter>
              </Link>
            </div>

            <div>
              <p className="text-white">
                &copy; {new Date().getFullYear()} Primitive. all rights reserved
              </p>
            </div>
          </div>

          <div className="w-[500px] h-full flex space-x-5">
            <div className="h-full w-[48%] p-7 flex flex-col space-y-3">
              <h1 className="font-bold text-white">Legal</h1>
              <h2 className="text-white">Private-policy</h2>
              <h2 className="text-white">Terms of service</h2>
              <h2 className="text-white">Copyright</h2>
            </div>

            <div className="h-full w-[48%] p-7 flex flex-col space-y-3">
              <h1 className="font-bold text-white">pages</h1>
              <h2 className="text-white">Contact-Page</h2>
              <h2 className="text-white">About</h2>
              <h2 className="text-white">Follow</h2>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-7 overflow-hidden flex items-center justify-center">
          <h1 className="font-bold md:text-[120px] sm:text-[100px] text-[50px] text-center mt-10 md:mt-24 bg-gradient-to-b from-neutral-950 to-yellow-200 bg-clip-text text-transparent">
            Primitive
          </h1>
        </div>
      </div>
    </>
  );
}