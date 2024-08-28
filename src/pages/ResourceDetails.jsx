import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { CgArrowLeftO } from "react-icons/cg";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";
import { Footer } from ".";

const ResourceDetails = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  useEffect(() => {
    // Function to fetch reports data from Laravel API
    const fetchReports = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/reports/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch partner details");
        }
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Error fetching report details:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchReports();
    console.log(reports, "reports");
  }, [id]);

  const convertHTMLToString = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.innerText;
  };

  return (
    <div>
      {" "}
      <div className="mt-10 mb-10 w-full">
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
            src={reports.image_url}
            alt={reports.id}
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
          className="mx-5 md:mx-[10%]"
        >
          <h2 className="text-3xl poppinsSemiBold mb-2">
            {reports.title}heyyy
          </h2>
          <p className="poppinsRegular text-lg ">
            {convertHTMLToString(reports.desc)}hereee
          </p>
          <motion.p
            initial={{ scale: 1 }} // Add this line to set the initial scale
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
            transition={{ duration: 0.125, ease: "easeInOut" }}
            className="text-lightBlue text-lg"
          >
            {reports.year}
          </motion.p>
        </motion.div>
      </motion.div>
      
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default ResourceDetails;
