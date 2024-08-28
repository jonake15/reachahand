import React from "react";
import { motion } from "framer-motion";
import ProgramCard from "../ProgramCard";
import { programs } from "../../constants";

const Section4 = () => {
  return (
    <div>
      <div className="my-[10%] mobile-sm:mt-20 lg:mt-20 text-center justify-between w-full">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="h3 text-black poppinsBold"
        >
          Featured programs
        </motion.h1>
        <div className="grid grid-cols-1 gap-4 w-full laptop-sm:mt-10 ">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              imgUrl={program.imgUrl}
              subtext={program.subtext}
              icon={program.icon}
            />
          ))}
        </div>
        <a href="/Programs">
          <motion.button
            whileHover={{ scale: "1.00" }}
            whileTap={{ scale: "-0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            className="poppinsRegular px-2 py-2 lg:mx-4 lg:py-2 text-sm justify-center border-2 border-color-darkBlue mt-10 lg:mt-20 rounded-[30px] body-1 hover:bg-color-darkBlue hover:text-white hover:border-color-lightBlue hover:border-4"
          >
            See all programs
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Section4;
