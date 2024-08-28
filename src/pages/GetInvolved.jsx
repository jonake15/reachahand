import React from "react";
import user from "../assets/peer-educs.jpg";
import user1 from "../assets/job.jpg";
import user3 from "../assets/teamcover.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import cover from "../assets/red.jpg";
import top from "../assets/LJ4B5571-copy.png";
import backdrop from "../assets/Artboard – 6.jpg";
import home6 from "../assets/Artboard – 9.jpg";
import back0 from "../assets/Artboard – 10.jpg";
import back from "../assets/Artboard – 11.jpg";

const GetInvolved = () => {
  return (
    <div>
      {/* Nav bar */}
      <div className="w-full">
        <NavBar />
      </div>

      <div className="content-center text-center w-full mt-[150px]">
        {/* Section one */}
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
          className="py-10"
          style={{
            backgroundImage: `url(${backdrop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-darkBlue text-center">
            <h1 className="flex flex-col md:flex-row text-xl md:h1 poppinsSemiBold leading-normal justify-center items-center pt-[10%] pb-[5%] ">
              Get
              <span className="flex justify-items-center items-center px-4 p-2">
                <img
                  src={user}
                  alt="round"
                  width={70}
                  className="z-10 h-[50px] w-[50px] border-2 border-opacity-30 border-color-darkBlue rounded-full object-cover -mr-6"
                />
                <img
                  src={user1}
                  alt="round"
                  width={70}
                  className="z-20 h-[50px] w-[50px] border-2 border-opacity-30 border-color-darkBlue object-cover rounded-full -mr-6"
                />
                <img
                  src={user3}
                  alt="round"
                  width={70}
                  className="z-30 h-[50px] w-[50px] border-2 border-opacity-30 border-color-darkBlue object-cover rounded-full"
                />
              </span>
              involved
            </h1>
          </div>
          <h3 className="md:text-xl lg:text-xl poppinsRegular text-opacity-80 w-full text-darkBlue">
            Each of RAHU's program, campaign and projects is
            <br /> tailored to impact nuggets of information
          </h3>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.25 }}
          className=""
        >
          <img src={line} alt="line" className="w-full" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.25 }}
          className="rounded-[30px] mx-4 laptop-sm:mx-20 my-4"
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50%",
          }}
        >
          <img src={top} alt="cover" className="w-full items-center" />
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.25 }}
        className="rounded-[30px] mx-4 laptop-sm:mx-20 my-4"
        style={{
          backgroundImage: `url(${home6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-center"
          >
            <h1 className="h3 text-darkBlue poppinsSemiBold text-center py-5">
              Make more impact
              <br /> with us
            </h1>
            <h3 className="text-lg text-darkBlue poppinsRegular text-center px-10">
              At reach a hand we believe in the power of collaboration, you
              partner <br /> with some of our programs or you can volunteer
            </h3>

            <a href="PartnerForm">
              <button className="poppinsSemiBold px-10 py-2 bg-white text-darkBlue mt-10 mb-10 rounded-[30px] text-sm justify-center hover:bg-white hover:text-darkBlue hover:text-xl hover:border-darkMaroon hover:border-2">
                partner
              </button>
            </a>
          </motion.div>
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
        className="grid lg:grid-cols-2 gap-10 m-4 laptop-sm:my-8 laptop-sm:mx-20"
      >
        <div
          className="text-black w-full rounded-[30px] p-10"
          style={{
            backgroundImage: `url(${back0})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="poppinsBold text-white h3 my-10">Donating</p>
          <p className="body-1 text-white poppinsRegular">
            RAHU inspires youth by introducing them to diverse role models and
            mentors in fields like medicine, education, theatre and creative
            arts entrepreneurship
          </p>

          <div className="text-center mt-10">
            <a href="https://www.paypal.com/donate/?hosted_button_id=TY9ZAUDEWYGQN">
              <motion.button
                whileHover={{ scale: "1.05" }}
                whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                className="poppinsRegular px-14 py-2 hover:text-black hover:border-gray-400 text-white border-2 border-white rounded-[30px] text-sm justify-center hover:bg-white hover:border-gold hover:text-darkBlue hover:border-2"
              >
                Donate
              </motion.button>
            </a>
          </div>
        </div>

        <div
          className="text-black w-full rounded-[30px] p-10"
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="poppinsBold text-white h3 my-10">Volunteer</p>
          <p className="body-1 text-white poppinsRegular">
            You can join one of our programs and volunteer, impact young people
            with us
          </p>

          <div className="text-center mt-[18%]">
            <motion.button
              whileHover={{ scale: "1.05" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              className="poppinsRegular px-14 py-2 hover:text-black hover:border-gray-400 text-white border-2 border-white rounded-[30px] text-sm justify-center hover:bg-white hover:border-gold hover:text-darkBlue hover:border-2"
            >
              Get Involved
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="tablet:mx-10">
        <Footer />
      </div>
    </div>
  );
};

export default GetInvolved;
