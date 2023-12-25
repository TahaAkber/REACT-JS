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

interface props {
  post: Ipost;
}
interface Like {
  likeId: string;
  userId: string;
}
export const Post = (props: props) => {
  const [likes, setlikes] = useState<Like[] | null>(null);
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

  //structure data of post as props
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
    </div>
  );
};
