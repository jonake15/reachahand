import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OpportuntiesCard = ({ id, title, imgUrl, subtext, date }) => {
  let navigate = useNavigate();
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
        className="flex flex-cols-3 gap-6 w-[100%]"
      >
        <div className="justify-start">
          <img
            src={imgUrl}
            alt="tile1"
            width={300}
            height={400}
            className="rounded-[10px] mt-10"
          />
        </div>
        <div className="text-left justify-center pl-40 w-[70%]">
          <h2 className="h6 poppinsSemiBold text-left mt-10 mb-2">{title}</h2>
          <p className="poppinsRegular text-sm leading-normal ">{subtext}...</p>
          <motion.p
            whileHover={{ scale: "1.05" }}
            whileTap={{ scale: "0.95", rotate: "2.5deg" }}
            transition={{ duration: "0.125", ease: "easeInOut" }}
            className="text-color-lightBlue poppinsSemiBold text-md"
          >
            Deadline: {date}
          </motion.p>
        </div>
        <div className="pl-40 justify-between">
          <div className="flex gap-4 mt-10">
            <motion.button
              whileHover={{ scale: "1.25" }}
              whileTap={{ scale: "0.95", rotate: "2.5deg" }}
              transition={{ duration: "0.125", ease: "easeInOut" }}
              onClick={() => navigate(`/OpportunityDetails/${id}`)}
              className="poppinsRegular px-10 py-2 text-white bg-black border-2 border-black mb-20 rounded-[30px] text-sm justify-center hover:bg-white hover:text-darkBlue hover:border-darkMaroon hover:border-2"
            >
              Apply
            </motion.button>
          </div>
        </div>
      </motion.div>
      <hr className="mt-10 border-gray-400" />
    </div>
  );
};

export default OpportuntiesCard;
