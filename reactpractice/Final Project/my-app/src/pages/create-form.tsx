import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//yeh dono niche wale add kiye hain kyun k data base me entry k liye 2 cheezein chahiye hoti hain aik colleciton k kahan data add horha
//second document k us mein document kiya hai...
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
interface CreateFormdata {
  title: string;
  description: string;
}
export const CreateForm = () => {
  const [user] = useAuthState(auth);

  const schema = yup.object().shape({
    title: yup.string().required("You must add an Title"),
    description: yup.string().required("You must add an Description"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormdata>({
    resolver: yupResolver(schema),
  });
  //db database, posts hamari database me entry ki hai
  const postsref = collection(db, "posts");

  //any pe kaam horha hai but yahan typescript lagayenge aur data k interface banayenge
  const onCreatepost = async (data: CreateFormdata) => {
    await addDoc(postsref, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
  };
  return (
    <form onSubmit={handleSubmit(onCreatepost)}>
      <input placeholder="Tile..." {...register("title")}></input>
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("description")} />
      <p style={{ color: "red" }}>{errors.description?.message}</p>

      <input type="submit"></input>
    </form>
  );
};

//libraries react-hook-form,yup,@hookform/resolvers
