import React, { useEffect, useState } from "react";
import home5 from "../../assets/Web 1920 – 25.jpg";
import happening from "../../assets/happening-1.jpg";
import arrow from "../../assets/icons/featherIcons/arrow-up-right.svg";
import { motion } from "framer-motion";
import round from "../../assets/round.png";

const Section3 = () => {
  const [events, setEvents] = useState([]);

  // Fetch the latest events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://rahu.reachahand.org/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.2,
        }}
        className="my-[10%] bg-[#e5f3ff] p-5 laptop-sm:p-20 rounded-[30px]"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="h3 text-left text-black poppinsBold pb-5"
        >
          What's happening at RAHU
        </motion.h1>
        <div className="grid grid-cols-1 gap-4 laptop-sm:grid laptop-sm:grid-cols-3 md:grid-cols-2">
          <div className="rounded-[30px] tablet:h-[400px] lg:bg-white grid grid-rows-2 gap-4">
            {events.slice(0, 1).map((event) => (
              <div key={event.id}>
                <div
                  className="relative flex flex-1 rounded-[30px] p-10 h-[200px] tablet:w-[300px] tablet:h-[200px] tablet:m-5 laptop-sm:w-[320px] laptop-sm:h-[180px] laptop-md:w-[320px] laptop-sm:m-4"
                  style={{
                    backgroundImage: `url(${
                      event.main_image_url || happening
                    })`, // Replace 'happening' with a default image if needed
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <button className="absolute bottom-3 left-4 text-white backdrop-blur-md poppinsRegular text-sm px-6 py-2 rounded-[30px]">
                    Events
                  </button>
                </div>
                <div>
                  <p className="poppinsRegular body-2 tablet:text-sm tablet:mt-6 text-black mx-4 hover:text-color-gold cursor-pointer">
                    {event.title ||
                      "A peer educator affiliated with Nyaruhandagazi Health III Centre..."}
                  </p>
                  <div className="flex justify-between mobile-sm:px-5 tablet:px-6 tablet:mt-6 pb-[10%] laptop-sm:mt-[30%] laptop-sm:pb-0 items-center">
                    <a href="Events">
                      <p className="poppinsRegular hover:text-gray-600 cursor-pointer underline text-sm">
                        Read more
                      </p>
                    </a>

                    <a href="Events">
                      <img
                        src={arrow}
                        alt="arrow"
                        width={20}
                        height={20}
                        className="bg-white rounded-full hover:border cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {events.slice(1, 2).map((event) => (
            <div
              className="rounded-[30px] py-4"
              style={{
                backgroundImage: `url(${home5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex justify-start ml-8 mb-4">
                <button className="flex items-center py-2 px-4 lg:mt-4 bg-white border-white rounded-[30px] text-gray-700 hover:border-green-500 hover:border">
                  <div className="rounded-full">
                    <img
                      src={happening}
                      alt="face"
                      className="object-cover rounded-full h-10 w-10"
                    />
                  </div>
                  <div className="ml-2 ">
                    <div className="poppinsRegular mobile-sm:text-[10px] lg:text-[11px] ">
                      Peer educator
                    </div>
                    <div className="poppinsSemiBold mobile-sm:text-[10px] lg:text-[12px]">
                      Benson Muhindo
                    </div>
                  </div>
                </button>
              </div>

              <h2 className="poppinsSemiBold lg:h5 lg:pt-20 px-[10%] hover:text-white cursor-pointer">
                {event.title}
              </h2>
              <h3 className="poppinsRegular px-[10%] py-[5%] lg:text-sm hover:text-white cursor-pointer">
                A peer educator affiliated with Nyaruhandagazi Health III
                Centre...
              </h3>
              <a href="/Events">
                <p className="poppinsRegular px-[10%] lg:text-sm lg:mt-5 text-black underline hover:text-white cursor-pointer">
                  Read more
                </p>
              </a>
            </div>
          ))}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#658dc0] rounded-[30px] py-1">
              <div className="flex justify-start ml-8 my-3">
                <button className="flex items-center py-2 px-4 lg:mt-4 bg-white border-white rounded-[30px] text-gray-700 hover:border-green-500 hover:border">
                  <div className=" rounded-full">
                    <img
                      src={round}
                      alt="face"
                      className="object-cover w-10 h-10"
                    />
                  </div>
                  <div className="ml-2 ">
                    <div className="poppinsRegular mobile-sm:text-[10px] lg:text-[11px] ">
                      Peer educator
                    </div>
                    <div className="poppinsSemiBold mobile-sm:text-[10px] lg:text-[12px]">
                      Shafik Nassim
                    </div>
                  </div>
                </button>
              </div>

              <h2 className="poppinsSemiBold px-[10%] text-white hover:text-color-green cursor-pointer">
                Reflecting on 35
              </h2>
              <h3 className="poppinsRegular px-[10%] py-[5%] text-sm text-white hover:text-color-green cursor-pointer">
                What a beautiful time of the year to celebrate..
              </h3>
              <div className="flex justify-between px-[10%] pb-[2%] text-sm items-center">
                <a href="/Events">
                  <p className="poppinsRegular cursor-pointer hover:text-gray-300 underline">
                    Read more
                  </p>
                </a>

                <span>
                  <img
                    src={arrow}
                    alt="user"
                    width={20}
                    height={20}
                    className="bg-white rounded-full hover:border cursor-pointer"
                  />
                </span>
              </div>
            </div>
            <div className="bg-color-green rounded-[30px]">
              <button className="bg-white m-5 ml-10 rounded-[30px] gap-4 px-4 py-1 poppinsRegular text-n-7 flex hover:text-color-darkMaroon hover:border-darkMaroon hover:border-2  cursor-pointer">
                Blogs
              </button>
              <p className="flex justify-between px-[10%] text-sm items-center poppinsRegular hover:text-white cursor-pointer">
                {" "}
                Before joining peer education
                <a href="/Events" className="">
                  <img
                    src={arrow}
                    alt="user"
                    width={20}
                    height={20}
                    className="bg-white rounded-full hover:border"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section3;
