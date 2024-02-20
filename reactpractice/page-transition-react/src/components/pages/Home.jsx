import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      Home
    </motion.div>
  );
}

export default Home;
