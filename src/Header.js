import React from "react";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <h3>
            <a href="#content">Home</a>
          </h3>
          <h3>
            <a href="#skillet">Skills</a>
          </h3>
          <h3>
            <a href="#project">Projects</a>
          </h3>
          <h1 className="name">Justin Williams</h1>
          <h3>Resume</h3>
          <h3>
            <a href="#musics">Music</a>
          </h3>
          <h3>
            <a href="#contacts">Contact</a>
          </h3>
        </div>
      </div>
    </div>
  );
}
