import React from "react";
import { animate, motion } from "framer-motion";
import home1 from "../../assets/Web 1920 – 180.png";
import home2 from "../../assets/Web 1920 – 23.jpg";
import home3 from "../../assets/Web 1920 – 24.jpg";
import { RiArrowRightUpLine } from "react-icons/ri";

const Section1 = () => {
  return (
    <div>
      <div className="grid laptop-sm:grid-cols-2 mobile-sm:grid-cols-1 gap-4">
        {/* Get involved */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easein",
            duration: 1,
          }}
          className="bg-[#0e2d5c] mobile-sm:h-[80vh] laptop-sm:h-auto grid grid-rows-2 rounded-3xl relative flex-col justify-center items-start tablet:p-10"
          style={{
            backgroundImage: `url(${home1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="poppinsRegular text-white mobile-sm:text-sm tablet:body-1 laptop-md:pr-40 laptop-sm:bottom-[45%] absolute bottom-[16%] p-10 tablet:bottom-[40%] lg:bottom-[40%] ">
            We recognize that young people's concern can only be addressed by
            young people
          </p>
          <h1 className="poppinsBold m-10 text-white h4 tablet:text-[45px] laptop-sm:text-[45px] laptop-md:text-[52px] absolute bottom-[30%] tablet:bottom-[25%] lg:bottom-[20%] leading-tight">
            <span className="poppinsBold">
              We empower young people in Uganda
            </span>
            <span className="poppinsBold"></span>
          </h1>
          <a href="GetInvolved" className="absolute bottom-2 lg:bottom-16">
            <button className="bg-white text-color-darkBlue py-2 px-6 m-10 md:py-3 md:px-8 text-sm rounded-[25px] poppinsRegular hover:bg-black hover:text-white hover:border-2 hover:border-white">
              Get involved
            </button>
          </a>
        </motion.div>

        <div className="grid laptop-lg:grid-rows-2 gap-4">
          {/* We inspire */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easein",
              duration: 1,
            }}
            className="bg-[#0064e6] rounded-3xl relative flex flex-col justify-center items-start p-10"
            style={{
              backgroundImage: `url(${home2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="lg:mt-10">
              <p className="poppinsSemiBold text-white h4 lg:h5 mb-2">
                We inspire
              </p>
              <p className="poppinsRegular text-white body-2 lg:body-2 lg:pr-[37%] lg:mb-10">
                RAHU inspires youth by introducing them to diverse role models
                and mentors in fields like medicine, education, theatre and
                creative arts entrepreneurship.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easein",
              duration: 1,
            }}
            className="grid laptop-sm:grid-cols-2 tablet:grid-cols-2 mobile-sm:grid-cols-1 gap-4"
          >
            {/* Our programs */}
            <div className="bg-[#0a9ede] rounded-3xl relative flex flex-col justify-center items-start p-5">
              <div className="flex items-start">
                <p className="poppinsRegular text-[90px] md:text-[100px] text-white">
                  20
                </p>
                <div className="flex flex-col leading-2 mt-4">
                  <p className="poppinsRegular text-[40px] md:text-[50px] text-white">
                    +
                  </p>
                  <p className="poppinsRegular body-2 lg:mt-0 text-white">
                    Programs
                  </p>
                </div>
              </div>
              <p className="poppinsRegular text-sm text-white -mt-4">
                Each of RAHU's programs, campaigns or project is tailored to
                impact the youth.
              </p>
              <a href="Programs" className="mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                  transition={{ duration: 0.125, ease: "easeInOut" }}
                  className="border-2 border-white text-sm text-white hover:text-white hover:bg-black hover:border-2 hover:border-white py-2 px-6 lg:py-2 lg:px-4 rounded-[25px] poppinsSemiBold"
                >
                  Our Programs
                </motion.button>
              </a>
            </div>

            {/* Our Events */}
            <div
              className="rounded-3xl flex flex-col justify-end items-start p-4 min-h-[50vh]"
              style={{
                backgroundImage: `url(${home3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="w-2/3 text-left rounded-full p-3 poppinsSemiBold text-black">
                Our Events
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
