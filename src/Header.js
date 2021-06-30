import React from "react";

export default function Header() {
  return (
    <header>
      <h1 className="teal logo">Justin Williams</h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a href="#content">Bio</a>
          </li>
          <li>
            <a href="#skillet">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#music">Music</a>
          </li>
          {/* <li>
            <a
              href="https://www.notion.so/jwrva/Justin-Williams-Resume-b8a9d8bcad28477da2f9d139360ba3db"
              target="_blank"
              rel="noreferrer">
              Resume
            </a>
          </li> */}
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}
