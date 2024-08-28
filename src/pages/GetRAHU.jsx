import React from "react";
import { motion } from "framer-motion";
import rahu from "../assets/logo-global.png";
import clinic from "../assets/images/DSC09024.jpg";
import { IoMdMail } from "react-icons/io";
import right from "../assets/images/DSC09244.jpg";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import first from "../assets/images/DSC092172.jpg";
import second from "../assets/images/DSC0904722.jpg";
import drop from "../assets/elements/backgrounds (6).png";
import lower from "../assets/elements/backgrounds (7).png";
import line from "../assets/elements/backgrounds (1).png";
import top from "../assets/elements/backgrounds (5).png";

const GetRAHU = () => {
  return (
    <div>
      {" "}
      <div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 0.25 }}
        className="w-full"
      >
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          src={top}
          className="relative w-full object-contain "
        />
        <div className="absolute mobile-sm:-mt-[65%]">
          <div className="flex w-full justify-between lg:px-20 lg:pb-10 ">
            <a href="Global">
              <img
                src={rahu}
                className="w-full mobile-sm:w-[80px] tablet:w-[150px] object-contain "
              />
            </a>

            <a href="https://www.paypal.com/donate/?hosted_button_id=TY9ZAUDEWYGQN">
              <button className="poppinsSemiBold bg-white rounded-[30px] py-2 px-8 mobile-sm:py-1 mobile-sm:px-3 mobile-sm:text-[6px] mobile-sm:mr-4 tablet:mr-0 laptop-sm:text-sm text-color-darkBlue border-2 border-color-darkBlue">
                Donate
              </button>
            </a>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mobile-sm:mt-6"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.5 }}
              className="poppinsSemiBold flex justify-start leading-1 text-white w-full text-[10px] tablet:mt-20 laptop-sm:mt-0 tablet:h5 tablet:ml-10 laptop-sm:h2 mobile-sm:pl-[50px] laptop-sm:pl-[200px] mobile-sm:pr-[50%]"
            >
              Improving the health of young people.
            </motion.h1>
            <h3 className="poppinsSemiBold flex justify-start text-color-paleWhite opacity-85 laptop-sm:mt-5 text-[5px] tablet:text-sm tablet:ml-10 mobile-sm:pl-[50px] laptop-sm:pl-[200px] mobile-sm:pr-[50%] laptop-sm:pr-[56%]">
              Our mission is to empower young people in Uganda with access to
              vital sexula reproductive health services, HIV/AIDS awareness and
              life skills to lead healthy reproductive lives
            </h3>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.5 }}
        className="lg:px-[5%] lg:mt-40 w-full "
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25 }}
          className="poppinsSemiBold mobile-sm:p-10 tablet:text-center laptop-sm:text-left lg:h2 lg:ml-20 h4"
        >
          Our Programs
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mobile-sm:px-10 laptop-sm:grid laptop-sm:grid-cols-2 laptop-sm:gap-12 laptop-sm:mt-20 laptop-sm:pb-20 w-full"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.25 }}
            className="w-full"
          >
            <div className="flex flex-cols-2 gap-3 mt-10">
              <div>
                <IoMdMail
                  size={50}
                  className="fill-current text-color-darkMaroon w-10 lg:w-[200px]"
                />
              </div>
              <div>
                <h1 className="poppinsSemiBold text-color-darkBlue body-1">
                  Sexual Reproductive Health
                </h1>
                <p className="poppinsRegular text-black text-sm">
                  Providing comprehensive education and services to promote self
                  practices and prevent unintended pregnancies and sexually
                  transmitted diseases.
                </p>
              </div>
            </div>
            <div className="flex flex-cols-2 gap-3 mt-20 laptop-sm:mt-10">
              <div>
                <FaHandHoldingHeart
                  size={50}
                  className="fill-current text-color-lightBlue w-10 lg:w-[200px]"
                />
              </div>
              <div>
                <h1 className="poppinsSemiBold text-color-darkBlue body-1">
                  HIV/AIDS Awareness & Prevention
                </h1>
                <p className="poppinsRegular text-black text-sm">
                  Raising awareness and providing resources to prevent the
                  spread of HIV/AIDS among the adolescents and young adults
                </p>
              </div>
            </div>
            <div className="flex flex-cols-2 gap-3 mt-20 lg:mt-10">
              <div>
                <TbBulbFilled
                  size={100}
                  className="fill-current text-color-darkMaroon w-10 lg:w-[200px]"
                />
              </div>
              <div>
                <h1 className="poppinsSemiBold text-color-darkBlue body-1">
                  Life and Entrepreneurship Skills
                </h1>
                <p className="poppinsRegular text-black text-sm mb-20">
                  Providing comprehensive education and services to promote self
                  practices and prevent unintended pregnancies and sexually
                  transmitted diseases.
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
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="justify-center items-center mobile-sm:mb-20 laptop-sm:mb-0"
          >
            <img
              src={right}
              className="h-[300px] w-full tablet:h-[500px] lg:h-full lg:w-[85%] object-cover rounded-tl-[100px] rounded-br-[100px] tablet:rounded-tl-[180px] tablet:rounded-br-[180px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="justify-center items-center"
      >
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.25 }}
          src={drop}
          className="h-full w-full"
        />
        <div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute mobile-sm:-mt-[40%] lg:-mt-[55%] justify-center items-center w-full"
        >
          <h1 className="poppinsSemiBold h3 text-black text-center lg:ml-[1%]">
            We strive to make a difference
          </h1>
          <h3 className="poppinsRegular opacity-85 text-sm lg:text-lg text-center px-4 laptop-sm::px-[20%] laptop-sm:pb-20">
            At Reach A Hand Clinic, we strive to make a real difference. Here
            are some of the ways we've impacted the lives of young people in
            Uganda:
          </h3>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:flex lg:flex-cols-3 lg:gap-10 lg:px-[15%] justify-between items-center text-center w-full mt-9 laptop-sm:mt-10"
          >
            <div className="mb-5">
              <h1 className="poppinsBold h2 text-color-lightBlue">
                1.4 Million
              </h1>
              <p className="poppinsRegular text-md text-center ">
                14 million people reached with
                <br /> HIV/AIDS awareness campaigns
              </p>
            </div>
            <div className="mb-5">
              <h1 className="poppinsBold h2 text-color-lightBlue text-center">
                50,000
              </h1>
              <p className="poppinsRegular text-md text-center ">
                50000 adolescents provided
                <br /> with life skills training
              </p>
            </div>
            <div className="">
              <h1 className="poppinsBold h2 text-color-lightBlue text-center">
                250,000
              </h1>
              <p className="poppinsRegular text-md text-center">
                250,000 young people educated
                <br /> on Sexual Reproductive Health
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-20 laptop-sm:mt-40 justify-center items-center flex p-4 laptop-sm:p-0 mb-20 laptop-sm:pb-40"
          >
            <img
              src={clinic}
              className="mobile-sm:rounded-[70px] tablet:rounded-[140px] w-full mx-[12%] lg:h-[450px] object-cover"
            />
          </motion.div>

          <div className="mt-20 px-[15%] flex flex-col items-center justify-center">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="poppinsSemiBold h2 text-center"
            >
              Stories of Change
            </motion.h1>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:flex lg:flex-cols-2 lg:gap-10 lg:ml-20 justify-center items-center mt-20"
            >
              <div className="lg:pr-20 laptop-sm:w-1/2 text-center flex flex-col justify-center items-center h-full">
                <img
                  src={first}
                  className="mobile-sm:w-full rounded-[120px] lg:h-[350px] object-cover mb-4"
                />
                <h1 className="h5 poppinsSemiBold mb-2">Meet James</h1>
                <p className="poppinsRegular text-md">
                  James, a young Entrepreneur explains how life skills training
                  from RAHG Clinic helped him start his own business
                </p>
              </div>

              <div className="lg:pr-20 laptop-sm:w-1/2 text-center flex flex-col items-center justify-center mt-10 laptop-sm:mt-0 h-full">
                <img
                  src={second}
                  className="rounded-[120px] lg:h-[350px] object-cover mb-4 lg:mt-[6%]"
                />
                <h1 className="h5 poppinsSemiBold mb-2">Meet Amina</h1>
                <p className="poppinsRegular text-md">
                  Amina, a 16-year-old from Rural Uganda, shares how RAHG
                  Clinic's programs have empowered her to stay in school and
                  avoid early marriage
                </p>
              </div>
            </motion.div>
          </div>
          <div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="justify-center items-center"
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              src={lower}
              className="w-full mobile-sm:mt-20 mobile-sm:mb-40 laptop-sm:mt-0"
            />

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.25 }}
              className=" ml-5 -mt-[78%] tablet:-mt-[55%] xl:ml-[18%] xl:-mt-[48%] absolute w-[90%] tablet:w-[70%] tablet:ml-[15%] laptop-sm:w-[65%] h-[300px] lg:h-[500px] mobile-sm:rounded-[30px] laptop-sm:rounded-[90px] bg-white"
            >
              <div className="grid grid-flow-col lg:flex lg:flex-cols-2 lg:gap-10 xl:pt-10 xl:pl-20 xl:pb-20 ">
                <div className="mobile-sm:w-full mobile-sm:p-4 laptop-sm:p-0 mobile-sm:text-center laptop-sm:text-left laptop-sm:w-[60%]">
                  <h1 className="poppinsSemiBold mobile-sm:h6 laptop-sm:h3 mobile-sm:mt-2 mobile-sm:text-center laptop-sm:text-left ">
                    Get involved
                  </h1>
                  <p className="poppinsRegular mobile-sm:text-center text-sm mt-5 laptop-sm:mt-10 laptop-sm:pr-20">
                    Your support is crucial in helping us reach our goals. By{" "}
                    donating to Reach A Hand Global Clinic, you contribute to a
                    healthier, more informed and empowered youth in Uganda
                  </p>
                  <button className="py-2 px-4 xl:px-6 xl:mt-10 bg-color-darkBlue mobile-sm:my-5 text-white text-[10px] lg:body-1 rounded-3xl">
                    Learn more
                  </button>
                </div>
                <div className="w-[40%]"></div>
              </div>
              <img
                src={line}
                className="w-full object-contain rounded-[90px] -mt-5 lg:-mt-20 mobile-sm:pb-[10%] tablet:pb-0"
              />
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-color-darkBlue text-left w-full mobile-sm:mt-[70%] tablet:mt-0 h-[160px] laptop-sm:h-[300px] laptop-sm:px-40 justify-center items-center"
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              src={rahu}
              className="mobile-sm:w-[70px] mobile-sm:m-5 mobile-sm: laptop-sm:w-[150px] object-contain laptop-sm:pt-20 "
            />
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              className="poppinsRegular text-sm ml-5 md:text-md lg:text-lg lg:mt-5 text-white"
            >
              Improving the health
              <br /> of young people
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetRAHU;
