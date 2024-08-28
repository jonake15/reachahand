import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logo from "../assets/rahu icon.png";
import { motion } from "framer-motion";
import {
  ContactLinks,
  footerLinks,
  resources,
  socialMedia,
} from "../constants";
import user from "../assets/icons/Group 53.svg";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch("https://rahu.reachahand.org/api/reports"); // Update the URL with your actual API endpoint
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
        <div className="content-center text-center w-full">
          <div className="mb-10">
            <NavBar />
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.35 }}
            className=" text-center justify-items-center mobile-sm:mt-40 laptop-sm:mt-[15%]"
          >
            <div className=" text-center">
              <h1 className="mobile-sm:h4 laptop-sm:h2 poppinsSemiBold leading-normal text-center">
                Resources at RAHU
              </h1>
            </div>
          </motion.div>

          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mobile-sm:text-[10px] laptop-sm:h6 poppinsRegular leading-normal"
          >
            Each of RAHU's program, campaign and projects are tailored <br /> to
            impact nuggets of information
          </motion.h3>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9, delay: 0.25 }}
          className="laptop-sm:grid laptop-sm:grid-cols-3 laptop-sm:gap-8 tablet:justify-center tablet:items-center tablet:ml-20 w-full mb-40 mobile-sm:px-5 laptop-sm:px-20 mt-20"
        >
          {partners.map((item, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-paleWhite rounded-[30px]"
              key={index}
              onClick={() => navigate(`/ResourceDetails/${item.id}`)}
            >
              <div className="">
                <div className="poppinsRegular justify-around bg-gray-200 flex text-left mobile-sm:w-[40%] mobile-md:w-[37%] tablet:w-[18%] laptop-sm:w-[28%] px-1 text-black mt-10 mb-10 rounded-[20px] text-sm hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                  <img
                    src={user}
                    alt="round"
                    width={50}
                    className="mt-3 mobile-sm:w-[30px]"
                  />
                  <div className="mt-2">
                    <p className="mobile-sm:text-sm laptop-sm:text-[10px]">
                      John Ssaka
                    </p>
                    <p className="text-gray-700 mobile-sm:text-[10px] laptop-sm:text-md">
                      Author
                    </p>
                  </div>
                </div>
                <img
                  src={item.image_url}
                  alt="paper"
                  className="rounded-[30px] mobile-sm:w-[500px] mobile-sm:h-[200px] mb-5 object-cover laptop-sm:w-[600px] laptop-sm:h-[300px]"
                />
                <h3 className="mobile-sm:body-1 laptop-sm:h6 poppinsSemiBold leading-normal text-left">
                  {item.title}
                </h3>
                <p className="mobile-sm:text-[10px] tablet:mr-[30%] laptop-sm:text-sm poppinsRegular mt-4">
                  {convertHTMLToString(item.desc).substring(0, 100)}...
                </p>
                <p className="text-sm laptop-sm:text-sm poppinsRegular font-bold mt-4">
                  Date: {item.year}
                </p>
                <motion.button
                  whileHover={{ scale: "1.00" }}
                  whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                  transition={{ duration: "0.125", ease: "easeInOut" }}
                  onClick={() => navigate(`/ResourceDetails/${item.id}`)}
                  className="poppinsRegular px-4 py-1 text-black opacity-80 border-2 border-opacity-80 border-black mb-10 mt-10 rounded-[30px] text-sm laptop-sm:text-sm justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2"
                >
                  Read more
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
          className="px-5 laptop-sm:px-20"
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
