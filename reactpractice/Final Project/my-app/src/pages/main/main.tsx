//getdocs is liye kia hai k data base k poora data chahiye humein screen pe

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../configs/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postslist, setpostslist] = useState<post[] | null>(null);
  const postsref = collection(db, "posts");

  const getposts = async () => {
    const data = await getDocs(postsref);
    //bohat bare object ko humne chota krdia id define krke taky woh sirf id wali cheezein de
    setpostslist(data.docs.map((i) => ({ ...i.data(), id: i.id })) as post[]);
  };
  useEffect(() => {
    getposts();
  }, []);
  return (
    <div>
      {postslist?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
