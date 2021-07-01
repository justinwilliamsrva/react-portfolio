import React, { useState } from "react";

export default function Home() {
  const [isToggledCcps, setIsToggledCcps] = useState(false);
  const [isToggledFcps, setIsToggledFcps] = useState(false);

  return (
    <section id="home-top" className="bg-primary">
      <div id="home" className="container">
        <div className="personal">
          {/* <div id="profile"> */}
          <img id="profile" src="/Justin-min.jpg" />
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
              rel="noreferrer">
              <img className="icons-icon" src="/github.png" alt="github" />
            </a>
            <a
              href="https://twitter.com/jwRVAdev"
              target="_blank"
              rel="noreferrer">
              <img className="icons-icon" src="/twitter.png" alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/justinwilliamsrva/"
              target="_blank"
              rel="noreferrer">
              <img className="icons-icon" src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://www.notion.so/jwrva/Justin-Williams-Resume-b8a9d8bcad28477da2f9d139360ba3db"
              target="_blank"
              rel="noreferrer">
              <img className="icons-icon" src="/cv.png" alt="resume" />
            </a>
          </div>
        </div>
        <div className="biography">
          <div id="bio">
            <h2>Biography</h2>
            <p>
              <b>
                <span className="teal">Full-Stack Web Developer</span> with over
                ten years of experience in primary and secondary education. As a
                former teacher, I am eager to combine my leadership and
                organizational skills with my love for programming to make
                appealing, engaging, and robust web applications.
              </b>
            </p>
            <p>
              <b>
                I <span className="teal">love</span> programming and I am gifted
                at resolving problems and learning new skills. As a University
                of Richmond Coding Boot Camp Graduate, I have the technical
                skills to approach front-end and back-end challenges
                independently or with a team of AGILE programmers. And as a
                former educator, I am an experienced presenter whose reliability
                and communication skills will benefit any workplace environment.
              </b>
            </p>
            <p>
              <b>
                I am also an avid violinist and share my love for music whenever
                I can!
              </b>
            </p>
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
                    <b>BA in Music Education</b>
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
                  {isToggledCcps ? (
                    <img
                      className="arrow lower"
                      onClick={() => setIsToggledCcps(!isToggledCcps)}
                      src="/Arrow-down.png"
                      alt="arrow down"
                    />
                  ) : (
                    <img
                      className="arrow"
                      onClick={() => setIsToggledCcps(!isToggledCcps)}
                      src="/Arrow-right.png"
                      alt="arrow right"
                    />
                  )}
                </div>
                <div className="info">
                  <p>
                    <b>High School Teacher</b>
                  </p>
                  <p>Chesterfield County Public Schools</p>
                  {isToggledCcps && (
                    <ul className="job-list">
                      <li>
                        Programmed an online RPG to increase student motivation
                        during virtual learning and an Orchestra Website to keep
                        parents informed.
                      </li>
                      <li>
                        Founded a new ensemble that performed for RVA music
                        festivals and opened for the Richmond Symphony.
                      </li>
                      <li>
                        Earned Superiors with two separate Grade 6 Orchestras at
                        the 2019 VBODA District 3 Assessment.
                      </li>
                      <li>
                        Provided and hosted many after-school activities,
                        concerts and competitions
                      </li>
                      <li>Increased enrollment by 50% in first three years</li>
                    </ul>
                  )}
                </div>
              </div>
              {/* VCU INFO */}
              <br />
              <div className="school">
                <div className="icon-ex">
                  {isToggledFcps ? (
                    <img
                      className="arrow lower"
                      onClick={() => setIsToggledFcps(!isToggledFcps)}
                      src="/Arrow-down.png"
                      alt="arrow down"
                    />
                  ) : (
                    <img
                      className="arrow"
                      onClick={() => setIsToggledFcps(!isToggledFcps)}
                      src="/Arrow-right.png"
                      alt="arrow right"
                    />
                  )}
                </div>
                <div className="info">
                  <p>
                    <b>Orchestra Director</b>
                  </p>
                  <p>Fairfax County Public Schools</p>
                  {isToggledFcps && (
                    <ul className="job-list">
                      <li>
                        Co-directed the two largest orchestra programs in
                        Virginia
                      </li>
                      <li>
                        Helped Organize and facilitate a 100+ student trip to
                        Myrtle Beach
                      </li>
                      <li>
                        Increased enrollment at two elementary schools by 30%
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
