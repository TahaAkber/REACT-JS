import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function Createform() {
  return (
    <form>
      <input placeholder="title"></input>
      <textarea placeholder="description"></textarea>
      <input type="submit"></input>
    </form>
  );
}

export default Createform;
