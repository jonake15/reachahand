import React, { useState, useEffect } from "react";
import axios from "axios";
import { messages } from "../constants";

const Chat = () => {
  //   const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

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

  const sendMessage = () => {
    if (message.trim()) {
      axios
        .post("/api/messages", { message, user_id: userId })
        .then((response) => {
          setMessages([...messages, response.data]);
          setMessage("");
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <section className="tablet:px-10  laptop-sm:px-40 bg-[#e5f3ff] h-full">
      <div className="  ">
        {messages.map((msg, index) => (
          <div
            key={index}
            className=" bg-white flex mobile-sm:mb-4 laptop-sm:mb-7 laptop-sm:p-7 rounded-3xl "
          >
            <img
              src={msg.avatar}
              alt="avatar"
              className="avatar w-10 h-10 mobile-sm:mt-2 laptop-sm:mt-0 mobile-sm:m-2 laptop-sm:w-14 laptop-sm:h-14 rounded-full mr-3"
            />
            <div className="p-3 rounded-lg">
              <p className="poppinsSemiBold laptop-sm:text-base ">{msg.user}</p>
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
  );
};

export default Chat;
