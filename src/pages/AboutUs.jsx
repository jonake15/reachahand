import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import top from "../assets/LJ4B5813 copy.png";
import cover from "../assets/drop-yellow.jpg";
import backdrop from "../assets/Artboard – 6.jpg";
import team from "../assets/rahu-team-collage.jpg";
import crystal from "../assets/Teams elements/crytsal.png";
import yellow from "../assets/Teams elements/yellow.png";
import purple from "../assets/Teams elements/purple.png";
import firsts from "../assets/Teams elements/boards.png";
import managers from "../assets/Teams elements/managers.png";
import officers from "../assets/Teams elements/officers.png";
import backdrop2 from "../assets/Artboard – 15.jpg";
import backdrop3 from "../assets/Artboard – 17.jpg";
import afri from "../assets/Artboard – 6.jpg";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import program from "../assets/program-1.jpg";
import { Poster } from "@vidstack/react";
import { PlayButton } from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";
import "@vidstack/react/player/styles/base.css";
import Modal from "../components/Modal";

const AboutUs = () => {
  const [users, setUsers] = useState([]);
  const [staff, setStaff] = useState([]);
  const [cultural, setCultural] = useState([]);
  const [board, setBoard] = useState([]);

  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleStaffClick = (staffMember) => {
    setSelectedStaff(staffMember);
  };

  const handleCloseModal = () => {
    setSelectedStaff(null);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleMouseEnter = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      setIsPlaying(false);
    }
  };
  const handleMouseLeave = () => {
    // Do nothing to keep the video paused when the mouse leaves
  };
  const handleUnmute = () => {
    if (playerRef.current) {
      playerRef.current.muted = false;
      setIsMuted(false);
    }
  };

  useEffect(() => {
    // Function to fetch users data from Laravel API
    const fetchUsers = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch("https://rahu.reachahand.org/api/profile"); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with users data from API response
        setUsers(data);

        // Filter users with category "Strategic"
        const staff = data.filter((users) => users.category === "Staff");
        setStaff(staff);

        // Filter users with category "Implementing"
        const cultural = data.filter(
          (users) => users.category === "Cultural icon"
        );
        setCultural(cultural);

        // Filter users with category "Corporate"
        const board = data.filter((users) => users.category === "Board Member");
        setBoard(board);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchUsers();
  }, []);
  return (
    <div className="w-full bg-paleWhite rounded-[30px] content-center">
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
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-center items-center">
            <h1 className="h3 lg:h2 text-color-darkBlue poppinsSemiBold text-center">
              Empowerment for
              <br /> youth by youth
            </h1>
          </div>
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
        className="lg:h-[100px]"
      >
        <img src={line} alt="line" className="w-full" />
      </motion.div>

      <div
        className="flex justify-center items-center mx-[5%] rounded-[30px]"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={top}
          alt="cover"
          className="w-full z-100 object-contain items-center lg:h-[400px]"
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
        className="flex flex-col lg:grid lg:grid-cols-1 w-full px-[5%] justify-items-center items-center lg:mt-40"
      >
        <div className="xl:flex xl:flex-cols-2 gap-10">
          <div className="text-black rounded-[30px] w-[1/2]">
            <p className="poppinsSemiBold mt-10 mb-5 text-center lg:text-left text-color-darkBlue h2 text-gold">
              Who we are
            </p>
            <p className="text-sm tablet:h5 lg:body-1 text-color-darkBlue text-center lg:text-left poppinsRegular">
              Reach A Hand Uganda is a youth centered organisation focusing on
              youth empowerment programs with emphasis of livelihood and Skills
              Development, Behaviour change communication, Sexual Reproductive
              Health & Rights and HIV/AIDS awareness and prevention
            </p>
          </div>
          <div className="text-black border-2 mt-20 lg:mt-5 border-gray-400 justify-between rounded-[30px] w-[1/2] lg:h-[350px]">
            <MediaPlayer
              className="w-full h-full rounded-[30px] bg-black"
              playsInline
              title="Sprite Fight"
              src="https://www.youtube.com/watch?v=r_ZXOoemDgs&pp=ygUKcmVhY2hhaGFuZA%3D%3D"
              load="eager"
              autoplay
              loop
              muted={isMuted}
              ref={playerRef}
              onPlay={handlePlay}
              onPause={handlePause}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleUnmute}
            >
              <MediaProvider>
                <Poster
                  className="relative object-cover inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-90 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
                  src={program}
                  alt="Reachahand video"
                />
              </MediaProvider>
              {!isPlaying && (
                <PlayButton className="group ring-sky-400 absolute mt-[60%] inline-flex h-0 xl:ml-10 xl:mb-20 w-12  cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
                  <PlayIcon
                    size={50}
                    className="justify-items-center relative bg-white p-1 rounded-full hidden group-data-[paused]:block"
                  />
                  <PauseIcon
                    size={50}
                    className="justify-items-center relative bg-white p-1 rounded-full group-data-[paused]:hidden"
                  />
                </PlayButton>
              )}
            </MediaPlayer>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 lg:mt-40 lg:px-20">
        <p className="h1 text-color-darkBlue p-5 text-center items-center poppinsSemiBold">
          Meet our team
        </p>
        <img src={team} className="w-full rounded-[30px] mt-10 px-4" />
      </div>

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
        className="py-20 mt-[30px] lg:mt-[140px] px-[5%]"
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="h4 lg:h2 text-color-darkBlue poppinsSemiBold text-center">
          Dynamic , Vibrant and <br /> Purpose led
        </h1>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className=" w-full justify-items-center items-center text-center mt-[0]"
      >
        <h3 className="poppinsRegular opacity-85 mt-5 xl:mt-0 h4 text-center">
          Board of Directors
        </h3>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="laptop-sm:grid laptop-sm:grid-cols-5 laptop-sm:gap-6 w-full h-full laptop-sm:ml-[5%] justify-items-center items-center laptop-sm:mt-[2%] laptop-sm:mb-[4%] overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <div className="w-full">
          <div className="flex">
            {staff.map((item, index) => (
              <div
                key={index}
                className="mr-10 w-full justify-center items-center cursor-pointer"
                onClick={() => handleStaffClick(item)}
              >
                <div className="items-center justify-center w-full mt-20">
                  <motion.div>
                    {" "}
                    <img
                      src={crystal}
                      alt="team"
                      className="mobile-sm:w-[100px] tablet:w-full laptop-sm:ml-10 laptop-sm:mt-[10%]"
                    />
                  </motion.div>

                  <img
                    src={firsts}
                    alt="team"
                    className="mobile-sm:-mt-[114%] mobile-md:-mt-[110%] mobile-lg:-mt-[90%] tablet:-mt-[114%] ml-[40px] mobile-sm:w-[100px] tablet:w-full laptop-sm:-mt-[114%] laptop-sm:ml-[40px]"
                  />
                </div>
                <h3 className="poppinsSemiBold body-2 ml-[60px] xl:ml-20 leading-6 text-center ">
                  {item.first_name}
                  <br />
                  {item.last_name}
                </h3>
                <p className="poppinsRegular text-[10px] lg:text-sm leading-normal ml-10 text-gray-500 text-center lg:ml-20">
                  {item.position.substring(0, 25)}...
                </p>
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
        className=" w-full justify-items-center items-center text-center mt-[10%]"
      >
        <h3 className="poppinsRegular opacity-85 h4 text-center">Managers</h3>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-5 gap-6 w-full h-full ml-[5%] justify-items-center items-center mt-[2%] mb-[4%] overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <div className="w-full">
          <div className="flex">
            {staff.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-10 w-full justify-center items-center"
                onClick={() => handleStaffClick(item)}
              >
                <div className="items-center justify-center w-full mt-20">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{
                      duration: 0.5,
                      loop: Infinity,
                      ease: "linear",
                    }}
                  >
                    {" "}
                    <motion.img
                      whileHover={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        loop: Infinity,
                        ease: "linear",
                      }}
                      src={yellow}
                      alt="team"
                      className="laptop-sm:ml-10 laptop-sm:mt-[10%]"
                    />
                  </motion.div>
                  <img
                    src={managers}
                    alt="team"
                    className="laptop-sm:-mt-[114%] laptop-sm:ml-[40px]"
                  />
                </div>
                <h3 className="poppinsSemiBold body-2 ml-[60px] lg:ml-20 leading-6 text-center mt-4 ">
                  {item.first_name}
                  <br />
                  {item.last_name}
                </h3>
                <p className="poppinsRegular text-[10px] lg:text-sm leading-normal text-gray-500 text-center ml-10 lg:ml-20">
                  {item.position.substring(0, 30)}...
                </p>
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
        className=" w-full justify-items-center items-center text-center mt-[10%]"
      >
        <h3 className="poppinsRegular opacity-85 h4 text-center">Officers</h3>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-5 gap-6 w-full h-full ml-[5%] justify-items-center items-center mt-[2%] mb-[4%] overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <div className="w-full">
          <div className="flex">
            {staff.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-10 w-full justify-center items-center"
              >
                <div className="items-center justify-center w-full mt-20">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{
                      duration: 0.5,
                      loop: Infinity,
                      ease: "linear",
                    }}
                  >
                    {" "}
                    <motion.img
                      whileHover={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        loop: Infinity,
                        ease: "linear",
                      }}
                      src={purple}
                      alt="team"
                      className="ml-10 mt-[10%]"
                    />
                  </motion.div>
                  <img
                    src={officers}
                    alt="team"
                    className="-mt-[114%] ml-[40px]"
                  />
                </div>
                <h3 className="poppinsSemiBold body-2 ml-[60px] lg:ml-20 leading-6 text-center mt-4 ">
                  {item.first_name}
                  <br />
                  {item.last_name}
                </h3>
                <p className="poppinsRegular text-[10px] ml-10 lg:text-sm leading-normal text-gray-500 text-center lg:ml-20">
                  {item.position.substring(0, 30)}...
                </p>
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
        className="grid lg:grid-cols-2 gap-6 m-10"
      >
        <div className="bg-white border-2 border-gray-400 rounded-[30px]">
          <img
            src={backdrop2}
            alt="drop"
            className="object-contain rounded-[30px]"
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
          <div className="p-10">
            <p className="poppinsBold h3">
              Make more impact
              <br /> with us
            </p>
            <p className="text-left poppinsRegular lg:text-md py-3">
              RAHU inspires youth by introducing them to diverse role <br />
              models and mentors in fields like medicine, education, theatre and
              creative arts entrepreneurship
            </p>
            <a href="/GetInvolved">
              <button className="poppinsSemiBold px-8 py-2 bg-black text-white border-2 border-black rounded-[30px] text-sm justify-center hover:bg-color-darkBlue hover:text-darkBlue hover:border-darkMaroon hover:border-2">
                Get involved
              </button>
            </a>
          </div>
        </div>
      </motion.div>
      <Modal
        isVisible={!!selectedStaff}
        onClose={handleCloseModal}
        staffMember={selectedStaff}
      />

      <div className="mt-10 xl:px-20 items-center">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
