import React from "react";
import "./Carousal.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const slidedata = {
  slides: [
    {
      src: "https://images.unsplash.com/photo-1629019878500-302b516de84c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "No image",
    },
    {
      src: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "No image",
    },
    {
      src: "https://images.unsplash.com/photo-1612633137449-35ddc035fc71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "No image",
    },
  ],
};

function Carousal() {
  console.log(slidedata);
  return (
    <div className="parent-src">
      <BsArrowLeftCircleFill className="arrow-left" />
      {slidedata.slides.map((i) => (
        <img src={i.src} alt={i.alt} className="slides" />
      ))}
      <BsArrowRightCircleFill className="arrow-right" />
      <span></span>
    </div>
  );
}

export default Carousal;
