import React from "react";
import "@vidstack/react/player/styles/base.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { impacts } from "../constants";
import ImpactDetails from "../components/ImpactDetails";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import top from "../assets/Group 157.png";
import cover from "../assets/paleblue.jpg";
import backdrop from "../assets/Artboard – 6.jpg";
import home6 from "../assets/Artboard – 14.jpg";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import program from "../assets/program-1.jpg";
import { Poster } from "@vidstack/react";
import { PlayButton } from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";

const Impact = () => {
  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div className="">
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
          className="py-20 mt-[100px] lg:mt-[140px] px-[5%]"
          style={{
            backgroundImage: `url(${backdrop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h1 className="h1 lg:h2 mb-10 poppinsSemiBold text-darkBlue">
              Our impacts
            </h1>
            <h3 className="xl:text-xl md:body-1 body-2 lg:text-3xl poppinsRegular text-opacity-80 text-darkBlue">
              Each of RAHU's program, campaign and projects is
              <br /> tailored to impact nuggets of information
            </h3>
          </div>
        </motion.div>
      </div>

      <div className="content-center text-center w-full">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <img src={line} alt="line" className="w-full object-cover" />
        </motion.div>
      </div>

      <div
        className="flex justify-center items-center mx-5 lg:mx-20 lg:h-[500px] rounded-3xl"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={top}
          alt="cover"
          className="object-cover z-100 justify-center lg:-mt-[85px]"
        />
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 w-full px-5 lg:px-20 justify-items-center items-center mt-[10%] lg:mt-[2%]"
      >
        <div className="h-[250px] lg:h-[500px] w-full xl:mt-[2%]">
          <div className="text-black border-2 border-gray-600 w-[100%] h-[200px] md:[350px] lg:h-[500px] rounded-[30px] justify-items-center">
            <MediaPlayer
              className="w-full h-[200px] md:h-[350px] lg:h-[500px] rounded-[30px] bg-black"
              playsInline
              title="Sprite Fight"
              src="https://www.youtube.com/watch?v=r_ZXOoemDgs&pp=ygUKcmVhY2hhaGFuZA%3D%3D"
              load="eager"
            >
              <MediaProvider>
                <Poster
                  className="absolute object-cover inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-90 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
                  src={program}
                  alt="Reachahand video"
                />
              </MediaProvider>
              <PlayButton className="group ring-sky-400 relative inline-flex h-1 w-5 tablet:h-10 tablet:w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
                <PlayIcon
                  size={100}
                  className="justify-items-center relative mobile-sm:w-[30px] tablet:w-[100px] bg-white rounded-full hidden group-data-[paused]:block"
                />
                <PauseIcon
                  size={100}
                  className="justify-items-center relative bg-white rounded-full group-data-[paused]:hidden"
                />
              </PlayButton>
            </MediaPlayer>
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
        className="flex flex-col lg:grid lg:grid-cols-1 w-full px-5 lg:px-20 justify-items-center items-center md:mt-40 lg:mt-20"
      >
        <div className="lg:flex lg:flex-cols-2 gap-6 w-full lg:mb-10">
          <div className="bg-color-darkBlue text-white p-1 mobile-sm:mb-5 laptop-sm:p-0 laptop-sm:w-[40%] rounded-[30px] laptop-sm:pl-10 laptop-sm:pr-30 ">
            <p className="poppinsSemiBold mobile-sm:h5 mobile-sm:mt-4 tablet:h3 text-color-gold leading-normal text-center laptop-sm:text-left laptop-sm:mt-10">
              lets talk figures
            </p>
            <p className="text-[12px] text-center laptop-sm:text-left poppinsRegular md:w-full laptop-sm:text-sm leading-normal laptop-sm:mt-5 laptop-sm:pr-20">
              RAHU inspires youth by introducing them to diverse role models and
              mentors in fields like medicine, education, theatre and creative
              arts entrepreneurship
            </p>
          </div>
          <div className="bg-color-gold text-white border-2 lg:mt-0 border-gray-400 lg:w-[60%] justify-center rounded-[30px] p-4 tablet:p-5">
            <div className="grid grid-cols-2 gap-10 lg:gap-6 justify-center ml-3 lg:ml-10 lg:p-5 w-full">
              {impacts.map((impact) => (
                <ImpactDetails
                  key={impact.label}
                  word={impact.word}
                  total={impact.total}
                  label={impact.label}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className="flex flex-cols-3 gap-2 justify-center mb-[4%] rounded-[30px] px-5 lg:px-20 mt-10 mx-5 lg:mx-20 lg:mt-[2%]"
        style={{
          backgroundImage: `url(${home6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center justify-center items-center align-middle lg:mt-[8%]"
        >
          <h1 className="h6 mt-6 lg:h2 text-white leading-15 poppinsSemiBold text-center lg:mt-10">
            Make more impact
            <br /> with us
          </h1>
          <h3 className="text-sm lg:text-base text-white poppinsRegular text-center lg:mt-5">
            At reach a hand we believe in the power of collaboration, you
            partner <br /> with some of our programs or you can volunteer
          </h3>

          <a href="GetInvolved">
            <motion.button
              whileHover={{ scale: "1.00" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              className="poppinsSemiBold px-8 py-2 lg:px-10 lg:py-3 bg-black text-white mt-5 lg:mt-10 mb-10 rounded-[30px] text-sm justify-center hover:bg-black hover:text-darkBlue hover:border-darkMaroon hover:border-2"
            >
              Get Involved
            </motion.button>
          </a>
        </motion.div>
      </div>

      <div className="lg:mx-10">
        <Footer />
      </div>
    </div>
  );
};

export default Impact;
