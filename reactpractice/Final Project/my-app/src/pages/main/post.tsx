import { useEffect, useState } from "react";
import { db, auth } from "../../configs/firebase";
import { post as Ipost } from "./main";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

interface props {
  post: Ipost;
}
interface Like {
  userId: string;
}
export const Post = (props: props) => {
  const [likes, setlikes] = useState<Like[] | null>(null);
  const { post } = props;
  const [user] = useAuthState(auth);
  const likesref = collection(db, "likes");
  const getlikes = async () => {
    const data = await getDocs(likesDoc);
    setlikes(data.docs.map((i) => ({ userId: i.data().userId })));
  };
  const likesDoc = query(likesref, where("postId", "==", post.id));

  const Addlike = async () => {
    try {
      await addDoc(likesref, { userId: user?.uid, postId: post.id });
      //optimistic rendering kr rhe hain kyun k bar bar page refresh krna parh rha
      if (user) {
        setlikes((prev) =>
          prev ? [...prev, { userId: user.uid }] : [{ userId: user.uid }]
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
        <button onClick={Addlike}>
          {hasuserliked ? <>&#128078;</> : <>&#128077;</>}
        </button>
        {likes && <p>Likes: {likes?.length}</p>}
      </div>
    </div>
  );
};
