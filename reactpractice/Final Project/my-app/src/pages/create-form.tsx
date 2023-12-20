import { useForm } from "react-hook-form";
import * as yup from "yup";
export const CreateForm = () => {
  return (
    <form>
      <input placeholder="Tile..."></input>
      <input placeholder="Description..." />
      <input type="submit"></input>
    </form>
  );
};

//libraries react-hook-form,yup,@hookform/resolvers
