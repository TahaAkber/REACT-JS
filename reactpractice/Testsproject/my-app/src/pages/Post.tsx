import React, { useState } from "react";
import { post as Ipost } from "./main";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

//interface jo hai post k same tha tou wohi post yahan use krli as Ipost in props
interface props {
  post: Ipost;
}
interface createcomment {
  comment: string;
}

export function Post(props: props) {
  function Createcomment() {
    const schema = yup.object().shape({
      comment: yup.string().required(""),
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<createcomment>({
      resolver: yupResolver(schema),
    });

    //ab props ko object k structure me krna hai woh ese krenge
    const { post } = props;
    const [user] = useAuthState(auth);

    const likesref = collection(db, "likes");

    const likes = async () => {
      await addDoc(likesref, {
        userId: user?.uid,
        postId: post.id,
      });
    };
    const commentsref = collection(db, "comments");

    const comments = async (data: createcomment) => {
      await addDoc(commentsref, {
        userId: user?.uid,
        postId: post.id,
        comment: data.comment,
      });
    };

    return (
      <div>
        <div>
          <h1>{post.title}</h1>
        </div>
        <div>
          <p>{post.description}</p>
        </div>
        <div>
          <p>@{post.username}</p>
          <button onClick={likes}>&#128077;</button>
        </div>
        <form onSubmit={handleSubmit(comments)}>
          <input placeholder="Comment" {...register("comment")}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
  return <Createcomment />;
}
export default Post;
