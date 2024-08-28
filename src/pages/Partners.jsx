import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import cover from "../assets/Artboard – 23.jpg";
import backdrop from "../assets/Artboard – 6.jpg";
import backdrop2 from "../assets/Artboard – 15.jpg";
import backdrop3 from "../assets/Artboard – 17.jpg";
import top from "../assets/Mask Group 62.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPartners from "../components/ModalPartners";

const Partners = () => {
  let navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [strategicPartners, setStrategicPartners] = useState([]);
  const [implementingPartners, setImplementingPartners] = useState([]);
  const [corporatePartners, setCorporatePartners] = useState([]);

  const [selectedPartner, setSelectedPartner] = useState(null);

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
  };

  const handleCloseModal = () => {
    setSelectedPartner(null);
  };

  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch(
          "https://rahu.reachahand.org/api/partners"
        ); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with partners data from API response
        setPartners(data);

        // Filter partners with category "Strategic"
        const strategicPartners = data.filter(
          (partners) => partners.partner_category === "strategic"
        );
        setStrategicPartners(strategicPartners);

        // Filter partners with category "Implementing"
        const implementingPartners = data.filter(
          (partners) => partners.partner_category === "implementing"
        );
        setImplementingPartners(implementingPartners);

        // Filter partners with category "Corporate"
        const corporatePartners = data.filter(
          (partners) => partners.partner_category === "corporate"
        );
        setCorporatePartners(corporatePartners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchPartners();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="w-full">
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
          className="py-20 mt-[100px] lg:mt-[140px] tablet:px-[5%]"
          style={{
            backgroundImage: `url(${backdrop})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center items-center">
            <h1 className="flex flex-col lg:flex-row h3 lg:h2 text-color-darkBlue poppinsSemiBold items-center">
              Our partners
            </h1>
          </div>
          <h3 className="text-center body-2 lg:body-1 poppinsRegular text-opacity-80 text-darkBlue">
            Each of RAHU's program, campaign and projects is
            <br /> tailored to impact nuggets of information
          </h3>
        </motion.div>
      </div>

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

      <div
        className="flex justify-center items-center mx-[5%] lg:[400px] rounded-[30px]"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={top}
          alt="cover"
          className="w-full object-cover z-100 items-center lg:h-[450px]"
        />
      </div>

      <div className="rounded-[30px] my-20 mx-2 tablet:mx-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-[#E5F2FF] rounded-[30px]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.25 }}
            className="tablet:p-10 p-5"
          >
            <div className="">
              <h1 className="mobile-sm:text-[25px] tablet:h4 poppinsSemiBold text-gray-900 ">
                Implementing partners
              </h1>
              <h3 className="mobile-sm:text-sm tablet:h6 lg:text-base poppinsRegular pt-2 laptop-sm:mb-10">
                Strategic partners are how RAHU works in partnership with other
                organisations with similar mission, as well as communities to
                enhance synergies, sustainability and ownership of programs
              </h3>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[40%] tablet:mb-[10%] laptop-lg:mt-20 tablet:ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
            >
              <div className="flex w-full cursor-pointer">
                {strategicPartners.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handlePartnerClick(item)}
                    className="flex-shrink-0 mobile-sm:mr-1 mobile-md:mr-3 tablet:mr-[8%] laptop-sm:w-[75%] mobile-sm:h-[80px] mobile-md:h-[90px] laptop-sm:h-[120px] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                  >
                    <img
                      src={item.cover_pic_url}
                      alt="team"
                      width={135}
                      className="mobile-sm:w-[80px] mobile-md:w-[90px] mobile-sm:object-contain"
                    />
                  </div>
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
              transition={{ duration: 0.8, delay: 0.25 }}
              className="content-center text-left rounded-[30px] mt-10"
            >
              <h1 className="mobile-sm:text-[25px] tablet:h4 poppinsSemiBold text-gray-900">
                Implementing /Supporting partners
              </h1>
              <h3 className="mobile-sm:text-sm tablet:h6 lg:text-base poppinsRegular leading-normal pt-2 laptop-sm:mb-10">
                Implementing partners are how RAHU works in partnership with
                other organisations with similar mission, as well as communities
                to enhance synergies, sustainability and ownership of programs
              </h3>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[40%] tablet:mb-[10%] laptop-lg:mt-20 tablet:ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
              >
                <div className="flex w-full cursor-pointer">
                  {implementingPartners.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handlePartnerClick(item)}
                      className="flex-shrink-0 mobile-sm:mr-1 mobile-md:mr-3 tablet:mr-[8%] laptop-sm:w-[75%] mobile-sm:h-[80px] mobile-md:h-[90px] laptop-sm:h-[120px] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                    >
                      <img
                        src={item.cover_pic_url}
                        alt="team"
                        width={135}
                        className="mobile-sm:w-[80px] mobile-md:w-[90px] mobile-sm:object-contain"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.25 }}
              className="rounded-[30px]"
            >
              <h1 className="mobile-sm:text-[25px] tablet:h4 poppinsSemiBold text-gray-900">
                Strategic Supporting partners
              </h1>
              <h3 className="mobile-sm:text-sm tablet:h6 lg:text-base poppinsRegular pt-2 laptop-sm:mb-10">
                Corporate partners are how RAHU works in partnership with other
                organisations <br /> with similar mission, as well as
                communities to enhance synergies, sustainability <br />
                and ownership of programs
              </h3>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[40%] tablet:mb-[10%] laptop-lg:mt-20 tablet:ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
              >
                <div className="flex w-full cursor-pointer">
                  {corporatePartners.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handlePartnerClick(item)}
                      className="flex-shrink-0 mobile-sm:mr-1 mobile-md:mr-3 tablet:mr-[8%] laptop-sm:w-[75%] mobile-sm:h-[80px] mobile-md:h-[90px] laptop-sm:h-[120px] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                    >
                      <img
                        src={item.cover_pic_url}
                        alt="team"
                        width={135}
                        className="mobile-sm:w-[80px] mobile-md:w-[90px] mobile-sm:object-contain"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-left rounded-[30px]"
            >
              <h1 className="mobile-sm:text-[25px] tablet:h4 poppinsSemiBold text-gray-900">
                Corporate partners
              </h1>
              <h3 className="mobile-sm:text-sm tablet:h6 lg:text-base poppinsRegular laptop-sm:mb-10">
                Corporate partners are how RAHU works in partnership with other
                organisations <br /> with similar mission, as well as
                communities to enhance synergies, sustainability <br />
                and ownership of programs
              </h3>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[40%] tablet:mb-[10%] laptop-lg:mt-20 tablet:ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
              >
                <div className="flex w-full cursor-pointer">
                  {corporatePartners.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handlePartnerClick(item)}
                      className="flex-shrink-0 mobile-sm:mr-1 mobile-md:mr-3 tablet:mr-[8%] laptop-sm:w-[75%] mobile-sm:h-[80px] mobile-md:h-[90px] laptop-sm:h-[120px] flex justify-center items-center bg-white px-2 py-2 rounded-3xl"
                    >
                      <img
                        src={item.cover_pic_url}
                        alt="team"
                        width={135}
                        className="mobile-sm:w-[80px] mobile-md:w-[90px] mobile-sm:object-contain"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <ModalPartners
              isVisible={!!selectedPartner}
              onClose={handleCloseModal}
              partnerDetails={selectedPartner}
            />
          </motion.div>
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
        className="grid lg:grid-cols-2 gap-6 m-10"
      >
        <div className="bg-white border-2 border-gray-400 rounded-[30px]">
          <img
            src={backdrop2}
            alt="drop"
            className="object-cover rounded-[30px]"
          />
        </div>
        <div
          className="bg-white border-2 border-gray-400 rounded-[30px]"
          style={{
            backgroundImage: `url(${backdrop3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tablet:p-10 p-5">
            <p className="poppinsBold h6 mobile-sm:text-center tablet:text-left tablet:h3">
              Make more impact
              <br /> with us
            </p>
            <p className="mobile-sm:text-[10px] laptop-sm:text-base mobile-sm:text-center laptop-sm:text-left poppinsRegular py-5">
              RAHU inspires youth by introducing them to diverse role models and
              mentors in fields like medicine, education, theatre and creative
              arts entrepreneurship
            </p>
            <a
              href="/GetInvolved"
              className="mobile-sm:ml-6 mobile-md:ml-8 mobile-lg:ml-12 tablet:ml-0"
            >
              <button className="poppinsSemiBold px-8 mobile-sm:py-2 mobile-sm:justify-center mobile-sm:items-center mobile-sm:text-center tablet:py-3 bg-black text-white border-2 border-black rounded-[30px] text-sm justify-center hover:bg-black hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                Get involved
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Partners;
