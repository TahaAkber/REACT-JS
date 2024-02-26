import React from "react";
import { motion } from "framer-motion";
import Carousal from "./Carousal";
import { slides } from "/Users/KOLN1CE/Documents/GitHub/REACT-JS/reactpractice/page-transition-react/src/imagedata/Data.json";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function Contact() {
  const schema = yup.object.shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    password: yup.string().min(4).max(200).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onsubmit = (data) => {
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
      <form className="form" onsubmit={handleSubmit(onsubmit)}>
        <input placeholder="Name" type="text" {...register("fullname")} />
        <input placeholder="Email" type="email" {...register("email")} />
        <textarea placeholder="Query" type="text" {...register("query")} />
      </form>
    </motion.div>
  );
}

export default Contact;
