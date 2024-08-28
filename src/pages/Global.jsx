import React from "react";
import rahu from "../assets/logo-global.png";
import doctor from "../assets/images/dr.jpg";
import center from "../assets/images/Artboard – 2.png";
import right from "../assets/images/DSC09244.jpg";
import { motion } from "framer-motion";
import one from "../assets/elements/backgrounds (2).png";
import two from "../assets/elements/backgrounds (3).png";
import three from "../assets/elements/backgrounds (4).png";
import background from "../assets/elements/backgrounds (9).png";
import ServiceCard from "../components/global/ServiceCard";

const Global = () => {
  const serviceCards = [
    {
      bgImage: one,
      tagImage: doctor,
      title: "Donate",
      content:
        "Your generous donation can make a significan impact on the lives of young people in Uganda. Help us continue our mission to provide vital health services and education",
      btnName: "Donate",
      link: "https://www.paypal.com/donate/?hosted_button_id=TY9ZAUDEWYGQN",
    },
    {
      bgImage: two,
      tagImage: center,
      title: "Volunteer",
      content:
        "Join us in our efforts by volunteering your time and expertise. Together we can make a Difference",
      btnName: "Volunteer",
      link: "",
    },
    {
      bgImage: three,
      tagImage: right,
      title: "Partner With Us",
      content:
        "Your generous donation can make a significan impact on the lives of young people in Uganda. Help us continue our mission to provide vital health services and education",
      btnName: "Partner",
      link: "",
    },
  ];
  return (
    <div className="bg-color-darkBlue w-full">
      <div className="">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25 }}
          className="flex justify-between p-5 lg:p-10"
        >
          <img src={rahu} className="w-[100px] xl:w-[150px] object-contain " />
          <a href="GetRAHU">
            <button className="poppinsSemiBold bg-color-lightBlue rounded-[30px] py-2 p-5 text-sm text-white border-2 border-color-darkBlue">
              Get involved
            </button>
          </a>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.25 }}
          className="my-10 lg:my-20"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="poppinsBold text-center text-white h3"
          >
            Make a Difference Today
          </motion.h1>
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="poppinsRegular text-center text-color-paleWhite opacity-85 body-2 p-5"
          >
            Your support is crucial in helping us reach our goals. By <br />{" "}
            donating to ReachAHand Clinic, you contribute to a <br /> healthier,
            more informed and empowered youth in Uganda
          </motion.h3>
        </motion.div>

        {/* Servie cards */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-10 lg:px-20 ">
            {serviceCards.map((card, i) => (
              <ServiceCard
                key={i}
                bgImage={card.bgImage}
                btnName={card.btnName}
                content={card.content}
                tagImage={card.tagImage}
                title={card.title}
                link={card.link}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.25 }}
          className="p-10"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-10 grid lg:grid-cols-4 text-center items-center gap-10 justify-center mb-10"
          >
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              href="/"
              className="text-white poppinsSemiBold body-2  "
            >
              Reach a Hand Uganda
            </motion.a>
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.25 }}
              src={rahu}
              className="xl:w-[180px] object-contain"
            />
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-white poppinsSemiBold body-2"
            >
              Get involved
            </motion.h1>
            <a href="ABoutRAHU">
              {" "}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.25 }}
                className="text-white poppinsSemiBold body-2"
              >
                About us
              </motion.h1>
            </a>
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white text-center opacity-85 poppinsSemiBold text-sm"
          >
            Improving the health of young people
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Global;
