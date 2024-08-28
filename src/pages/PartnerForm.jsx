import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import line from "../assets/Artboard – 5.png";
import cover from "../assets/Artboard – 7.png";
import backdrop from "../assets/Artboard – 6.jpg";
import logo from "../assets/new_logo.png";
import { ContactLinks, footerLinks, socialMedia } from "../constants";

const PartnerForm = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_111d5co", "template_yfjguy9", form.current, {
        publicKey: "G0QioQZDlHVc38IU3",
      })
      .then(
        () => {
          alert("Email sent successfully!");
          setShowPopup(true);
        },
        (error) => {
          alert("Email sending failed: " + error.text);
        }
      );

    // Clear form inputs after submission
    form.current.reset();
  };

  return (
    <div className="w-full">
      <div className="mt-[40%] mb-10 absolute w-full">
        <NavBar />
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
        className="py-20 mt-[100px] lg:mt-[140px]"
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="text-darkBlue text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className=" content-center text-center w-full "
          >
            <h1 className="text-5xl poppinsSemiBold text-darkBlue pb-5">
              Partnership
            </h1>
            <h3 className="text-lg poppinsRegular text-opacity-80 text-darkBlue">
              Each of RAHU's program, campaign and projects is
              <br /> tailored to impact nuggets of information
            </h3>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full justify-items-center content-center rounded-[30px] mb-20">
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
          <div className="max-w-xl justify-center items-center mx-auto p-10 rounded-lg bg-paleWhite shadow-md relative">
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <h2>Email Sent Successfully!</h2>
                  <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
              </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  for="from_name"
                  className="poppinsSemiBold text-gray-700 text-xl mb-4"
                >
                  Name of Organisation or individual
                </label>
                <input
                  type="text"
                  className="w-full poppinsRegular text-sm px-3 py-5 border-2 border-gray-500 mt-5 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter name"
                  name="from_name"
                />
              </div>
              <div className="mb-4">
                <label
                  for="from_email"
                  className="poppinsSemiBold text-gray-700 text-xl mb-4"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full poppinsRegular text-sm px-3 py-5 border-2 border-gray-500 mt-5 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter email"
                  name="from_email"
                />
              </div>
              <div className="mb-4">
                <label
                  for="from_contact"
                  className="poppinsSemiBold text-gray-700 text-xl mb-4"
                >
                  Your Contact
                </label>
                <input
                  type="text"
                  className="w-full poppinsRegular text-sm px-3 py-5 border-2 border-gray-500 mt-5 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter contact"
                  name="from_contact"
                />
              </div>

              {/* Dropdown field */}
              <div className="mb-4">
                <label
                  id="message"
                  className="poppinsSemiBold text-gray-700 text-xl mb-4"
                >
                  How do you want to partner with us?
                </label>
                <select
                  className="w-full poppinsRegular text-sm px-3 py-5 border-2 border-gray-500 mt-5 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  name="message"
                >
                  <option value="">Choose to become a</option>
                  <option value="Strategic Partner">Strategic Partner</option>
                  <option value="Implementing Partner">
                    Implementing Partner
                  </option>
                  <option value="Corporate Partner">Corporate Partner</option>
                </select>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                value="Send"
                className="w-[30%] poppinsRegular text-sm bg-black text-white py-2 px-4 mt-5 rounded-[30px] hover:bg-darkBlue focus:outline-none focus:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Email Sent Successfully!</h2>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PartnerForm;
