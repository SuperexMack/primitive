"use client"
import { useRef } from "react";
import CopyCode from "../Components/CopyCode";
import Footer from "../Components/Footer";
import { Installing } from "../Components/InstallingSection";
import Navbar from "../Components/Navbar";
import Image from "next/image";

export function HomeSection() {


  const works = useRef<HTMLDivElement>(null)
  const contact = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="w-full min-h-screen bg-[#080b0a] flex flex-col items-center relative overflow-x-hidden">
        <Navbar works={works} contact={contact}></Navbar>

        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_40%,transparent_100%)]" />

        <div className="absolute pointer-events-none w-[900px] h-[900px] rounded-full top-[10%] left-[26%] bg-green-500 blur-3xl opacity-20" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 w-full">
          <div className="inline-flex items-center gap-2 p- border border-green-500/25 bg-green-500/[0.06] px-4 p-3 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="inline-flex items-center gap-2 text-white text-xs font-mono">
              <span>Backed by</span>
              <Image
                src="/yc_logo.svg"
                alt="yclogo"
                width={1}
                height={1}
                className="w-[100px] h-[20px]"
              />
            </span>
          </div>

          <h1 className="font-syne text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-4">
            <span className="text-green-400">Primitive</span> is Here.
          </h1>

          <p className="font-syne text-[clamp(1.3rem,3vw,2rem)] font-semibold text-[#9ab0a0] tracking-tight mb-6">
            Made the emails easy.
          </p>

          <p className="text-[#6b7f72] text-base font-light leading-relaxed max-w-[500px] mb-10">
            We've made email into a developer primitive. Get all of your emails,
            across all domains and aliases, sent immediately to your webhook.
          </p>

          <div className="flex gap-4 items-center mb-16">
            <button onClick={()=>window.open("https://www.primitive.dev/signup")} className="px-7 py-3 bg-green-700 hover:bg-green-500 hover:font-bold text-white font-medium text-sm rounded-lg transition-all duration-200 hover:-translate-y-px">
              Get Started
            </button>
            <button onClick={()=>window.open("https://www.primitive.dev/docs")} className="px-7 py-3 bg-transparent border border-white/10 hover:border-white/30 text-[#9ab0a0] hover:text-white font-normal text-sm rounded-lg transition-all duration-200">
              Read Docs →
            </button>
          </div>

          <CopyCode />
        </div>

        <div ref={works} className="w-full">
          <Installing />
        </div>

        <footer ref={contact} className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}
