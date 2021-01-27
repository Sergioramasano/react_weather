import React from "react";
import "./About.scss";
import image from "../../images/pngfind.com-anime-render-png-3421849.png";

export const About = () => {
  return (
    <section className="about">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit
        aliquid nobis facilis ipsum, fuga expedita voluptate reprehenderit.
        Corporis, recusandae?
      </p>
      <img src={image} alt="girl" />
    </section>
  );
};
