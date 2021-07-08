import React from "react";

export default function Header() {
  return (
    <header>
      <h1 className=" logo">
        <a href="#content" className=" teal js-smooth-scroll">
          Justin Williams
        </a>
      </h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a href="#content" className="js-smooth-scroll">
              Bio
            </a>
          </li>
          <li>
            <a href="#skillet" className="js-smooth-scroll">
              Skills
            </a>
          </li>
          <li>
            <a href="#project-scroll" className="js-smooth-scroll">
              Projects
            </a>
          </li>
          <li>
            <a href="#music" className="js-smooth-scroll">
              Music
            </a>
          </li>

          <li>
            <a href="#contact" className="js-smooth-scroll">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}
