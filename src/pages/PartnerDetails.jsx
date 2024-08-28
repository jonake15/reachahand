import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { CgArrowLeftO } from "react-icons/cg";
import { Footer } from ".";

const PartnerDetails = () => {
  const navigate = useNavigate();
  const [partnerDetails, setPartnerDetails] = useState([]);
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  useEffect(() => {
    const fetchPartnerDetails = async () => {
      try {
        const response = await fetch(
          `https://rahu.reachahand.org/api/partners/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch partner details");
        }
        const data = await response.json();
        // Update state with partner details
        setPartnerDetails(data);
      } catch (error) {
        console.error("Error fetching partner details:", error);
      }
    };

    fetchPartnerDetails();
  }, [id]);
  return (
    <div>
      <div className="w-full">
        <div className="">
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
          <CgArrowLeftO className="w-[50px] h-[50px] opacity-95" />
          <p className="poppinsRegular text-2xl mt-2">Back</p>
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
            src={partnerDetails.cover_pic_url}
            // src='/src/assets/event_2.jpg'
            alt="tile1"
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
          <div className="w-full">
            <div className="bg-white rounded-[30px] mx-5 md:mx-[10%] py-10">
              <div className="content-center">
                <p className="poppinsSemiBold h2 text-left">
                  {partnerDetails.partner_name}
                </p>
                <p className="poppinsRegular body-2 text-gray-700 mb-20">
                  {partnerDetails.partner_category} partner
                </p>
                <p className="poppinsRegular body-1 text-gray-700 mt-5 mb-20">
                  {partnerDetails.desc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PartnerDetails;
