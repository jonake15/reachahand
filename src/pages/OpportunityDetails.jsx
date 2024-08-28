import React, { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { CgArrowLeftO, CgAttachment } from "react-icons/cg";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";
import { Footer } from ".";

const OpportunityDetails = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const { id } = useParams();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_111d5co", "template_ffit53y", form.current, {
        publicKey: "G0QioQZDlHVc38IU3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Clear form inputs after submission
    form.current.reset();
  };

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  useEffect(() => {
    // Function to fetch partners data from Laravel API
    const fetchPartners = async () => {
      try {
        // Make GET request to your Laravel API endpoint using fetch
        const response = await fetch(
          `http://127.0.0.1:8000/api/opportunities/${id}`
        ); // Update the URL with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Update state with partners data from API response
        setPartners(data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    // Call fetchPartners function when component mounts
    fetchPartners();
    console.log(partners, "data is here");
  }, [id]);

  const convertHTMLToString = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.innerText;
  };

  return (
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
          src={partners.cover_pic_url}
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
        className="w-full"
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
            {partners.title}
          </h2>
          <p className="poppinsRegular text-lg leading-normal ">
            {convertHTMLToString(partners.desc)}
          </p>
          <motion.p
            whileHover={{ scale: "1.05" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            className="text-lightBlue text-lg "
          >
            Deadline: {partners.date}
          </motion.p>
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <h2>Email Sent Successfully!</h2>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
          <motion.form
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            ref={form}
            onSubmit={sendEmail}
            className="mt-20 mb-20 w-full"
          >
            <h1 className="poppinsSemiBold text-2xl mb-10 ">To apply</h1>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="">
                <div className="mb-4">
                  <label
                    htmlFor="from_name"
                    className="poppinsRegular text-gray-600 text-lg "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="from_name"
                    className="border-2 border-gray-400 poppinsRegular text-gray-600 rounded-md w-full p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="from_title"
                    className="poppinsRegular text-gray-600 text-lg"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="from_title"
                    className="border-2 border-gray-400 rounded-md w-full p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="poppinsRegular text-gray-600 text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    className="border-2 border-gray-400 rounded-md w-full p-2"
                    required
                  />
                </div>
              </div>
              <div className="">
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="poppinsRegular text-gray-600 text-lg"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="from_contact"
                    className="border-2 border-gray-400 rounded-md w-full p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="linkedInUrl"
                    className="poppinsRegular text-gray-600 text-lg"
                  >
                    LinkedIn URL{" "}
                    <span className="poppinsRegular text-gray-600 text-lg">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="linkedInUrl"
                    name="from_url"
                    className="border-2 border-gray-400 rounded-md w-full p-2"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cvFile"
                    className="poppinsRegular text-gray-600 text-lg"
                  >
                    Attach CV or Send your CV to info@reachahand.org
                  </label>
                  <div className="flex items-center border-2 border-gray-400 rounded-md p-2">
                    <label htmlFor="cvFile" className="cursor-pointer mr-2">
                      <CgAttachment className="" />
                    </label>
                    <input
                      type="file"
                      id="cvFile"
                      name="cvFile"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      multiple
                    />
                    <span className="text-gray-700">
                      {selectedFiles.length === 0
                        ? "Choose file..."
                        : `${selectedFiles.length} file(s) selected`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              value="Send"
              className="bg-black text-white poppinsRegular py-4 px-20 float-end my-10 mb-40 rounded-[30px]"
            >
              Apply
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-10 px-20"
      >
        
      </motion.div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default OpportunityDetails;
