import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import sabotage from "../assets/main_events.jpg";
import star from "../assets/icons/stars.svg";
import { motion } from "framer-motion";
import round2 from "../assets/round2.png";
import line from "../assets/Artboard – 5.png";
import backdrop from "../assets/Artboard – 6.jpg";
import EventsPage from "../components/EventsPage";
import BlogsPage from "../components/BlogsPage";
import user from "../assets/characters (1).png";
import user1 from "../assets/characters (2).png";
import user3 from "../assets/characters (4).png";

const Events = () => {
  const [displayEvents, setDisplayEvents] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  const handleEventsClick = () => {
    setDisplayEvents(true);
  };

  const handleBlogClick = () => {
    setDisplayEvents(false);
  };

  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div className="lg:px-20">
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
          className="py-[10%] mt-[100px] lg:mt-[100px] px-[5%]"
          style={{
            backgroundImage: `url(${backdrop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center items-center">
            <h1 className="flex flex-col lg:flex-row h3 lg:h2 text-color-darkBlue poppinsSemiBold items-center">
              Whats happening
              <span className="flex justify-items-center items-center px-4 p-2">
                <img
                  src={user}
                  alt="round"
                  className="z-10 h-[30px] xl:h-[60px] w-[30px] xl:w-[60px] border-1 border-opacity-30 border-color-darkBlue rounded-full object-cover -mr-3"
                />
                <img
                  src={user1}
                  alt="round"
                  className="z-20 h-[30px] xl:h-[60px] w-[30px] xl:w-[60px] border-1 border-opacity-30 border-color-darkBlue object-cover rounded-full -mr-3"
                />
                <img
                  src={user3}
                  alt="round"
                  className="z-30 h-[30px] xl:h-[60px] w-[30px] xl:w-[60px] border-1 border-opacity-30 border-color-darkBlue object-cover rounded-full"
                />
              </span>
              @RAHU
            </h1>
          </div>
          <h3 className="text-center mobile-sm:text-sm laptop-sm:body-1 poppinsRegular text-opacity-80 text-darkBlue">
            Each of RAHU's program, campaign and projects is tailored to impact
            nuggets of information
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
          <img src={line} alt="line" className="" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid lg:grid-cols-[2fr_1fr] gap-5 px-10 laptop-sm:my-1"
        >
          <div
            className="relative text-black border-2 border-gold h-[40vh] lg:h-[70vh] mobile-sm:object-contain rounded-[30px]"
            style={{
              backgroundImage: `url(${sabotage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button className="absolute left-4 top-4 poppinsRegular px-6 py-2 flex bg-white text-black rounded-[30px] text-md justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
              Featured
              <img
                src={star}
                alt="round"
                width={20}
                className="ml-5 justify-around"
              />
            </button>
            <button className="absolute mobile-sm:px-4 mobile-sm:items-center laptop-sm:left-4 bottom-4 poppinsRegular px-8 py-3 justify-around bg-white flex text-left text-black rounded-[30px] text-[9px] lg:text-sm hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
              <img src={round2} alt="round" width={40} className="mr-5" />
              Life saving skills that have promoted menstrual <br /> health for
              young girls in Kasese District
            </button>
          </div>

          <div className="bg-color-gold text-white border-2 border-gray-400 rounded-[30px] mobile-sm:h-[45vh] mobile-sm:mb-20 lg:h-[70vh] p-10">
            <div>
              <h3 className="poppinsSemiBold text-black body-1 mb-5">
                Subscribe for new content
              </h3>
              <h3 className="text-black text-sm poppinsRegular xl:mb-10">
                RAHU inspires youth by introducing them to diverse role models
                and mentors in fields like medicine, education, theatre and
                creative arts entrepreneurship
              </h3>
              {!isEmailValid ? (
                <p className="poppinsSemiBold text-sm text-red-800">
                  Please enter a valid email address
                </p>
              ) : null}
              <form onSubmit={handleSubmit} className="">
                <input
                  type="email"
                  placeholder="Enter your email address here"
                  value={email}
                  onChange={handleInput}
                  className="bg-white w-full text-gray-800 text-sm px-4 poppinsRegular py-3 rounded-3xl"
                />

                <button
                  type="submit"
                  className="poppinsSemiBold px-8 py-2 bg-black text-white mt-10 mb-20 rounded-[30px] text-sm justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2"
                >
                  Subscribe
                </button>
              </form>
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
          className="text-center"
        >
          <h1 className="h4 poppinsSemiBold mobile-sm:text-center lg:text-left lg:mx-10 lg:mt-20">
            Recent posts
          </h1>
          <div className="flex gap-20 justify-center items-center text-center lg:justify-end laptop-sm:mr-40 mt-4 lg:mt-5">
            <h3
              className={`body-1 poppinsRegular text-center cursor-pointer ${
                displayEvents ? "underline" : ""
              }`}
              onClick={handleEventsClick}
            >
              events
            </h3>
            <h3
              className={`body-1 poppinsRegular cursor-pointer ${
                !displayEvents ? "underline" : ""
              }`}
              onClick={handleBlogClick}
            >
              blogs
            </h3>
          </div>
        </motion.div>

        {displayEvents ? <EventsPage /> : <BlogsPage />}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center justify-center items-center w-full mb-20"
        >
          <button className="poppinsRegular px-6 py-2 bg-black text-white justify-center border-2 border-darkBlue mt-20 rounded-[30px] text-sm hover:bg-darkBlue hover:text-white hover:border-blue hover:border-4">
            Load more
          </button>
        </motion.div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Events;
