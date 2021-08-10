import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./styles/footer.css";


export default function Footer() {
  const [state, handleSubmit] = useForm("mzbydrrr");
  if (state.succeeded) {
    return (
      <>
        <section className="section-header" id="contact">
          <p>Thank you for the message. I will back to you shortly</p>
        </section>
        <div className="bg-dark" id="footer">
          This site is built using{" "}
          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            React
          </a>{" "}
          <br className="p-break" />
          and is hosted at{" "}
          <a href="https://heroku.com/" rel="noreferrer" target="_blank">
            Heroku
          </a>
        </div>
      </>
    );
  }
  return (
    <>
      <section className="section-header" id="contact">
        <span id="contacts"></span>
        <div className="container container--narrow">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input type="name" id="name" name="name" placeholder="Name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            {/* <label for="subject"></label> */}
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              cols="30"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button id="submit" type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
      </section>
      <div className="bg-dark" id="footer">
        This site is built using{" "}
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          React
        </a>{" "}
        <br className="p-break" />
        and is hosted at{" "}
        <a href="https://heroku.com/" rel="noreferrer" target="_blank">
          Heroku
        </a>
      </div>
    </>
  );
}
