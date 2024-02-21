import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className="home-p1">
        <div className="header-image">
          <h2>Welcome to Cars Show Room</h2>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
