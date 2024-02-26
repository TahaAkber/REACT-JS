import { motion } from "framer-motion";
import Carousal from "./Carousal";
import axios from "axios";
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
  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:3001/query", {
        name: data.Name,
        email: data.Email,
        query: data.Query,
      })
      .then((res) => {
        console.log(data);
      });
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
        <input
          placeholder="Name"
          type="text"
          {...register("Name")}
          style={{ width: 500 }}
        />
        <p style={{ color: " red" }}>{errors.Name?.message}</p>
        <input
          placeholder="Email"
          type="email"
          {...register("Email")}
          style={{ width: 500 }}
        />
        <p style={{ color: "red" }}>{errors.Email?.message}</p>
        <textarea
          placeholder=" Query"
          {...register("Query")}
          style={{ height: 200 }}
        />
        <p style={{ color: "red" }}>{errors.Query?.message}</p>
        <input type="submit" />
      </form>
    </motion.div>
  );
}

export default Contact;
