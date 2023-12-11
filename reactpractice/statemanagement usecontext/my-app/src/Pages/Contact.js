import React from "react";
import { useContext } from "react";
function Contact() {
  const { username } = useContext();
  return <h2>{username}'s contact</h2>;
}

export default Contact;
