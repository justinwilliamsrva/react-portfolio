import React from "react";

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
              HTML, CSS Libraries(Bootstrap, Tailwind), JavaScript, React,
              Responsive Design{" "}
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
            <p>Node, Express, MongoDB, MySql, NPM, Postman, Laravel </p>
          </div>
          <div className="skills-section" id="additional">
            <img loading="lazy" alt="list" className="zoom" src="/list.png" />
            <h3>Additional</h3>
            <p>
              Version Control, JWT, GIT, Jest, Conventional Commits, Notion,
              Figma, Heroku
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
