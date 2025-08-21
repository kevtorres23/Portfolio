'use client';

import { Menu } from "lucide-react";
import { X } from "lucide-react";
import React from "react";
import { useState } from "react";

function Navbar() {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <>
            <div className="backdrop-blur-[30px] bg-[rgba(29,29,37,0.6)] border border-zinc-800 rounded-xl flex flex-row gap-24 items-center sm:justify-center justify-between px-7 py-4 sm:w-auto w-full">
                <p className="text-white font-medium">Kevin Torres</p>

                <div className="flex-row gap-6 sm:flex hidden">
                    <p className="text-white font-medium opacity-60 text-[15px]">Home</p>
                    <p className="text-white font-medium opacity-60 text-[15px]">Projects</p>
                    <p className="text-white font-medium opacity-60 text-[15px]">Resume</p>
                </div>

                <Menu onClick={() => setIsMenu(!isMenu)} width={21} height={21} color="white" className="sm:hidden flex" />
            </div>

            {isMenu && (
                <div className="w-screen h-screen top-0 bottom-0 left-0 right-0 fixed">
                    <div className="backdrop-blur-[40px] bg-[rgba(30,30,39,0.6)] border-b border-b-zinc-700 flex flex-col py-6 px-6 gap-6">
                        <X width={21} height={21} color="white" onClick={() => setIsMenu(!isMenu)} className="self-end"/>
                        <p className="text-white opacity-90">Home</p>
                        <p className="text-white opacity-90">My projects</p>
                        <p className="text-white opacity-90">My resume</p>
                    </div>
                </div>
            )}

        </>
    )
}

export default Navbar;