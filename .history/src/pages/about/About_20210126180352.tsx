import React from "react";
import "./About.scss";
import image from "../../images/pngfind.com-anime-render-png-3421849.png";

export const About = () => {
  return (
    <section className="about">
      <p>Created by Sergioramasano</p>
      <img src={image} alt="girl" />
    </section>
  );
};
