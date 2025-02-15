import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Error = () => {
  return (
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  const navigate = useNavigate()
  return (
    <div className="relative grid h-screen place-content-center space-y-6 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        Oops! The page is on vacation
      </p>
      <p className="text-center text-neutral-400">
        404: Happiness Not Found 📺
      </p>
      <div
        onClick={() => navigate(-1)}
        className="flex items-center justify-center">
        <button
          className='group relative text-sm tracking-wider border-[1.5px] border-light/20 px-6 py-4 cursor-pointer flex items-center justify-center md:justify-start active:scale-90 transition-all duration-300'>
          <IoIosArrowBack /> &nbsp; GO BACK
          {/* TOP */}
          <span className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-100 group-hover:w-full" />

          {/* RIGHT */}
          <span className="absolute right-0 top-0 h-0 w-[2px] bg-white transition-all delay-100 duration-100 group-hover:h-full" />

          {/* BOTTOM */}
          <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-200 duration-100 group-hover:w-full" />

          {/* LEFT */}
          <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-white transition-all delay-50 duration-100 group-hover:h-full" />
        </button>
      </div>
    </div>
  );
};

export default Error;