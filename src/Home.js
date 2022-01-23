import React, { useState } from "react";
import "./styles/home.css";

export default function Home() {
  const [isToggledCcps, setIsToggledCcps] = useState(false);
  const [isToggledFcps, setIsToggledFcps] = useState(false);

  return (
    <section id="home-top" className="bg-primary">
      <div id="home" className="container">
        <div className="personal">
          {/* <div id="profile"> */}
          <img alt="justin williams" id="profile" src="/Justin-min.jpg" />
          {/* </div> */}

          <h2>Justin Williams</h2>
          <h3 className="teal">Full-Stack Web Developer</h3>
          <div id="icons">
            <a href="mailto:justinwdev@gmail.com">
              <img className="icons-icon" src="/mail_icon.png" alt="email" />
            </a>
            <a
              href="https://github.com/justinwilliamsrva"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons-icon" src="/github.png" alt="github" />
            </a>
            <a
              href="https://twitter.com/jwRVAdev"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons-icon" src="/twitter.png" alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/justinwilliamsrva/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons-icon" src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://dev.to/justinwilliamsrva"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons-icon" src="/devto.png" alt="devto" />
            </a>
          </div>
        </div>
        <div className="biography">
          <div id="bio">
            <div className="bio-heading">
              {" "}
              <h2>Biography</h2>
              {/* <a
                href="https://www.notion.so/jwrva/Justin-Williams-Resume-b8a9d8bcad28477da2f9d139360ba3db"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <button className="resume-button zoom">
                  <b>Resume</b>
                </button>
              </a> */}
            </div>

            <p>
              <b>
                <span className="teal">Full-Stack Web Developer</span> based in
                Richmond, Virginia utilizing Javascript and PHP frameworks.
              </b>
            </p>
            <p>
              <b>
                Currently working at Ameronix, where I update subscriber
                dashboards using Vue, Laravel, jQuery, and various CSS
                frameworks. I especially love writing tests, creating responsive
                designs, and implementing component libraries. In my spare time,
                I am learning AWS, C#, .NET, Dart, Strapi, and advanced CSS
                animations.
              </b>
            </p>
            <p>
              <b>
                My passion for programming and problem solving allows me to
                thrive working independently or with a team of AGILE
                programmers. As a former educator, I am also an experienced
                presenter whose reliability and communication skills will
                benefit any workplace environment.
              </b>
            </p>
            <p><b>Further details of my skills and experience can be found on my <a  href="https://jwrva.notion.site/Justin-Williams-Resume-b8a9d8bcad28477da2f9d139360ba3db"
              target="_blank"
              rel="noreferrer"
              className="teal">Resume</a>.</b></p>
          </div>
          <div id="education">
            <div id="education-ed">
              <h2>Education</h2>
              <div className="school">
                {/* U of R INFO */}
                <div className="icon">
                  <img alt="UofR logo" id="uor" src="/ur.png" />
                </div>
                <div className="info">
                  <p>
                    <b>Full Stack Developer Boot Camp</b>
                  </p>
                  <p>University of Richmond</p>
                </div>
              </div>
              {/* VCU INFO */}
              <br />
              <div className="school">
                <div className="vcu-icon">
                  <img alt="vcu logo" id="vcu" src="/vcu.png" />
                </div>
                <div className="info">
                  <p>
                    <b>Bachelor of Arts - Music Education</b>
                  </p>
                  <p>Virginia Commonwealth University</p>
                </div>
              </div>
            </div>
            <div id="education-learn">
              <h2>Experience</h2>

              <div className="school">
                {/* U of R INFO */}
                <div className="icon-ex">
                  <img
                    className={`arrow ${isToggledFcps && "rotate"} `}
                    onClick={() => setIsToggledFcps(!isToggledFcps)}
                    src="/Arrow-right.png"
                    alt="arrow right"
                  />
                </div>
                <div className="info">
                  <p>
                    <b>Web Developer</b>
                  </p>
                  <p>Ameronix</p>
                  <div id={isToggledFcps ? "job-fcps" : "none-fcps"}>
                    <ul
                      className={`${
                        isToggledFcps ? "job-list" : "none-list"
                      } padding`}
                    >
                      <li className="padding">
                        Updated website written in Laravel 5 running PHP 7.1 to
                        Laravel 8 running PHP 8. Involved remaking the auth in
                        Laravel Breeze, creating vendor folders for custom auth
                        emails, managing package updates etc.
                      </li>
                      <li className="padding">
                        Wrote tests for CRUD operations, auth routes, form
                        validation, file uploads/downloads, and levels of user
                        access in PHPunit
                      </li>
                      <li className="padding">
                        Created Advanced SQL queries for csv exports
                      </li>
                      <li className="padding">
                        Refactored website design in Foundation css and added
                        responsive design
                      </li>
                    </ul>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <br />
              {/* VCU INFO */}
              <div className="school">
                {/* U of R INFO */}
                <div className="icon-ex">
                  <img
                    className={`arrow ${isToggledCcps && "rotate"} `}
                    onClick={() => setIsToggledCcps(!isToggledCcps)}
                    src="/Arrow-right.png"
                    alt="arrow right"
                  />
                </div>
                <div className="info">
                  <p>
                    <b>Freelance Developer</b>
                  </p>
                  <p>Self-Employed</p>
                  <div id={isToggledCcps ? "job-ccps" : "none-ccps"}>
                    <ul
                      className={`${
                        isToggledCcps ? "job-list" : "none-list"
                      } padding`}
                    >
                      <li className="padding">
                        Created an online learning web app for the Clover Hill
                        High School Orchestra during mandated online learning.
                        Students could create a character, keep track of
                        progress, see new assignments, compare progress with
                        other students. Teachers could grade and give student
                        feedback easier as well as monitor class progress.
                      </li>
                      <li className="padding">
                        Updated the layout for Madonna Photography with an
                        accessible color scheme and responsive design
                      </li>
                    </ul>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
