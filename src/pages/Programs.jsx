import React, { useEffect, useState } from "react";
import { thematic } from "../constants";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import cover from "../assets/drop-yellow.jpg";
import top from "../assets/Group 202.png";
import backdrop from "../assets/Artboard – 6.jpg";
import { useNavigate } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import Modal from "../components/Modal";
import ModalPrograms from "../components/ModalPrograms";
import { MediaPlayer, MediaProvider } from "@vidstack/react";

const Programs = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [strategicPartners, setStrategicPartners] = useState([]);
  const [implementingPartners, setImplementingPartners] = useState([]);
  const [corporatePartners, setCorporatePartners] = useState([]);
  const [finalPartners, setFinalPartners] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: "50%", left: "50%" });

  const [selectedPartner, setSelectedPartner] = useState(null);

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
  };

  const handleCloseModal = () => {
    setSelectedPartner(null);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setIconPosition({ top: y, left: x });
  };

  const handlePlayClick = () => {
    setPlaying(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setPlaying(false);
    setShowPopup(false);
  };

  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch(
          "https://rahu.reachahand.org/api/programs"
        ); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with partners data from API response
        setPartners(data);

        // Filter partners with category "Strategic"
        const strategicPartners = data.filter(
          (partners) => partners.category === "SRHR"
        );
        setStrategicPartners(strategicPartners);

        // Filter partners with category "Implementing"
        const implementingPartners = data.filter(
          (partners) =>
            partners.category === "Youth Livelihoods and Innovations"
        );
        setImplementingPartners(implementingPartners);

        // Filter partners with category "Corporate"
        const corporatePartners = data.filter(
          (partners) => partners.category === "SautiPlus Media Hub"
        );
        setCorporatePartners(corporatePartners);

        // Filter partners with category "Corporate"
        const finalPartners = data.filter(
          (partners) => partners.category === "IDEAS"
        );
        setFinalPartners(finalPartners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchPartners();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="w-full ">
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
          className="py-[10%] mt-[100px] lg:mt-[140px] px-[5%]"
          style={{
            backgroundImage: `url(${backdrop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h1 className="h2 laptop-sm:h2 mb-10 poppinsSemiBold text-darkBlue">
              Our Programs
            </h1>
            <h3 className="laptop-sm:text-lg md:body-1 body-2 poppinsRegular text-opacity-80 text-darkBlue">
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
        className="flex justify-center items-center mx-5 lg:mx-20 rounded-3xl"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={top}
          alt="cover"
          className="object-cover z-100 justify-center "
        />
        <FaRegPlayCircle
          size={100}
          className="fill-white cursor-pointer mt-[30%] w-[20px] h-[20px] tablet:w-[100px] tablet:h-[50px] laptop-sm:mt-[30%] laptop-sm:ml-[11%] absolute"
          onClick={handlePlayClick}
        />
      </div>

      <div className="w-full rounded-[30px] content-center text-center">
        <div className="">
          <div className="relative" onMouseMove={handleMouseMove}>
            {showPopup && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.25 }}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              >
                <div className="relative w-3/5 bg-color-lightBlue p-4 rounded-[35px]">
                  <button
                    className="absolute top-2 right-2 text-black"
                    onClick={handleClosePopup}
                  >
                    &times;
                  </button>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=zjbqwvIh5LU"
                    playing={playing}
                    width="100%"
                    height="60vh"
                    className="rounded-[35px]"
                  />
                </div>
              </motion.div>
            )}
            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 blur z-40" />
            )}
          </div>

          <div className="bg-[#E5F2FF] rounded-[30px] mx-5 xl:mx-20 ">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-[#E5F2FF] grid grid-cols-1 w-full h-full px-10 justify-items-left items-center mt-20 xl:mt-[10%] laptop-sm:mb-20 rounded-[30px]"
            >
              <div className=" w-full">
                <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
                  <p className="poppinsSemiBold h4 leading-normal text-left mt-20">
                    SRHR
                  </p>
                  <p className="text-left poppinsRegular text-[10px] lg:body-2 leading-normal mobile-sm:mb-5 laptop-sm:mb-20 lg:pr-[40%]">
                    Under this program, RAHU seeks to remain the leading SRHR
                    hub in Uganda that is responsive to the changing and diverse
                    needs of its target groups and ensure that access to SRHR
                    services, information,
                  </p>
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
                        className="flex-shrink-0 mobile-sm:mr-1 mobile-md:mr-3 tablet:mr-[8%] laptop-sm:w-[75%] mobile-sm:h-[80px] mobile-md:h-[90px] laptop-sm:h-[120px] flex justify-center items-center bg-white px-2 py-2 rounded-xl"
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
              </div>
              <div className=" w-full">
                <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
                  <p className="poppinsBold mobile-sm:text-[24px] tablet:h4 leading-normal text-left mt-5">
                    Youth Livelihoods and Innovations (YLI)
                  </p>
                  <p className="text-left poppinsRegular text-[10px] lg:body-2 leading-normal mobile-sm:mb-5 laptop-sm:mb-20 xl:pr-[40%]">
                    Under this program, RAHU seeks to remain the leading SRHR
                    hub in Uganda that is responsive to the changing and diverse
                    needs of its target groups and ensure that access to SRHR
                  </p>
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-4 gap-6 lg:grid lg:grid-cols-6 lg:gap-6 w-full justify-center items-center mb-[40%] tablet:mb-[10%] laptop-sm:mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {implementingPartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handlePartnerClick(item)}
                        className="flex-shrink-0 mobile-sm:mr-1 mobile-md:mr-3 tablet:mr-[8%] laptop-sm:w-[75%] mobile-sm:h-[80px] mobile-md:h-[90px] laptop-sm:h-[120px] flex justify-center items-center bg-white px-2 py-2 rounded-xl"
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
              </div>
              <div className=" w-full">
                <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
                  <p className="poppinsSemiBold h4 leading-normal text-left mt-5">
                    SautiPlus Media Hub
                  </p>
                  <p className="text-left poppinsRegular text-[10px] lg:body-2 leading-normal mb-5 laptop-sm:mb-20 xl:pr-[40%]">
                    Under this Program, RAHU seeks to invest itself in evolving
                    itself into a centre of excellence on health communications,
                    knowledge management and innovations.
                  </p>
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-4 lg:grid lg:grid-cols-6 gap-6 w-full justify-center items-center mb-[40%] tablet:mb-[10%] laptop-sm:mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {corporatePartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handlePartnerClick(item)}
                        className="flex-shrink-0 mobile-sm:mr-1 mobile-md:mr-3 tablet:mr-[8%] laptop-sm:w-[75%] mobile-sm:h-[80px] mobile-md:h-[90px] laptop-sm:h-[120px] flex justify-center items-center bg-white px-2 py-2 rounded-xl"
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
              </div>
              <div className=" w-full">
                <div className=" rounded-[30px] xl:pl-10 xl:pr-10 ">
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="poppinsSemiBold mobile-sm:text-[22px] laptop-sm:h5 leading-normal text-left mt-5"
                  >
                    Institutional Development, Engagement and Sustainability
                    (IDEAS)
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-left poppinsRegular text-[10px] lg:body-2 leading-normal mb-5 tablet:mb-20 xl:pr-[40%]"
                  >
                    RAHU as a youth organisation acknowledges that it’s a
                    fast-growing institution characterised by exponential growth
                    programmatically and in terms of geographical spread across
                    3 continents (Africa, Europe and USA) – which necessitates
                    consciously and intentionally managing our growth.
                  </motion.p>
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="grid grid-cols-4 lg:grid lg:grid-cols-6 gap-6 w-full justify-center items-center mb-[40%] tablet:mb-[10%] xl:mt-20 ml-10 overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                  <div className="flex w-full cursor-pointer">
                    {finalPartners.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handlePartnerClick(item)}
                        className="flex-shrink-0 mobile-sm:mr-1 mobile-md:mr-3 tablet:mr-[8%] laptop-sm:w-[75%] mobile-sm:h-[80px] mobile-md:h-[90px] laptop-sm:h-[120px] flex justify-center items-center bg-white px-2 py-2 rounded-xl"
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
              </div>
              <ModalPrograms
                isVisible={!!selectedPartner}
                onClose={handleCloseModal}
                partnerDetails={selectedPartner}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="lg:mx-20">
        <Footer />
      </div>
    </div>
  );
};

export default Programs;
