import React, { useEffect, useState } from "react";
import logo from "../assets/logos (2).png";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  const handleMouseEnter = (id) => {
    setActiveLink(id);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  return (
    <motion.header
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className={`bg-white w-full h-[100px] lg:h-[50px] fixed top-0 left-0 z-50 px-7 md:px-10 lg:px-[3.5%] ${
        openNavigation ? "bg-white" : "bg-paleWhite backdrop-blur-sm"
      }`}
    >
      <div className="flex bg-[#e5f3ff] lg:h-[90px] items-center rounded-b-[30px] px-10 py-2 laptop-sm:px-10 laptop-sm:py-4">
        <a href="/" className="block mt-5 rounded-xl laptop-sm:mt-4">
          <motion.img
            whileHover={{ scale: "1.00" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            src={logo}
            alt="logo"
            className="w-[60%] tablet:w-[40%] laptop-sm:w-[70%] "
          />
        </a>
        <div className="ml-auto laptop-sm:hidden" onClick={toggleNavigation}>
          {openNavigation ? (
            <IoClose size={40} className="text-black cursor-pointer" />
          ) : (
            <IoMenu size={40} className="text-black cursor-pointer" />
          )}
        </div>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } flex flex-row top-[15px] py-10 px-4 justify-between items-center w-full fixed bg-black rounded-xl bg-opacity-75 text-lg poppinsSemiBold lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className={`flex flex-col gap-8 top-9  items-center justify-center poppinsRegular m-auto ${
              openNavigation ? "text-white" : "text-[#fff]"
            } lg:flex-row`}
          >
            {navLinks.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <motion.a
                  href={item.href}
                  onClick={handleClick}
                  className={`block relative transition-colors text-base md:text-base laptop-sm:text-black laptop-sm:text-sm laptop-md:text-base xl:text-base hover:text-lightBlue${
                    location.pathname === `/${item.href}`
                      ? " poppinsSemiBold text-lightBlue border-2 border-lightBlue -mt-0 p-0 rounded-[10px]"
                      : ""
                  }`}
                >
                  {item.label}
                </motion.a>
                {item.subLinks.length > 0 && activeLink === item.id && (
                  <div className="absolute max-w-xl left-2 lg:left-0 top-full mt-0 bg-color-lightBlue shadow-xl rounded-md">
                    {item.subLinks.map((subLink, subIndex) => (
                      <a
                        key={subIndex}
                        href={subLink.href}
                        className="block w-full px-6 py-2 text-white poppinsSemiBold md:text-[18px] hover:bg-gray-200 hover:text-black"
                        onClick={handleClick}
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden xl:flex lg:-mr-2">
            <a href="PeerFeed">
              <motion.button className="bg-white px-4 py-2 text-sm text-[#343434] rounded-[30px] poppinsRegular hover:bg-[#00274e] hover:text-white hover:border-gold">
                Peer academy
              </motion.button>
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default NavBar;
