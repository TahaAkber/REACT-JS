import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../configs/firebase";
interface createform {
  title: string;
  description: string;
}
function Createform() {
  const schema = yup.object().shape({
    title: yup.string().required("Title must not be empty"),
    description: yup.string().required("Description must be entered"),
  });
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createform>({
    resolver: yupResolver(schema),
  });
  const postref = collection(db, "posts");
  const createpost = async (data: createform) => {
    await addDoc(postref, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
  };
  return (
    <form onSubmit={handleSubmit(createpost)}>
      <input placeholder="title" {...register("title")}></input>
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea
        placeholder="description"
        {...register("description")}
      ></textarea>
      <p style={{ color: "red" }}>{errors.description?.message}</p>
      <input type="submit"></input>
    </form>
  );
}

export default Createform;
