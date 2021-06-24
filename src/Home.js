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
          <img className="icons-icon" src="/mail_icon.png" />
          <img className="icons-icon" src="/github.png" />
          <img className="icons-icon" src="/twitter.png" />
          <img className="icons-icon" src="/linkedin.png" />
        </div>
      </div>
      <div className="biography">
        <div id="bio">
          <h2>Biography</h2>
          <p>
            <b>
              Full-Stack Web Developer with over ten years of experience in
              primary and secondary education. As a former teacher, I am eager
              to combine my leadership and organizational skills with my love
              for programming to make appealing, engaging, and robust web
              applications.
            </b>
          </p>
          <p>
            <b>
              I <span id="love">LOVE</span> programming and am eager to join a
              team of professionals solving problems together. As a University
              of Richmond Coding Boot Camp Graduate, I have the technical skills
              to approach front-end and back-end challenges independently or
              with a team of AGILE programmers. And as a former educator, I am
              an experienced presenter whose reliability and communication
              skills will benefit any workplace environment. In my spare time, I
              am working on a daily scheduler in React Native and a social media
              site in Next.js
            </b>
          </p>
        </div>
        <div id="education">
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
      </div>
    </div>
  );
}
