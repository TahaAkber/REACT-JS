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
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h2 class="animate-charcter"> Welcome to Cars Showroom</h2>
                <p class="animate-charcter1">Make Believe</p>
              </div>
              <button className="button">
                <span>
                  <b>PLACE ORDER</b>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
