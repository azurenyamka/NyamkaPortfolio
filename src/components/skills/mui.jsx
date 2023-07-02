import React from "react";
import { motion } from "framer-motion";

const Mui = () => {
  return (
    <motion.div style={{ width: "80%" }}>
      <svg viewBox="0 0 128 128">
        <motion.path
          initial={{ pathLength: 0, pathOffset: 0, fill: "none" }}
          animate={{ pathLength: 0.1, pathOffset: 1, fill: "#1FA6CA" }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          }}
          //   fill="#fff"
          stroke="#61DAFB"
          strokeWidth={2}
          // fill="#F0DB4F"
          fill="#1FA6CA"
          d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6zM48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0, pathOffset: 0, fill: "none" }}
          animate={{ pathLength: 0.1, pathOffset: 1, fill: "#1FA6CA" }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          }}
          //   fill="#fff"
          stroke="#61DAFB"
          strokeWidth={2}
          // fill="#F0DB4F"
          fill="#1FA6CA"
          d="M48 77.8v18.4l32 18.4V96.2L48 77.8zM80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
        ></motion.path>
      </svg>
    </motion.div>
  );
};

export default Mui;
