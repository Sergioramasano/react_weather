import React from "react";
import "./About.scss";
import Pano from "pano";
import { Page } from "pano";

export const About = () => {
  // Pano.Page === Page
  const panoPage = new Page("pano");
  panoPage.init();
  return (<section><pano width="1024" height="512" src="https://sbolel.github.io/pano/img/588ca1b0bf_o.jpg" caption="Equirectangular Panorama"/></pano>
  </section>)
};
