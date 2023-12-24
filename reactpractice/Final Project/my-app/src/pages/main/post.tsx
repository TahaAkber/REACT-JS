import { useEffect } from "react";
import { db, auth } from "../../configs/firebase";
import { post as Ipost } from "./main";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

interface props {
  post: Ipost;
}
export const Post = (props: props) => {
  const { post } = props;
  const [user] = useAuthState(auth);
  const likesref = collection(db, "likes");
  const getlikes = async () => {
    const data = await getDocs(likesDoc);
    console.log(data.docs.map((i) => ({ ...i.data(), id: i.id })));
  };
  const likesDoc = query(likesref, where("postId", "==", post.id));
  const Addlike = async () => {
    await addDoc(likesref, { userId: user?.uid, postId: post.id });
  };
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
        <button onClick={Addlike}>&#128077;</button>
      </div>
    </div>
  );
};
