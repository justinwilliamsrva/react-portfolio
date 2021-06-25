import React from "react";

export default function Home() {
  return (
    <div id="home">
      <div className="personal">
        {/* <div id="profile"> */}
        <img id="profile" src="/Justin-min.jpg" />
        {/* </div> */}

        <h2>Justin Williams</h2>
        <h3>Full-Stack Web Developer</h3>
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
        </div>
      </div>
      <div className="biography">
        <div id="bio">
          <h2>Biography</h2>
          <p>
            <b>
              <span id="love">Full-Stack Web Developer</span> with over ten
              years of experience in primary and secondary education. As a
              former teacher, I am eager to combine my leadership and
              organizational skills with my love for programming to make
              appealing, engaging, and robust web applications.
            </b>
          </p>
          <p>
            <b>
              I <span id="love">love</span> programming and I am gifted at
              resolving problems and learning new skills. As a University of
              Richmond Coding Boot Camp Graduate, I have the technical skills to
              approach front-end and back-end challenges independently or with a
              team of AGILE programmers. And as a former educator, I am an
              experienced presenter whose reliability and communication skills
              will benefit any workplace environment. In my spare time, I am
              working on a daily scheduler in React Native and a park database
              in Next.js
            </b>
          </p>
        </div>
        <div id="education">
          <div id="education-ed">
            <h2>Education</h2>
            <div className="school">
              {/* U of R INFO */}
              <div className="icon">
                <img id="uor" src="/ur.png" />
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
                <img id="vcu" src="/vcu.png" />
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
            <h2>Currently Learning</h2>
            <ul id="current-learn">
              <li>Data Structures</li>
              <li>SASS</li>
              <li>Figma</li>
              <li>React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
