import React, { useEffect, useState } from "react";
import { post as Ipost } from "./main";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";

//interface jo hai post k same tha tou wohi post yahan use krli as Ipost in props
interface props {
  post: Ipost;
}
interface createcomment {
  comment: string;
}
interface listcomment {
  id: string;
  userId: string;
  postId: string;
  comment: string;
}
interface like {
  userId: string;
}
export function Post(props: props) {
  const Createcomment = () => {
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
    const [liked, setliked] = useState<like[] | null>(null);
    //ab props ko object k structure me krna hai woh ese krenge
    const { post } = props;
    const [user] = useAuthState(auth);

    const likesref = collection(db, "likes");
    const likesdoc = query(likesref, where("postId", "==", post.id));
    const getlikes = async () => {
      const data = await getDocs(likesdoc);
      setliked(data.docs.map((doc) => ({ userId: doc.data().userId })));
    };
    const likes = async () => {
      try {
        await addDoc(likesref, {
          userId: user?.uid,
          postId: post.id,
        });
        if (user) {
          setliked((prev) =>
            prev ? [...prev, { userId: user.uid }] : [{ userId: user.uid }]
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    const hasuserlike = liked?.find((i) => i.userId === user?.uid);
    const commentsref = collection(db, "comments");
    const commentdoc = query(commentsref, where("postId", "==", post.id));
    const [commentamount, setcommentamount] = useState<number | null>(null);
    const getcomment = async () => {
      const data = await getDocs(commentdoc);
      setcommentamount(data.docs.length);
    };
    const getCommentAmount = async () => {
      const data = await getDocs(commentdoc);
      setcommentamount(data.docs.length);
    };
    const comments = async (data: createcomment) => {
      try {
        await addDoc(commentsref, {
          userId: user?.uid,
          postId: post.id,
          comment: data.comment,
        });
      } catch (error) {
        console.log("comment not added", error);
      }
      getcommentlist();
    };
    const [commentlist, setcommentlist] = useState<listcomment[] | null>(null);
    const getcommentlist = async () => {
      const data = await getDocs(commentdoc);
      setcommentlist(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as listcomment[]
      );
    };
    const [button, setbutton] = useState("");
    const buttonhandle = () => {
      setbutton("");
    };
    const handleChange = (event: any) => {
      setbutton(event.target.value);
    };

    useEffect(() => {
      getCommentAmount();
      getcommentlist();
    }, [post.id]);

    useEffect(() => {
      getlikes();
      getcomment();
    }, []);

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
          <button onClick={likes}>
            {!hasuserlike ? <>&#128077;</> : <>&#128078;</>}
          </button>
          {liked && <p>Likes:{liked.length}</p>}
        </div>
        <form onSubmit={handleSubmit(comments)}>
          <input
            placeholder="Comment"
            {...register("comment")}
            onChange={handleChange}
            value={button}
          />
          <input type="submit"  onClick={buttonhandle} />
          {commentamount && <p>Number of Comments: {commentamount}</p>}
          <ul>
            {commentlist &&
              commentlist.map((comment) => (
                <li key={comment.id}>{comment.comment}</li>
              ))}
          </ul>
        </form>
      </div>
    );
  };

  return <Createcomment />;
}
export default Post;
