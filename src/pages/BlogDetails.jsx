import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import user from "../assets/icons/Group 53.svg";
import parse from "html-react-parser";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";
import { CgArrowLeftO } from "react-icons/cg";
import { BsShare } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState([]);
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleDislikeClick = () => {
    setDisliked(!disliked);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  useEffect(() => {
    const fetchPartnerDetails = async () => {
      try {
        const response = await fetch(
          `https://rahu.reachahand.org/api/posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch partner details");
        }
        const data = await response.json();
        // Update state with partner details
        setEventDetails(data);
      } catch (error) {
        console.error("Error fetching partner details:", error);
      }
    };

    fetchPartnerDetails();
  }, [id]);

  const descriptionContent =
    typeof eventDetails.desc === "string"
      ? parse(eventDetails.desc)
      : JSON.stringify(eventDetails.desc);
  return (
    <div>
      <div className="w-full justify-items-center content-center">
        <div className="mt-5 mb-10 w-full">
          <NavBar />
        </div>
        <motion.div
          onClick={handleGoBack}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex gap-4 mt-[130px] lg:mt-[180px] cursor-pointer mx-5 md:mx-[10%]"
        >
          <CgArrowLeftO className="w-[30px] h-[30px] opacity-95" />
          <p className="poppinsRegular text-sm mt-2">Back</p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-5 md:mx-[10%] py-10"
        >
          <img
            src={eventDetails.cover_pic_url}
            alt="LOGO"
            className="rounded-[30px] h-[300px] w-[500px] object-cover border-2 border-gray-500"
          />
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
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-[30px] "
          >
            <div className="flex items-center mx-5 md:mx-[10%]">
              <div className="bg-white rounded-[30px] gap-2 flex items-center">
                <img src={user} alt="user" width={40} className="" />
                <div className="text-left mt-4 laptop-sm:-mt-3">
                  <h3 className="poppinsRegular text-sm font-bold">
                    {eventDetails.owner}
                  </h3>
                  <p className="poppinsRegular text-md text-gray-700">
                    Peer Educator
                  </p>
                </div>
              </div>
              <motion.div
                onClick={handleGoBack}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex gap-4 ml-20  items-center cursor-pointer"
              >
                <p className="poppinsRegular text-sm text-gray-600">Share</p>
                <BsShare className="" />
              </motion.div>
            </div>

            <p className="poppinsRegular text-sm text-gray-700 mx-5 md:mx-[10%]">
              {eventDetails.date}
            </p>
            <p className="poppinsSemiBold h5 text-left laptop-sm:ml-[10%] laptop-sm:mt-20">
              {eventDetails.title}
            </p>
            <p className="poppinsRegular text-base text-gray-700 mx-5 md:mx-[10%]">
              {descriptionContent}
            </p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-4 mt-14 cursor-pointer mx-5 md:mx-[10%]"
            >
              <p className="poppinsRegular text-sm text-gray-600">Like</p>
              <button
                onClick={handleLikeClick}
                style={{
                  color: liked ? "blue" : "black",
                }}
                className="flex items-center"
              >
                <SlLike className="" />
                {likesCount > 0 && (
                  <sup className="text-black text-[15px]">{likesCount}</sup>
                )}
              </button>
              <button
                onClick={handleDislikeClick}
                style={{
                  color: disliked ? "red" : "black",
                }}
              >
                {" "}
                <SlDislike className="" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
