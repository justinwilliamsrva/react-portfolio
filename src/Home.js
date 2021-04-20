import React from "react";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="personal">
          <img id="profile" src="/Justin-min.jpg" />
          <h2>Justin Williams</h2>
          <h3>Full-Stack Web Developer</h3>
          <div id="icons">
            <img className="icons-icon" src="/mail_icon.png" />
            <img className="icons-icon" src="/github.png" />
            <img className="icons-icon" src="/twitter.png" />
            <img className="icons-icon" src="/linkedin.png" />
          </div>
        </div>
        <div className="biography"></div>
      </div>
    </div>
  );
}
