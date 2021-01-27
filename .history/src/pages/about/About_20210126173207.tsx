import React from "react";
import "./About.scss";
import Pano from "pano";
import { Page } from "pano";

export const About = () => {
  // Pano.Page === Page
  const panoPage = new Page("pano");
  panoPage.init();
  return <section>{/* <h1 className="About">About</h1> */}</section>;
};
