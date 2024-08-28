import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import job from "../assets/job.jpg";
import OpportuntiesCard from "../components/OpportuntiesCard";
import line from "../assets/Artboard – 5.png";
import backdrop from "../assets/Artboard – 6.jpg";
import yellow from "../assets/Artboard – 18.jpg";

const Opportunities = () => {
  const [partners, setPartners] = useState([]);
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
  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch(
          "https://rahu.reachahand.org/api/opportunities"
        ); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with partners data from API response
        setPartners(data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchPartners();
  }, []);

  const convertHTMLToString = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.innerText;
  };

  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div className="mx-5 md:mx-[10%]">
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
          <div className="flex justify-center items-center">
            <h1 className="flex flex-col text-center lg:flex-row h3 text-color-darkBlue poppinsSemiBold items-center">
              Opportunities at RAHU
            </h1>
          </div>
          <h3 className="text-center mobile-sm:body-2 tablet:h6 poppinsRegular text-opacity-80 text-darkBlue">
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
          <img src={line} alt="line" className="" />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.25 }}
          className="m-5"
        >
          <img
            src={job}
            alt="video"
            className="rounded-[30px] object-contain tablet:object-cover laptop-sm:h-[500px] w-full"
          />
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="my-[5%] px-[10%]"
      >
        <h1 className="mobile-sm:h5 mobile-sm:mt-20 tablet:mt-0 tablet:h3 lg:h3 poppinsBold">
          Recent Opportunities
        </h1>
      </motion.div>

      <div className="text-center justify-center items-center w-full laptop-sm:px-20">
        <div className="grid grid-cols-1 gap-4 w-full mt-10">
          {partners.map((program) => (
            <OpportuntiesCard
              key={program.title}
              id={program.id}
              title={program.title}
              imgUrl={program.cover_pic_url}
              subtext={convertHTMLToString(program.desc).substring(0, 260)}
              date={program.date}
            />
          ))}
        </div>
      </div>

      <div
        className="grid md:grid-cols-2 gap-10 rounded-[30px] p-10 md:p-16 mx-5 md:mx-[10%] mt-10"
        style={{
          backgroundImage: `url(${yellow})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
        }}
      >
        <div className="">
          <h3 className="poppinsSemiBold text-black mobile-sm:text-sm laptop-sm:text-lg mb-5">
            Subscribe for new content
          </h3>
          <h3 className="text-black mobile-sm:text-sm laptop-sm:text-sm poppinsRegular ">
            RAHU inspires youth by introducing them to diverse role models and
            mentors in fields like medicine, education, theatre and creative
            arts entrepreneurship
          </h3>
        </div>
        {!isEmailValid ? (
          <p className="poppinsSemiBold mobile-sm:text-sm laptop-sm:text-sm text-red-800">
            Please enter a valid email address
          </p>
        ) : null}
        <form onSubmit={handleSubmit} className="">
          <input
            type="email"
            placeholder="Enter your email address here"
            value={email}
            onChange={handleInput}
            className="bg-gray-300 w-full cursor-text text-gray-600 mobile-sm:text-sm laptop-sm:text-sm poppinsRegular px-5 py-4 mb-5 rounded-2xl"
          />

          <motion.button
            whileHover={{ scale: "1.0" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            type="submit"
            className="poppinsSemiBold px-10 py-4 bg-black text-white rounded-2xl float-end mobile-sm:text-sm laptop-sm:text-sm justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2"
          >
            Submit
          </motion.button>
        </form>
      </div>

      <div className="mt-10 laptop-sm:px-20">
        <Footer />
      </div>
    </div>
  );
};

export default Opportunities;
