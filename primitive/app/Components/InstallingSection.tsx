"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

export function Installing() {
  let valArray = [
    "npm install mymx",
    "pnpm add mymx",
    "yarn add mymx",
    "bun add mymx",
  ];

  let [copyValue, setCopyValue] = useState(valArray[0]);
  let [colorValue, setColorValue] = useState(0);

  const makeValue = (value: number) => {
    setCopyValue(valArray[value]);
    setColorValue(value);
  };

  const copyText = async (value: string) => {
    console.log("Selected")
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied value");
    } catch (error) {
      toast.error("Unable to copy");
    }
  };

  return (
    <div className="md:mt-[10rem] mt-[4rem] w-full flex items-center justify-center">
      <div className="md:w-[70%] w-[90%] md:flex md:flex-row flex-col md:space-y-0 space-y-20 justify-between">
        {/* Left */}

        <div className="md:w-[60%] w-full flex flex-col space-y-7">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 rounded-full w-fit">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]" />
            <span className="font-mono text-[11px] text-white/35 uppercase tracking-widest">
              Developer Primitive
            </span>
          </span>

          {/* Headline */}
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.08] tracking-tight text-white m-0">
            Email was always an{" "}
            <span className="bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent">
              API in disguise.
            </span>{" "}
            We pulled off the mask.
          </h2>

          {/* Divider */}
          <div className="w-10 h-px bg-white/10" />

          {/* Body */}
          <p className="text-sm sm:text-[15.5px] leading-[1.75] text-white/45 m-0 max-w-[420px]">
            We've made email into a developer primitive. Get all of your emails,
            across all domains and aliases, sent immediately to your webhook.
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { num: "<50ms", label: "Delivery" },
              { num: "∞", label: "Aliases" },
              { num: "Any", label: "Domain" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-xl sm:text-[22px] font-bold text-white tracking-tight">
                  {s.num}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-white/30 uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          
          <div className="flex flex-wrap gap-2">
            {["Webhook delivery", "All domains", "Zero config"].map((p) => (
              <span
                key={p}
                className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/35"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="md:w-[35%] w-full flex flex-col space-y-2 items-center justify-center">
          <div className="w-full flex items-center justify-center space-x-5">
            <button
              onClick={() => makeValue(0)}
              className={
                colorValue === 0
                  ? "font-bold p-2 rounded-lg bg-violet-700 text-white"
                  : "bg-zinc-800 p-2 rounded-lg font-bold text-zinc-300 hover:bg-zinc-700"
              }
            >
              npm
            </button>
            <button
              onClick={() => makeValue(1)}
              className={
                colorValue === 1
                  ? "font-bold p-2 rounded-lg bg-violet-700 text-white"
                  : "bg-zinc-800 p-2 rounded-lg font-bold text-zinc-300 hover:bg-zinc-700"
              }
            >
              pnpm
            </button>
            <button
              onClick={() => makeValue(2)}
              className={
                colorValue === 2
                  ? "font-bold p-2 rounded-lg bg-violet-700 text-white"
                  : "bg-zinc-800 p-2 rounded-lg font-bold text-zinc-300 hover:bg-zinc-700"
              }
            >
              yarn
            </button>
            <button
              onClick={() => makeValue(3)}
              className={
                colorValue === 3
                  ? "font-bold p-2 rounded-lg bg-violet-700 text-white"
                  : "bg-zinc-800 p-2 rounded-lg font-bold text-zinc-300 hover:bg-zinc-700"
              }
            >
              bun
            </button>
          </div>

          <div onClick={() => copyText(copyValue)} className="w-[70%] hover:cursor-pointer h-[50px] mt-[30px] border-2 border-violet-500 bg-zinc-800 flex items-center justify-center space-x-10 rounded-lg">
            <div>
              <h1 className="text-zinc-100">$ {copyValue}</h1>
            </div>
            <div
              className="cursor-pointer text-violet-400 hover:text-violet-300"
            >
              <Copy />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}
