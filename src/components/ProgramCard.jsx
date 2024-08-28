import React from "react";
import user from "../assets/icons/featherIcons/arrow-up-right.svg";
import { motion } from "framer-motion";

const ProgramCard = ({ title, imgUrl, icon, subtext }) => {
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col w-full laptop-sm:grid laptop-sm:grid-cols-3 laptop-sm:gap-10 "
      >
        <div className="mobile-sm:flex mobile-sm:justify-center">
          <img
            src={imgUrl}
            alt="tile1"
            width={400}
            height={400}
            className="rounded-[10px] mt-10 w-[250px] h-[150px] object-cover"
          />
        </div>

        <div className="w-full mobile-sm:justify-center mobile-sm:items-center laptop-sm:ml-10">
          <h2 className="h6 mobile-sm:text-center mobile-sm:ml-5 mobile-md:ml-6 mobile-lg:ml-8 laptop-sm:ml-0 tablet:text-center mt-5 mb-2 poppinsSemiBold laptop-sm:text-left laptop-sm:mt-10">
            {title}
          </h2>
          <p className="text-sm laptop-sm:text-[12px] laptop-lg:text-sm w-full flex text-center laptop-sm:text-left poppinsRegular">
            {subtext.substring(0, 250)}...
          </p>
        </div>
        <div className="">
          <div className=" w-full flex gap-4 laptop-sm:mt-10">
            <a href="/Programs">
              <motion.h3
                whileHover={{ scale: "1.0" }}
                whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                className="poppinsRegular body-2 cursor-pointer ml-40"
              >
                Read more
              </motion.h3>
            </a>

            <a href="/Programs">
              <motion.img
                whileHover={{ scale: "1.05" }}
                whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                src={user}
                alt="user"
                width={32}
                className="laptop-sm:-mt-2 "
              />
            </a>
          </div>
          <a href="/Programs">
            <img
              src={icon}
              alt="icon"
              width={60}
              className="mobile-sm:-mt-10 laptop-sm:mt-8 laptop-sm:ml-40 object-contain ml-[80%] -mt-20"
            />
          </a>
        </div>
      </motion.div>
      <hr className="mt-10 border-gray-400" />
    </div>
  );
};

export default ProgramCard;
