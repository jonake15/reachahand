import React from "react";
import rahu from "../assets/logo-global.png";
import Clinic from "../assets/images/clinic.jpg";
import hosp from "../assets/images/DSC09024.jpg";
import art from "../assets/images/Artboard – 2.png";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import back from "../assets/elements/backgrounds (8).png";

const ABoutRAHU = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${back}")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="bg-color-darkBlue w-full lg:pb-[20%] "
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25 }}
          className="flex justify-between p-5 lg:p-10"
        >
          <img src={rahu} className="w-[100px] xl:w-[150px] object-contain " />
          <a href="GetRAHU">
            <button className="poppinsSemiBold rounded-[30px] py-2 p-5 text-sm text-white border-color-darkBlue">
              Get involved
            </button>
          </a>
        </motion.div>

        <div className="lg:pb-[5%] lg:mt-10">
          <h1 className="poppinsBold flex justify-center items-center text-white h4 xl:h3 pb-5">
            About Us
          </h1>
          <h3 className="poppinsSemiBold text-color-paleWhite opacity-85 text-md text-center px-10">
            Your support is crucial in helping us reach our goals. By <br />{" "}
            donating to ReachAHand Clinic, you contribute to a <br /> healthier,
            more informed and empowered youth in Uganda
          </h3>
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.25 }}
        className="justify-center items-center flex -mt-20 lg:-mt-[20%] "
      >
        <img src={Clinic} className="rounded-[140px] w-[70vw] lg:h-[500px]" />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.25 }}
        className="p-10 mt-10 lg:mt-40 lg:pb-40"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:px-[10%] px-5">
          <div className="justify-center items-center">
            <h1 className="h3 poppinsSemiBold text-center pb-5">Our Vision</h1>
            <p className="h6 poppinsRegular text-left lg:px-20 lg:ml-5 leading-tight">
              To create a world where young people have the knowledge,
              resources, ad support to make informed decisions about their
              health and future
            </p>
          </div>
          <div className="">
            <h1 className="h3 poppinsSemiBold text-center pb-5">Our Mission</h1>
            <p className="h6 lg:px-20 lg:ml-5 poppinsRegular text-left leading-tight">
              To create a world where young people have the knowledge,
              resources, ad support to make informed decisions about their
              health and future
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-5 md:mt-10 lg:mt-20 pb-40"
      >
        <img src={hosp} className="w-full xl:h-[900px]" />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        <div className="lg:flex lg:flex-cols-3 xl:gap-12 lg:px-40 justify-center items-center text-center lg:pb-40">
          <div>
            <h1 className="h4 poppinsSemiBold">Get in touch</h1>
          </div>
          <div>
            <img
              src={art}
              className="xl:w-[350px] xl:h-[400px] rounded-[30px] object-cover"
            />
          </div>
          <div>
            <div className="justify-between px-20 py-20 mt-10">
              <ul>
                <div className="flex justify-left gap-4">
                  <FaPhoneVolume
                    size={22}
                    className="fill-current text-color-darkBlue mt-6"
                  />
                  <li className="mt-5 poppinsRegular text-lg text-color-darkBlue leading-normal mb-2 hover:text-color-gold">
                    +256 414 697 037
                  </li>
                </div>
                <div className="flex justify-left gap-4">
                  <IoMdMail
                    size={22}
                    className="fill-current text-color-darkBlue mt-6 sm:w-10"
                  />
                  <li className="mt-5 poppinsRegular text-lg text-color-darkBlue leading-normal mb-2 hover:text-color-gold">
                    info@reachahand.org
                  </li>
                </div>
                <div className="flex justify-left gap-4">
                  <FaLocationDot
                    size={22}
                    className="fill-current text-color-darkBlue mt-6"
                  />
                  <li className="mt-5 poppinsRegular text-lg text-color-darkBlue leading-normal mb-2 hover:text-color-gold">
                    Plot 7502, Mbarara
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.25 }}
        className="p-10 bg-color-darkBlue mt-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="p-10 grid lg:grid-cols-4 text-center items-center gap-10 justify-center mb-10"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white poppinsSemiBold body-2  "
          >
            Reach a Hand Uganda
          </motion.h1>
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.25 }}
            src={rahu}
            className="xl:w-[180px] object-contain"
          />
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-white poppinsSemiBold body-2"
          >
            Get involved
          </motion.h1>
          <a href="ABoutRAHU">
            {" "}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.25 }}
              className="text-white poppinsSemiBold body-2"
            >
              About us
            </motion.h1>
          </a>
        </motion.div>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white text-center opacity-85 poppinsSemiBold text-sm"
        >
          Improving the health of young people
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default ABoutRAHU;
