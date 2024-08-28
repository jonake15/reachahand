import React from "react";
import crystal from "../assets/get-your-mix-out.png";
import backdrop from "../assets/Artboard – 6.jpg";
import { posts, socialMedia } from "../constants";
import { motion } from "framer-motion";
import strip from "../assets/strip.png";
import parse from "html-react-parser";

const ModalPrograms = ({ isVisible, onClose, partnerDetails }) => {
  if (!isVisible) return null;
  const descriptionContent =
    typeof partnerDetails.desc === "string"
      ? parse(partnerDetails.desc)
      : JSON.stringify(partnerDetails.desc);
  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl max-w-[90%] tablet-sm:max-w-[60%] mobile-sm:h-[90%] tablet:h-[90%] w-full">
        <div>
          <button
            onClick={onClose}
            className="absolute -ml-[45%] laptop-sm:-ml-[40%] laptop-lg:-ml-[30%] p-5 h5"
          >
            X
          </button>

          <div className="flex justify-end">
            <div className="items-center justify-center mt-10">
              <img
                src={partnerDetails.cover_pic_url}
                alt="team"
                className="laptop-sm:ml-10 laptop-sm:mt-[5%] mobile-sm:mr-2 laptop-sm:p-5 object-cover mobile-sm:w-[50px] tablet:w-[80px] laptop-sm:w-[130px]"
              />
            </div>
          </div>

          <div className="text-left w-full tablet:w-[90%] laptop-sm:-mt-20 p-5 laptop-sm:px-20">
            <h2 className="text-md laptop-sm:body-1 poppinsSemiBold text-color-darkMaroon">
              {partnerDetails.title}
            </h2>
            <p className="text-[10px] laptop-sm:text-[12px] poppinsRegular">
              {descriptionContent}
            </p>
          </div>
          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 gap-6 laptop-sm:grid laptop-sm:grid-cols-6 laptop-sm:gap-6 w-full justify-center items-center mb-[8%] mt-10 overflow-x-auto whitespace-nowrap no-scrollbar"
            >
              <div className="flex w-full cursor-pointer ml-5 tablet:ml-20">
                {partnerDetails.gallery_images_url.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mr-[8%] overflow-x-hidden flex justify-center rounded-[10px] items-center"
                  >
                    <img
                      src={item}
                      alt="team"
                      width={250}
                      className="h-[100px] w-[150px] tablet:w-[250px] tablet:h-[150px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <img
          src={strip}
          className="w-full h-[40px] laptop-sm:h-[50px] justify-end object-cover"
        />
      </div>
    </div>
  );
};

export default ModalPrograms;
