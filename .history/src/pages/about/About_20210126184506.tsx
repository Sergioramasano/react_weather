import React from "react";
import "./About.scss";
import image from "../../images/pngfind.com-anime-render-png-3421849.png";
import { Card } from "@material-ui/core";
import { Heading } from "../../components/Heading/Heading";

export const About = () => {
  return (
    <section className="about">
      <Card className="about_card">
        Created by
        <Heading name={}></Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aliquam natus quaerat, dignissimos, distinctio laboriosam dolore iste
          iusto quasi vitae deserunt vero voluptas architecto quis quia harum
          nostrum numquam aspernatur beatae. Est minus exercitationem aspernatur
          eligendi. Excepturi blanditiis doloribus nam eos libero dolorem
          molestias necessitatibus. Molestiae perspiciatis quaerat distinctio
          deleniti incidunt excepturi sequi veniam neque, rerum, recusandae
          itaque magni! Architecto praesentium illo ipsum voluptatibus unde
          libero iure veritatis, voluptas, voluptate eos eum delectus temporibus
          possimus! Quasi totam provident, voluptates laudantium libero qui
          vitae. Fugit cupiditate accusamus accusantium nemo, repudiandae quasi
          dolores voluptates hic, deleniti labore earum sapiente nisi! Pariatur,
          rerum.
          <a
            href="https://github.com/Sergioramasano"
            rel="noreferrer"
            target="_blank"
          >
            Sergioramasano
          </a>
        </p>
      </Card>
      <img src={image} alt="girl" />
    </section>
  );
};
