import React, { useState } from "react";
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
  const [slide, setslide] = useState(0);
  const functionright = () => {
    setslide(slide === slidedata.slides.length - 1 ? 0 : slide + 1);
  };
  const functionleft = () => {
    setslide(slide === 0 ? slidedata.slides.length - 1 : slide - 1);
  };
  return (
    <div className="parent-src">
      <BsArrowLeftCircleFill className="arrow-left" onClick={functionleft} />
      {slidedata.slides.map((i, idx) => (
        <img
          src={i.src}
          alt={i.alt}
          key={idx}
          className={slide === idx ? "slides" : "slides slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill className="arrow-right" onClick={functionright} />
    </div>
  );
}

export default Carousal;
