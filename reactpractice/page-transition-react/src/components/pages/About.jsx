import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      About
    </motion.div>
  );
}

export default About;
