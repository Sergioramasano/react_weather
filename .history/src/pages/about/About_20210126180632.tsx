import React from "react";
import "./About.scss";
import image from "../../images/pngfind.com-anime-render-png-3421849.png";

export const About = () => {
  return (
    <section className="about">
      <div>
        <p>
          Created by{" "}
          <a
            href="https://github.com/Sergioramasano"
            rel="noreferrer"
            target="_blank"
          >
            Sergioramasano
          </a>
        </p>
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
        </p>
      </div>
      <img src={image} alt="girl" />
    </section>
  );
};
