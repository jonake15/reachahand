import React from "react";
import home4 from "../../assets/Artboard – 2.jpg";
import { motion } from "framer-motion";
import ImpactCard from "../../components/ImpactCard";
import { impacts } from "../../constants";
import { IoIosArrowDown } from "react-icons/io";

const Section2 = () => {
  return (
    <div className="relative mt-10 lg:mt-20 w-full">
      <div className="flex justify-center items-center lg:-mt-20">
        <IoIosArrowDown size={80} className="w-[40px] lg:w-[50px]" />
      </div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easein",
          duration: 1,
        }}
        className="w-full rounded-[25px] p-5 laptop-sm:p-[8%] pb-10"
        style={{
          backgroundImage: `url(${home4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easein",
            duration: 1,
          }}
          className="poppinsBold text-3xl py-3 laptop-sm:h2 text-white"
        >
          Our impact
        </motion.div>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easein",
            duration: 1,
          }}
          className="poppinsRegular text-white leading-normal text-left text-sm lg:text-lg tablet:pr-[30%]"
        >
          RAHU inspires youth by introducing them to diverse role models and
          mentors in fields like medicine, education, theatre, and creative arts
          entrepreneurship.
        </motion.p>

        <div className="lg:mt-0 p-5 grid grid-cols-2 gap-8 lg:gap-2">
          {impacts.map((impact) => (
            <ImpactCard
              key={impact.label}
              total={impact.total}
              label={impact.label}
            />
          ))}
        </div>

        <motion.a
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easein",
            duration: 1,
          }}
          href="Impact"
          className="py-1 px-6 text-sm laptop-sm:py-2 laptop-sm:px-8  lg:mt-0 lg:pb-10 border-2 items-center border-white rounded-[25px] poppinsSemiBold text-white hover:bg-black hover:text-white"
        >
          Learn more
        </motion.a>

        {/* <div className="relative z-10 w-full flex flex-col items-start lg:flex-row lg:justify-between lg:items-start p-5 lg:p-10">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easein",
              duration: 1,
            }}
            className="poppinsBold text-lg md:h1 text-white lg:pt-20"
          >
            Our impact
          </motion.h1>
          <motion.p 
            initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easein",
              duration: 1,
            }}
            className="poppinsRegular text-white leading-normal text-left text-sm md:body-1 mt-4 lg:mt-0 lg:ml-10 lg:max-w-[50%]"
          >
            RAHU inspires youth by introducing them to diverse role models and mentors in fields like medicine, education, theatre, and creative arts entrepreneurship.
          </motion.p>
          <div className="mt-4 lg:mt-0 grid grid-cols-2 gap-4 lg:gap-2">
            {impacts.map((impact) => (
              <ImpactCard
                key={impact.label}
                total={impact.total}
                label={impact.label}
              />
            ))}
          </div>
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easein",
              duration: 1,
            }}
            className="py-1 px-6 text-sm xl:py-3 xl:px-8 mt-4 lg:mt-0 border-2 border-white rounded-[25px] poppinsSemiBold text-white hover:bg-black hover:text-white"
          >
            Learn more
          </motion.button>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Section2;
