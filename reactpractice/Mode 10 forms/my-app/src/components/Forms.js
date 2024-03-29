import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Forms = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords not match"),
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="fullname..." {...register("fullName")} />
      <p id="paragraph">{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p id="paragraph">{errors.email?.message}</p>

      <input type="number" placeholder="Age..." {...register("age")} />
      <p id="paragraph">{errors.age?.message}</p>

      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p id="paragraph">{errors.password?.message}</p>

      <input
        type="password"
        placeholder="confirm password..."
        {...register("confirmPassword")}
      />
      <p id="paragraph">{errors.confirmPassword?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default Forms;
