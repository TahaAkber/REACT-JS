import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../configs/firebase";
import Post from "./Post";

export interface post {
  title: string;
  description: string;
  username: string;
  id: string;
}
function Home() {
  const [user] = useAuthState(auth);
  const [postlist, setpostlist] = useState<post[] | null>(null);
  const postref = collection(db, "posts");
  const getpost = async () => {
    const data = await getDocs(postref);
    setpostlist(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as post[]
    );
  };
  useEffect(() => {
    getpost();
  }, []);
  return (
    <div>
      {postlist?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Home;
