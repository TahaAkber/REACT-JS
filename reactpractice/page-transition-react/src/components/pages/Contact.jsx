import React from "react";
import { motion } from "framer-motion";
import Carousal from "./Carousal";
import { slides } from "/Users/KOLN1CE/Documents/GitHub/REACT-JS/reactpractice/page-transition-react/src/imagedata/Data.json";

function Contact() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className="contact-p1">
        <div className="image">
          <Carousal />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
