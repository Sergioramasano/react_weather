import React from "react";
import "./About.scss";

export const About = () => {
  declare namespace JSX {
    interface IntrinsicElements {
      pano: any;
    }
  }
  // Pano.Page === Page
  const panoPage = new Page("pano");
  panoPage.init();
  return <section>ee</section>;
};
