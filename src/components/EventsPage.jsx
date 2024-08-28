import React, { useEffect, useState } from "react";
import user from "../assets/icons/Group 53.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  let navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://rahu.reachahand.org/api/events");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Function to remove HTML tags from a string
  const removeHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="xl:grid xl:grid-cols-3 gap-5 justify-center items-center w-full px-10"
      >
        {events.map((item, index, i) => (
          <div className="w-full h-[300px] xl:h-[450px] mt-10" key={index}>
            <div className="">
              <img
                src={item.main_image_url}
                alt="post"
                width={600}
                onClick={() => navigate(`/EventDetails/${item.id}`)}
                className="rounded-[30px] h-[200px] laptop-sm:h-[350px] object-cover relative border-1 border-gray-500"
              />
              <div className=" bg-white rounded-[30px] gap-2 absolute flex text-center -mt-[16%] md:-mt-[13%] laptop-sm:-mt-[5%] ml-4 p-1">
                <img src={user} alt="user" width={30} className="mt-1" />
                <div className="text-left mt-2 ">
                  <h3 className="poppinsRegular text-sm leading-1 font-bold">
                    Sarah Anne
                  </h3>
                  <p className="poppinsRegular text-[10px] leading-5 text-gray-700">
                    Peer Educator
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-40">
              {/* Display the truncated title */}
              <h2 className="poppinsSemiBold text-left leading-normal h6 py-4">
                {item.title && item.title.substring(0, 28)}..
              </h2>

              {/* Display the first 50 characters of the description as plain text */}
              <h3 className="poppinsRegular text-gray-600 text-left leading-normal body-2">
                {removeHtmlTags(item.description.substring(0, 50))}
                ...
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default EventsPage;
