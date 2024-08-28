import React, { useEffect, useState } from "react";
import logo from "../assets/new_logo.png";
import {
  ContactLinks,
  footerLinks,
  partners_footer,
  socialMedia,
} from "../constants";
import { motion } from "framer-motion";
import footer from "../assets/Artboard – 13.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PartnerDetails } from "../pages";

const Footer = () => {
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
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="mt-20">
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
        // className="grid grid-cols-2 gap-4 w-full p-5 -mt-[110%] text-white justify-center items-center lg:px-20 md:-mt-[75%] lg:-mt-[30%] xl:-mt-[28%] absolute md:grid md:grid-cols-3 md:gap-4 lg:grid lg:grid-cols-4 lg:gap-1"
        className="w-full text-white rounded-t-[30px] grid grid-cols-1 gap-4 p-10 lg:grid-cols-4 md:grid-cols-2 items-center"
        style={{
          backgroundImage: `url(${footer})`,
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
          className=""
        >
          <a href="/">
            <motion.img
              whileHover={{ scale: "1.05" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              src={logo}
              alt="logo"
              className="w-[100px] md:w-[100px] lg:w-[150px]"
            />
          </a>

          <p className="poppinsRegular text-[10px] lg:text-sm mt-3 mb-3 md:mt-10 ">
            Reach a hand Uganda is a youth <br />
            centered organisation focusing on <br /> youth empowerment programs.
          </p>
          <div>
            <p className="poppinsSemiBold text-md">Partners</p>
            <div className="flex items-center gap-2 md:gap-2 mt-5 absolute">
              {partners_footer.map((item) => (
                <div key={item.id} className="flex flex-row justify-between">
                  <img
                    src={item.image}
                    alt="logo"
                    onClick={() => navigate(`/PartnerDetails/${item.id}`)}
                    className="flex-shrink-0 justify-center items-center object-cover w-7 h-7 rounded-lg"
                  />
                </div>
              ))}
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
          className="mobile-sm:mt-10"
        >
          {footerLinks.map((section, footerIndex) => (
            <div key={footerIndex}>
              <h3 className="poppinsSemiBold text-md lg:mt-10">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="lg:mt-5 poppinsRegular space-y-0 leading-none mobile-sm:text-[9px] lg:text-[10px] mb-2 mt-2 lg:mb-6 hover:text-gray-500"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className=""
        >
          {ContactLinks.map((section, contactIndex) => (
            <div key={contactIndex}>
              <h3 className="poppinsSemiBold text-md lg:mt-10">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="lg:mt-5 poppinsRegular text-[10px] mb-2 mt-2 leading-normal lg:mb-6 hover:text-gray-500"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex items-center gap-3 ">
            {socialMedia.map((item, socialIndex) => (
              <a key={socialIndex} href={item.link}>
                <img
                  key={socialIndex}
                  src={item.imgUrl}
                  alt="logo"
                  width={25}
                />
              </a>
            ))}
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
          className=""
        >
          <motion.button
            whileHover={{ scale: "1.05" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            className="py-1 px-4 lg:py-3 lg:px-10 text-[15px] border-2 border-white rounded-[25px] poppinsSemiBold text-color-lightBlue"
          >
            Subscribe Newsletter
          </motion.button>
          <a href="PeerSignin">
            <motion.h3
              whileHover={{ scale: "1.05" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              className="poppinsSemiBold mt-3 lg:mt-10 lg:ml-5 text-[15px]"
            >
              Peer Educators Academy
            </motion.h3>
          </a>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Footer;
