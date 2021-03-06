import React from "react";
import "./styles/skills.css";

export default function Skills() {
  return (
    <section className="bg-dark" id="skillet">
      {/* <span id="skillet"></span> */}
      <div className="container">
        <h2>Skills</h2>
        <div className="flex-container flex-gap">
          <div className="skills-section" id="front-end">
            <img
              loading="lazy"
              alt="responsive"
              className="zoom"
              src="/responsive.png"
            />
            <h3>Front-End</h3>
            <p>
             HTML, CSS, JavaScript, jQuery, Vue, React, Bootstrap, Tailwind, Responsive Design
            </p>
          </div>
          <div className="skills-section" id="back-end">
            <img
              loading="lazy"
              alt="server"
              className="zoom"
              src="/server.png"
            />
            <h3>Back-End</h3>
            <p>Node, Express, Laravel, PHP, SQL, MongoDB, GraphQL </p>
          </div>
          <div className="skills-section" id="additional">
            <img loading="lazy" alt="list" className="zoom" src="/list.png" />
            <h3>Additional</h3>
            <p>
            git, Version Control, TDD, Agile, Trello, Slack, Asana

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
