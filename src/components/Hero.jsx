import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="hero-container flex items-center justify-center flex-wrap py-[100px]">
        <motion.div
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="https://kortanafx.com/images/shapes/banner-sqr-1.2.png"
            alt="hero-img"
          />
        </motion.div>
        <div className="hero-heading p-5 text-center">
          <h1 className="max-w-[508px] text-[72px] leading-[82px] font-semibold mx-[70px] my-0 bg-clip-text text-transparent">
            Up To 100% Profit Share
          </h1>
          <p className="max-w-[442px] text-xl font-normal text-[#A1A1AA] mx-auto mt-[20px] mb-[28px]">
            Enjoy The Most Competitive Trading Conditions In The Industry
          </p>
          <a className="primary-btn cursor-pointer transform transition duration-300 hover:translate-x-2 inline-block text-[#00000] w-100 px-[15px] py-[0px] font-bold text-lg border-0 rounded leading-[56px]">
            <div className="flex items-center gap-2 justify-center bg-transparent">
              Become A Funded Trader
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right bg-transparent transition-transform duration-300"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
        <motion.div
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="https://kortanafx.com/images/shapes/banner-sqr-1.2.png"
            alt="hero-img"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
