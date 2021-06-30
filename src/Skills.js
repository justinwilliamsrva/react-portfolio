import React from "react";

export default function Skills() {
  return (
    <section className="bg-dark" id="skillet">
      {/* <span id="skillet"></span> */}
      <div className="container">
        <h2>Skills</h2>
        <div className="flex-container flex-gap">
          <div className="skills-section" id="front-end">
            <img className="zoom" src="/responsive.png" />
            <h3>Front-End</h3>
            <p>HTML, CSS libraries, JavaScript, React, Responsive Design </p>
          </div>
          <div className="skills-section" id="back-end">
            <img className="zoom" src="/server.png" />
            <h3>Back-End</h3>
            <p>Node, Express, MongoDB, MySql, NPM, Postman </p>
          </div>
          <div className="skills-section" id="additional">
            <img className="zoom" src="/list.png" />
            <h3>Additional</h3>s
            <p>Version Control, JWT, GIT, Jest, Conventional Commits </p>
          </div>
        </div>
      </div>
    </section>
  );
}
