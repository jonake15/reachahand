import React, { useEffect, useState } from "react";
import logo from "../assets/rahu icon.png";
import logoP from "../assets/peer-educ.png";
import { motion } from "framer-motion";
import { socialMedia } from "../constants";
import { messages } from "../constants";
import user from "../assets/job.jpg";
import axios from "axios";
import Chat from "./Chat";

const PeerPage = () => {
  // const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImages, setPostImages] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  //   useEffect(() => {
  //     // Fetch initial messages from the API
  //     axios
  //       .get("/api/messages")
  //       .then((response) => setMessages(response.data))
  //       .catch((error) => console.error(error));
  //   }, []);

  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const handleBackdropClick = () => {
    setExpandedImage(null);
  };

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     try {
  //       setUser(JSON.parse(storedUser));
  //     } catch (error) {
  //       console.error("Failed to parse user data:", error);
  //       // Handle the error, maybe clear the invalid data from localStorage
  //       localStorage.removeItem("user");
  //     }
  //   }
  // }, []);

  // const handlePostSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmissionMessage("");

  //   const formData = new FormData();
  //   formData.append("title", postTitle);
  //   formData.append("desc", postDescription);
  //   formData.append("user_id", user.id);
  //   formData.append("owner", user.username);

  //   if (profilePic) {
  //     formData.append("cover_pic", profilePic);
  //   }

  //   try {
  //     const response = await axios.post(
  //       "https://rahu.reachahand.org/api/posts",
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log("Post created with ID:", response.data.post.id);
  //     setSubmissionMessage(
  //       `Post created successfully! Post ID: ${response.data.post.id}`
  //     );
  //     setIsModalOpen(false); // Close modal on success
  //   } catch (err) {
  //     if (err.response) {
  //       console.error("Error response:", err.response.data);
  //     } else if (err.request) {
  //       console.error("No response received:", err.request);
  //     } else {
  //       console.error("Axios error:", err.message);
  //     }
  //     setSubmissionMessage("Failed to create post. Try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // if (!user) {
  //   return <div>Loading...</div>; // Render a loading state while user data is being fetched
  // }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#e5f3ff] w-full min-h-screen flex laptop-sm::flex-col flex-col overflow-x-hidden laptop-sm:px-10"
    >
      <div></div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-5 px-5"
      >
        <motion.header
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="px-5 w-full flex justify-between items-center "
        >
          <a href="/PeerFeed">
            <motion.img
              whileHover={{ scale: "1.05" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              src={logoP}
              alt="logo"
              width={140}
              height={140}
            />
          </a>

          <div className="flex justify-center items-center gap-14">
            <img
              src={user}
              alt="user"
              width={40}
              className="white h-[40px] w-[40px] rounded-full"
            />
            <a href="/">
              <img
                src={logo}
                alt="user"
                width={40}
                className="-mt-3 cursor-pointer"
              />
            </a>
          </div>
        </motion.header>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.25 }}
        className="w-full justify-center items-center h-full"
      >
        <motion.div className="lg:flex lg:flex-cols-2 my-10 gap-6 lg:px-10 w-full">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9, delay: 0.25 }}
            className="bg-white rounded-[30px] p-10 w-[30%]"
          >
            <div className="flex gap-6 text-center justify-start items-start">
              <img
                src={user}
                alt="user"
                width={50}
                className="rounded-full w-[50px] h-[50px]"
              />
              <div className="text-center">
                <h3 className="poppinsRegular text-md font-bold">Joy Adams</h3>
                <p className="poppinsRegular text-sm text-green">Available</p>
              </div>
            </div>
            <p className="poppinsRegular font-bold text-md">About me</p>
            <p className="poppinsRegular font-bold text-sm text-gray-500 mt-2">
              Each of RAHU's program, campaign and projects are tailored to
              impact nuggets of information
            </p>
            <p className="poppinsRegular text-xl mt-5">
              <span className="poppinsRegular font-bold text-sm mr-6">
                Mobile:
              </span>
              <span className="poppinsRegular text-sm text-gray-600">
                +256750986753
              </span>
            </p>
            <p className="poppinsRegular text-xl">
              <span className="poppinsRegular font-bold text-sm mr-6">
                Email:
              </span>
              <span className="poppinsRegular text-sm text-gray-600 mb-10">
                joyadams@gmail.com
              </span>
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-white py-2 px-8 mt-6 rounded-[25px] text-sm poppinsSemiBold hover:bg-black hover:text-sm hover:text-white hover:border-2 hover:border-white "
            >
              Make a post
            </button>
            <div className="flex items-center gap-5 mt-40">
              {socialMedia.map((item, i) => (
                <div key={i} className="flex flex-row justify-between">
                  <img src={item.imgUrl} alt="logo" width={20} />
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
            transition={{ duration: 1, delay: 0.25 }}
            className="bg-white rounded-[30px] p-5 w-[70%]"
          >
            <div className="flex ">
              <p className="poppinsRegular font-bold text-sm cursor-pointer my-2">
                My feed
              </p>
              <p className="poppinsRegular font-bold text-sm cursor-pointer my-2 ml-10">
                All posts
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
              className=" w-full bg-[#e5f3ff]"
            >
              <section className="px-10 bg-[#e5f3ff] h-full">
                <div className="  ">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className=" bg-white mt-5 flex mobile-sm:mb-4 laptop-sm:mb-7 laptop-sm:p-7 rounded-3xl "
                    >
                      <img
                        src={msg.avatar}
                        alt="avatar"
                        className="avatar w-10 h-10 mobile-sm:mt-2 laptop-sm:mt-0 mobile-sm:m-2 laptop-sm:w-14 laptop-sm:h-14 rounded-full mr-3"
                      />
                      <div className="p-3 rounded-lg">
                        <p className="poppinsSemiBold laptop-sm:text-base ">
                          {msg.user}
                        </p>
                        <div>
                          <p className="poppinsRegular mobile-sm:text-[10px] laptop-sm:text-sm text-gray-600">
                            {msg.message}
                          </p>
                          <div className="flex flex-wrap mt-2">
                            {msg.images &&
                              msg.images.map((image, idx) => (
                                <img
                                  key={idx}
                                  src={image}
                                  alt={`image-${idx}`}
                                  className={`object-cover mr-2 rounded-lg mobile-sm:m-1 mobile-sm:justify-center mobile-sm:items-center ${
                                    msg.images.length === 1
                                      ? "mobile-sm:w-[200px] mobile-sm:h-[150px] laptop-sm:w-[354px] laptop-sm:h-[200px] laptop-sm:justify-center laptop-sm:items-center"
                                      : "mobile-sm:w-25 mobile-sm:h-20 laptop-sm:w-44 laptop-sm:h-34"
                                  } ${idx % 3 === 2 ? "mr-0" : ""}`}
                                  onClick={() => handleImageClick(image)}
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="flex mt-4 mobile-sm:mb-10 laptop-sm:mb-20">
        <input
          type="text"
          className=" flex-grow p-2 border rounded-l-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="send-button bg-blue-500 text-white px-4 rounded-r-lg"
        >
          Send
        </button>
      </div> */}
                {expandedImage && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleBackdropClick}
                  >
                    <img
                      src={expandedImage}
                      alt="Expanded"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </section>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
            <form

            // onSubmit={handlePostSubmit}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  value={postDescription}
                  onChange={(e) => setPostDescription(e.target.value)}
                  required
                />
              </div>
              {/* Profile Picture Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Images</label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                  multiple
                  onChange={(e) => setPostImages([...e.target.files])}
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send"}
                </button>
              </div>
            </form>
            {submissionMessage && (
              <p className="mt-4 text-center text-green-500 font-semibold">
                {submissionMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PeerPage;
