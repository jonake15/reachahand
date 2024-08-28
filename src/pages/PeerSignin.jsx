import React, { useState, useEffect } from "react";
import logo from "../assets/logosMain.png";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import backee from "../assets/Group 218.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const PeerSignin = (props) => {
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //     setError("");
  //   }
  // }, [error]);

  // useEffect(() => {
  //   if (!loading && !error) {
  //     const successMessage = "Login successful!";
  //     if (localStorage.getItem("token")) {
  //       alert(successMessage);
  //     }
  //   }
  // }, [loading]);

  // const getCSRFToken = async () => {
  //   try {
  //     await axios.get("https://rahu.reachahand.org/sanctum/csrf-cookie");
  //   } catch (err) {
  //     console.error("Failed to get CSRF token:", err);
  //     setError("Failed to initialize the application.");
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     // Get CSRF token
  //     await fetch("https://rahu.reachahand.org/sanctum/csrf-cookie", {
  //       credentials: "include",
  //     });

  //     const response = await fetch("https://rahu.reachahand.org/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username,
  //         password,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       const { token, user } = data;
  //       if (token && user) {
  //         localStorage.setItem("token", token); // Store token in localStorage
  //         localStorage.setItem("user", JSON.stringify(user)); // Store user data in localStorage

  //         navigate("/PeerPage"); // Redirect to the PeerPage
  //         setError("");
  //       } else {
  //         throw new Error("Login response does not contain token or user data");
  //       }
  //     } else {
  //       throw new Error(data.message || "Login failed");
  //     }
  //   } catch (err) {
  //     console.error("Login error:", err);
  //     setError("Oops, something went wrong.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const formData = new FormData();
  //   formData.append("first_name", e.target.firstName.value);
  //   formData.append("last_name", e.target.lastName.value);
  //   formData.append("email", e.target.email.value);
  //   formData.append("username", e.target.username.value);
  //   formData.append("password", e.target.password.value);
  //   if (e.target.profilePic.files[0]) {
  //     formData.append("profile_pic", e.target.profilePic.files[0]);
  //   }

  //   try {
  //     // Get CSRF token
  //     await fetch("https://rahu.reachahand.org/sanctum/csrf-cookie", {
  //       credentials: "include",
  //     });

  //     const response = await fetch("https://rahu.reachahand.org/api/register", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       const { token, user } = data;
  //       localStorage.setItem("username", e.target.username.value);
  //       localStorage.setItem("password", e.target.password.value);
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("user_id", user.id); // Storing user_id in localStorage
  //       localStorage.setItem("user", JSON.stringify(user));

  //       navigate("/PeerPage");
  //       console.log("user", user);
  //       setError("");
  //     } else {
  //       throw new Error(data.message || "Registration failed");
  //     }
  //   } catch (err) {
  //     console.error("Registration error:", err);
  //     setError("Oops, something went wrong.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#00274e] min-h-screen w-full flex xl:flex-col flex-col max-w-1440"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mb-10"
      >
        <motion.header
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="px-5 tablet:px-10 laptop-sm:px-20 w-full "
        >
          <nav className="flex justify-between items-center w-full bg-[#0e3256] py-5 rounded-b-[40px] ">
            <a href="/">
              <motion.img
                whileHover={{ scale: "1." }}
                whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                transition={{ duration: "0.125", ease: "easeInOut" }}
                src={logo}
                alt="logo"
                width={150}
                className="ml-10 mobile-sm:w-[80px] md:w-[150px]"
              />
            </a>

            <ul className="justify-center gap-10 hidden lg:flex poppinsRegular text-white text-sm ">
              {navLinks.map((item) => (
                <motion.li
                  whileHover={{ scale: "1.05" }}
                  whileTap={{ scale: "0.95", rotate: "2.5deg" }}
                  transition={{ duration: "0.125", ease: "easeInOut" }}
                  key={item.label}
                >
                  <a href={item.href}>{item.label}</a>
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center items-center gap-2 mr-10">
              <a href="/PeerPage">
                <motion.button
                  initial={{ rotate: "0deg" }}
                  animate={{ rotate: "360deg" }}
                  transition={{ duration: "1", ease: "backInOut" }}
                  className="bg-white py-2 px-8 border-2 border-[#2a9dca] rounded-[25px] justify-end poppinsRegular text-sm hover:bg-[#00274e] hover:text-white hover:border-gold"
                >
                  Signin
                </motion.button>
              </a>
            </div>
          </nav>
        </motion.header>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="lg:flex lg:justify-between items-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex justify-center xl:pl-[18%] xl:mt-10"
        >
          {isRegister ? (
            <motion.form
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.4 }}
              // onSubmit={handleRegister}
              className="w-full mobile-sm:px-20 laptop-sm:px-0 tablet:max-w-md p-6 rounded-lg shadow-sm xl:-mt-10"
            >
              <h2 className="mb-6 h4 text-left poppinsBold text-white">
                Register
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block mb-1 text-sm poppinsRegular text-white"
                >
                  First Name:
                </label>
                <input
                  name="firstName"
                  className="w-full px-3 py-1 border border-gray-300 poppinsRegular rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block mb-1 text-sm poppinsRegular text-white"
                >
                  Last Name:
                </label>
                <input
                  name="lastName"
                  className="w-full px-3 py-1 border border-gray-300 poppinsRegular rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm poppinsRegular text-white"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-1 text-sm poppinsRegular text-white"
                >
                  Username:
                </label>
                <input
                  name="username"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm poppinsRegular text-white"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="profilePic"
                  className="block mb-1 text-sm poppinsRegular text-white"
                >
                  Profile Picture:
                </label>
                <input
                  type="file"
                  name="profilePic"
                  className="w-full px-3 py-1 border body-2 text-sm poppinsRegular text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="w-full p-2 rounded-[25px] poppinsSemiBold text-sm bg-gold border-[#2a9dca] border-2 text-white hover:bg-white hover:border-gold hover:text-[#00274e]"
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>
              {error && <p className="text-red-500 mt-4">{error}</p>}
              <div className="mt-4">
                <span
                  className="text-color-paleWhite cursor-pointer text-sm"
                  onClick={() => setIsRegister(false)}
                >
                  Already have an account?
                </span>
              </div>
            </motion.form>
          ) : (
            <motion.form
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.25 }}
              // onSubmit={handleSubmit}
              className="w-full mobile-sm:px-20 laptop-sm:px-0 laptop-sm:max-w-md p-6 rounded-lg shadow-md"
            >
              <h2 className="mb-6 h3 text-left poppinsBold text-white">
                Login
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-1 text-sm poppinsRegular text-white"
                >
                  Username:
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm poppinsRegular text-white"
                >
                  Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between items-center mt-6">
                <button
                  type="submit"
                  className="w-full p-1 rounded-[25px] poppinsSemiBold text-sm bg-gold border-[#2a9dca] border-2 text-white hover:bg-white hover:border-gold hover:text-[#00274e]"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </div>
              {error && <p className="text-red-500 mt-4">{error}</p>}
              <div className="mt-4">
                <span
                  className="text-color-paleWhite cursor-pointer text-[10px]"
                  onClick={() => setIsRegister(true)}
                >
                  I don't have an account
                </span>
              </div>
            </motion.form>
          )}
        </motion.div>
        <div className="flex justify-center xl:pl-[5%] xl:mt-10">
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.25 }}
            src={backee}
            alt="bg"
            className="object-fill md:max-w-full xl:h-auto xl:max-w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PeerSignin;
