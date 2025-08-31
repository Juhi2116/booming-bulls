"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  children: React.ReactNode;
}

const Btn: React.FC<AnimatedButtonProps> = ({ children }) => {
  return (
    <div className="revolving-border2 inline-block rounded-2xl">
      <button className="relative  bg-[#6242A5] text-white px-10 py-4 text-md font-semibold rounded-2xl flex items-center gap-2 ]">
        {children}
      </button>
    </div>
  );
};

export default Btn;
