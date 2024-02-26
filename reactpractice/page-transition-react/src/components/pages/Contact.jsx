import React from "react";
import { motion } from "framer-motion";
import Carousal from "./Carousal";
import { slides } from "/Users/KOLN1CE/Documents/GitHub/REACT-JS/reactpractice/page-transition-react/src/imagedata/Data.json";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
function Contact() {
  const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Query: yup.string().min(4).max(200).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      className="parentcontact"
    >
      <div className="contact-p1">
        <div className="image">
          <Carousal />
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" type="text" {...register("fullname")} />
        <p style={{ color: " red" }}>{errors.Name?.message}</p>
        <input placeholder="Email" type="email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.Email?.message}</p>
        <textarea placeholder="Query" type="text" {...register("query")} />
        <p style={{ color: "red" }}>{errors.Query?.message}</p>
        <input type="submit" />
      </form>
    </motion.div>
  );
}

export default Contact;
