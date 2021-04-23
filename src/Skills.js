import React from "react";

export default function Skills() {
  return (
    <div id="skills">
      <h2 className="section-header">Skills</h2>
      <div id="skills-desc">
        <div className="skills-section" id="front-end">
          <img src="/responsive.svg" />
          <h3>Front-End</h3>
          <p>HTML, CSS, JavaScript, React, Responsive Design </p>
        </div>
        {/* <div className="skills-section" id="react">
          <img src="https://via.placeholder.com/150" />
          <h3>React</h3>
          <p>Hooks,CSS,JS,Responsive Design</p>
        </div> */}
        <div className="skills-section" id="back-end">
          <img src="/server.svg" />
          <h3>Back-End</h3>
          <p>Node.js, Express, MongoDB, MySql, NPM </p>
        </div>
        <div className="skills-section" id="additional">
          <img src="/list.svg" />
          <h3>Additional</h3>
          <p>Version Control, JWT, GIT, Jest, </p>
        </div>
      </div>
    </div>
  );
}
