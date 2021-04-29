import React from "react";

export default function Footer() {
  return (
    <>
      <div className="section-header" id="contact">
        <div className="container">
          <h3>Contact Form</h3>
          <form action="/action_page.php">
            <label for="name"></label>
            <input type="text" id="fname" name="firstname" placeholder="Name" />

            <label for="email"></label>
            <input type="text" id="email" name="email" placeholder="Email" />

            <label for="subject"></label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Message"></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div id="footer">
        This site is build using{" "}
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          React
        </a>{" "}
        and is hosted at{" "}
        <a href="https://vercel.com/" rel="noreferrer" target="_blank">
          Vercel
        </a>
      </div>
    </>
  );
}
