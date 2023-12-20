import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface CreateFormdata {
  title: string;
  description: string;
}
export const CreateForm = () => {
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
  //any pe kaam horha hai but yahan typescript lagayenge aur data k interface banayenge

  const onCreatepost = (data: CreateFormdata) => {
    console.log(data);
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
