import React from "react";
import { useEffect, useState } from "react";
import { db, auth } from "../../configs/firebase";
import { post as Ipost } from "./main";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface props {
  post: Ipost;
}
interface Like {
  likeId: string;
  userId: string;
}
interface comment {
  comment: string;
}
interface returncomment {
  userId: string;
  postId: string;
  id: string;
  comment: string;
}
export const Post = (props: props) => {
  const [likes, setlikes] = useState<Like[] | null>(null);
  //structure data of post as props
  const { post } = props;
  const [user] = useAuthState(auth);
  const likesref = collection(db, "likes");
  const getlikes = async () => {
    const data = await getDocs(likesDoc);
    setlikes(data.docs.map((i) => ({ userId: i.data().userId, likeId: i.id })));
  };
  const likesDoc = query(likesref, where("postId", "==", post.id));

  const Addlike = async () => {
    try {
      const newDOC = await addDoc(likesref, {
        userId: user?.uid,
        postId: post.id,
      });
      //optimistic rendering kr rhe hain kyun k bar bar page refresh krna parh rha
      if (user) {
        setlikes((prev) =>
          prev
            ? [...prev, { userId: user.uid, likeId: newDOC.id }]
            : [{ userId: user.uid, likeId: newDOC.id }]
        );
        //try catch lagayenge kyun k agar api fails hogai tou manually data update hojayega isko rokne k liye
      }
    } catch (error) {
      console.log(error);
    }
  };
  const Deletelike = async () => {
    try {
      const liketodeletequery = query(
        likesref,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );
      const liketodeletedata = await getDocs(liketodeletequery);
      const likeId = liketodeletedata.docs[0].id;
      const deletelike = doc(db, "likes", likeId);

      await deleteDoc(deletelike);
      //optimistic rendering kr rhe hain kyun k bar bar page refresh krna parh rha
      if (user) {
        setlikes(
          (prev) => prev && prev?.filter((like) => like.likeId !== likeId)
        );
        //try catch lagayenge kyun k agar api fails hogai tou manually data update hojayega isko rokne k liye
      }
    } catch (error) {
      console.log(error);
    }
  };
  const hasuserliked = likes?.find((i) => i.userId === user?.uid);
  useEffect(() => {
    getlikes();
  }, []);

  //Comments functionality
  const commentsref = collection(db, "comments");
  const schema = yup.object().shape({
    comment: yup.string().required("Can't be Empty"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addcomment = async (data: comment) => {
    try {
      await addDoc(commentsref, {
        userId: user?.uid,
        postId: post.id,
        comment: data.comment,
      });
    } catch (error) {
      console.log(error);
    }
    getcomment();
    getcommentamount();
  };

  const commentDoc = query(commentsref, where("postId", "==", post.id));
  const [commentlist, setcommentlist] = useState<number | null>(null);
  const [getcommentlist, setgetcommentlist] = useState<returncomment[] | null>(
    null
  );
  const getcommentamount = async () => {
    const data = await getDocs(commentDoc);
    setcommentlist(data.docs.length);
  };
  const getcomment = async () => {
    const data = await getDocs(commentDoc);
    setgetcommentlist(
      data.docs.map((doc) => ({
        ...doc.data(),
        userId: user?.uid,
      })) as returncomment[]
    );
  };
  useEffect(() => {
    getcommentamount();
    getcomment();
  }, [post.id]);
  const [clear, setclear] = useState("");
  const handlechange = (e: any) => {
    setclear(e.target.value);
  };
  const handleclick = () => {
    setclear("");
  };
  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="description">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={hasuserliked ? Deletelike : Addlike}>
          {hasuserliked ? <>&#128078;</> : <>&#128077;</>}
        </button>
        {likes && <p className="likes">Likes: {likes?.length}</p>}
      </div>
      <div>
        {user ? (
          <form onSubmit={handleSubmit(addcomment)}>
            <div>
              <input
                type="text"
                placeholder="Comment Here"
                {...register("comment")}
                onChange={handlechange}
                value={clear}
              />
              <input type="submit" onClick={handleclick} className="submit" />
              <p style={{ color: "red" }}>{errors.comment?.message}</p>
              {commentlist && commentlist > 0 ? (
                <p>Number of Comments {commentlist} </p>
              ) : (
                <p></p>
              )}
            </div>

            <div className="comment">
              <ul>
                {getcommentlist &&
                  getcommentlist.map((i) => <li key={i.id}>{i.comment}</li>)}
              </ul>
            </div>
          </form>
        ) : (
          <h6>Please Log-In to Comment</h6>
        )}
      </div>
    </div>
  );
};
