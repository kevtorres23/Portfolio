'use client';

import { Menu } from "lucide-react";
import { X } from "lucide-react";
import React from "react";
import { useState } from "react";

function Navbar() {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <>
            <div className="bg-zinc-900 rounded-xl border border-zinc-700 lg:flex hidden flex-row gap-10 items-center justify-center px-8 py-2.5">
                <p className="text-white opacity-90">Home</p>
                <p className="text-white opacity-90">My projects</p>
                <p className="text-white opacity-90">My resume</p>
            </div>

            <div onClick={() => setIsMenu(!isMenu)} className={`bg-zinc-900 rounded-lg border border-zinc-700 lg:hidden flex cursor-pointer p-2.5 ${isMenu === true ? 'hidden' : 'flex'}`}>
                <Menu width={21} height={21} color="white" />
            </div>

            {isMenu && (
                <div className="w-screen h-screen top-0 bottom-0 left-0 right-0 fixed">
                    <div className="bg-zinc-900 rounded-lg border border-zinc-700 flex flex-col py-6">
                        <X width={21} height={21} color="white" onClick={() => setIsMenu(!isMenu)} />

                        <p className="text-white opacity-90 border-b border-b-zinc-600 py-3 px-4">Home</p>
                        <p className="text-white opacity-90 border-b border-b-zinc-600 py-3 px-4">My projects</p>
                        <p className="text-white opacity-90 px-4 pt-3">My resume</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;