import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../style/menu.css";
import { motion } from "framer-motion";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
function Menu() {
  const [data, setdata] = useState([]);
  const [cart, setCart] = useState([]);

  const getdata = () => {
    axios.get("http://localhost:3001/car").then((res) => {
      setdata(res.data);
    });
  };
  useEffect(() => {
    getdata();
  }, [data]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleBuyClick = (item) => {
    addToCart(item);
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      className="menuhead"
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
              <button
                className="btn-addtocart"
                onClick={() => {
                  handleBuyClick(i);
                }}
              >
                <span>
                  <b>Buy</b>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Cart cart={cart} />
    </motion.div>
  );
}

export default Menu;
