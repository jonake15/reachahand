import React from "react";
import crystal from "../assets/Teams elements/crytsal.png";
import firsts from "../assets/Teams elements/boards.png";
import { socialMedia } from "../constants";

const Modal = ({ isVisible, onClose, staffMember }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl max-w-[90%] tablet-sm:max-w-[60%] mobile-sm:h-[90%] tablet:h-[90%] w-full">
        <button onClick={onClose} className="absolute left-[90%] h4">
          X
        </button>

        <div className="flex ">
          <div className="items-center justify-center mt-20">
            <img
              src={crystal}
              width={100}
              alt="team"
              className="ml-10 mt-[5%]"
            />
            <img
              src={firsts}
              width={100}
              alt="team"
              className="lg:-mt-[82%] ml-[40px]"
            />
          </div>
          <div className="mt-[9%] px-20">
            <h2 className="body-1 font-bold">
              {staffMember.first_name} {staffMember.last_name}
            </h2>
            <p>{staffMember.position}</p>
          </div>
        </div>

        <div className="justify-center items-center w-full mt-20 px-20">
          <h2 className="body-2 poppinsSemiBold">About me</h2>
          <p className="text-sm poppinsRegular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            odio ex. Fusce commodo felis sem, et consequat nunc ultricies in.
            Suspendisse potenti. Nunc dictum sagittis est, sit amet iaculis
            ligula egestas suscipit. Pellentesque cursus bibendum mauris, eget
            fringilla tellus rutrum nec. Integer dolor tortor, auctor pretium
            laoreet id, ornare nec metus. Curabitur consectetur neque id
            fringilla iaculis. Sed blandit, velit malesuada fermentum pretium,
            odio eros vestibulum nunc, sed rutrum nisi mauris in mi. Aliquam ex
            dolor, sollicitudin eget diam at, posuere interdum metus. Phasellus
            mollis tortor bibendum lacus iaculis, eu pharetra mi elementum.
            Phasellus in condimentum neque, non sollicitudin nisi. Suspendisse
            ut elementum metus, quis pharetra lacus. Praesent malesuada quam nec
            enim semper, vel molestie diam faucibus. Nunc non auctor tellus.
            Duis congue suscipit mauris a finibus. Curabitur fringilla metus
            vitae justo tincidunt tempor.
          </p>
        </div>
        <div className="flex lg:mt-10 justify-end p-2">
          <h2 className="poppinsSemiBold body-1 mt-3 mr-2">Follow me</h2>
          {socialMedia.map((item, socialIndex) => (
            <a href={item.link}>
              <img
                key={socialIndex}
                src={item.imgUrl}
                alt="logo"
                width={40}
                className="m-2"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
