import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      Contact
    </motion.div>
  );
}

export default Contact;
