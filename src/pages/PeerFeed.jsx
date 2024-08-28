import React from "react";
import back from "../assets/peer-educs.jpg";
import logo from "../assets/peer-educ.png";
import rahu from "../assets/rahu icon.png";
import { motion } from "framer-motion";
import KhatEngine from "./KhatEngine";
import Chat from "./Chat";

const PeerFeed = () => {
  return (
    <div className="bg-[#e5f3ff] h-full">
      <div className="flex py-5 justify-between px-5 md:px-[10%] sticky top-0 z-50">
        <div>
          {" "}
          <a href="/PeerFeed">
            <motion.img
              whileHover={{ scale: "1.00" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              src={logo}
              alt="logo"
              width={220}
              className="w-[80px] object-cover laptop-sm:w-[150px]"
            />
          </a>
        </div>

        <div className="flex flex-col items-center tablet:flex-row gap-6">
          {" "}
          <a href="/PeerSignin">
            <motion.button
              initial={{ rotate: "0deg" }}
              animate={{ rotate: "360deg" }}
              transition={{ duration: "1", ease: "backInOut" }}
              className="bg-black py-2 mobile-sm:px-3 laptop-sm:px-8 border-2 border-[#2a9dca] rounded-[25px] justify-end poppinsRegular text-white mobile-sm:text-[10px] laptop-sm:text-sm hover:bg-[#00274e] hover:text-white hover:border-gold"
            >
              Signin
            </motion.button>
          </a>
          <a href="/" className="hidden tablet:flex">
            <motion.img
              whileHover={{ scale: "1.00" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              src={rahu}
              alt="logo"
              width={50}
              height={50}
              className=""
            />
          </a>
        </div>
      </div>
      <div className="mobile-sm:px-5 tablet:px-20 laptop-sm:px-0 justify-center items-center w-full">
        <img
          src={back}
          className="mobile-sm:w-full laptop-sm:w-[80%] laptop-sm:h-[350px] laptop-sm:object-cover shrink-0 mt-5 mx-auto mobile-sm:rounded-[20px] laptop-sm:rounded-[30px]"
        />
      </div>
      <div className=" justify-center items-center mt-20 mobile-sm:px-5 tablet:px-20 laptop-sm:px-[10%] rounded-[35px]">
        <div>
          <Chat className="w-[80%] laptop-sm:h-full bg-[#e5f3ff] h-full" />
        </div>
      </div>
    </div>
  );
};

export default PeerFeed;
