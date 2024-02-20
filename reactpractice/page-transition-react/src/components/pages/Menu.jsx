import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/menu.css";
import { motion } from "framer-motion";

function Menu() {
  const [data, setdata] = useState([]);
  const getdata = () => {
    axios.get("http://localhost:3001/car").then((res) => {
      setdata(res.data);
    });
  };
  useEffect(() => {
    getdata();
  }, [data]);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h1 style={{ textAlign: "center", fontSize: 50 }}>
        <b>CARS STORE</b>
      </h1>
      <div className="menu-p1">
        {data.map((i) => (
          <div className="card">
            <img src={i.img} alt="empty" width="240px" height="150px" />
            <div className="container">
              <h4>Name: {i.name}</h4>
              <p>
                <b>Model: {i.modelNo}</b>
              </p>
              <h5>
                <b>Price: ${i.price}</b>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Menu;
