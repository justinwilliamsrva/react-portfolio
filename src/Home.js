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
              Proident veniam sunt elit Lorem sit ullamco. Reprehenderit ex
              deserunt magna officia cillum qui. Non sint culpa cupidatat duis
              ad in proident magna nulla minim consequat elit. Non et laborum
              anim amet sint Lorem velit mollit elit reprehenderit excepteur.
              Aute veniam sunt occaecat tempor ut voluptate.
            </b>
          </p>
          <p>
            <b>
              Voluptate officia eu ut excepteur nisi eu excepteur aliquip eu
              officia non enim incididunt. Dolor culpa excepteur reprehenderit
              qui tempor eu sunt eu excepteur excepteur aute minim. Magna magna
              anim reprehenderit aute reprehenderit nisi ea. Occaecat tempor
              magna veniam exercitation consequat officia enim consequat ea. Id
              do eiusmod minim consequat nostrud elit aute consectetur elit.
              Duis consequat id voluptate veniam consequat.
            </b>
          </p>
        </div>
        <div id="education">
          <h2>Education</h2>
          <div className="school">
            {/* U of R INFO */}
            <div className="icon">
              <img src="/ur.png" />
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
            <div className="icon">
              <img src="/vcu.png" />
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
