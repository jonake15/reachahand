import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import logo from "../assets/new_logo.png";
import footer from "../assets/Artboard – 13.jpg";
import { motion } from "framer-motion";
import { ContactLinks, footerLinks, socialMedia } from "../constants";
import baxk from "../assets/Artboard – 16.jpg";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Partners from "./Partners";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer } from ".";

const ContactUs = () => {
  let navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using Axios
        const response = await axios.get(
          "https://rahu.reachahand.org/api/partners"
        );

        // Update state with partners data from API response
        setPartners(response.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };
    // Call fetchPartners function when component mounts
    fetchPartners();
  }, []);
  return (
    <div>
      <div className="w-full">
        <div className="mb-10">
          <NavBar />
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-center mt-40 px-5 lg:mx-[10%]"
        >
          <h1 className="h2 poppinsSemiBold text-darkBlue">
            Get in touch with us
          </h1>
          <h3 className="body-1 poppinsRegular pt-5 text-center text-darkBlue">
            Each of RAHU's program, campaign and projects are tailored to impact
            nuggets of information
          </h3>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.25 }}
          className="py-10 mb-20 px-5 lg:mx-[10%]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 w-full">
            <div className="bg-white text-black border-2 border-gray-500 rounded-[30px] h-[50vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.769673126088!2d32.616062500000005!3d0.2829375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbdd2bb92d0f3%3A0xe6b9746a791efb25!2sReach%20A%20Hand%20Uganda%20Office!5e0!3m2!1sen!2sug!4v1712999582229!5m2!1sen!2sug"
                width="100%"
                height="100%"
                title="Reach A Hand Location"
                style={{ border: 2, borderRadius: 20 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              className="p-5 text-white justify-center items-center border-2 border-gray-400 rounded-[30px]"
              style={{
                backgroundImage: `url(${baxk})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <ul className="flex flex-col gap-6 lg:mt-8">
                <div className="flex gap-5 items-center">
                  <FaPhoneVolume
                    size={24}
                    className="fill-current text-white"
                  />
                  <li className="poppinsRegular h6 hover:text-color-gold">
                    +256 414 697 037
                  </li>
                </div>
                <div className="flex gap-5 items-center">
                  <IoMdMail size={24} className="fill-current text-white" />
                  <li className="poppinsRegular h6 leading-normal hover:text-color-gold">
                    info@reachahand.org
                  </li>
                </div>
                <div className="flex gap-5">
                  <FaLocationDot size={24} className="text-white" />
                  <li className="poppinsRegular h6 hover:text-color-gold">
                    Plot 7502, Block 244, <br />
                    Heritage Village, Kasanga, <br />
                    Ggaba road
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:mx-20">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
