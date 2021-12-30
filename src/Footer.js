import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./styles/footer.css";

export default function Footer() {
  const [state, handleSubmit] = useForm("mzbydrrr");
  const d = new Date;
let year = d.getFullYear();

  if (state.succeeded) {
    return (
      <>
        <section className="bg-lightr" id="contact">
          <div className="container container--narrow">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name"></label>
              <input type="name" id="name" name="name" placeholder="Name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
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
                cols="30"
              ></textarea>
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
          <div id="status" className="success">
            Your Message Has Been Sent
          </div>
        </section>
        <div className="bg-dark" id="footer">
        &copy;  <a href="https://justinwdev.com/" rel="noreferrer" target="_blank">Justin Williams</a>  {year} <span className="only-small">- </span>
        <br className="p-break" />
         This site is built using{" "}
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank"> 
          React
        </a>{" "}
        <br className="p-break" />
        and is hosted on{" "}
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
              cols="30"
            ></textarea>
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
      &copy;  <a href="https://justinwdev.com/" rel="noreferrer" target="_blank">Justin Williams</a>  {year} <span className="only-small">- </span>
        <br className="p-break" />
         This site is built using{" "}
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          React
        </a>{" "}
        <br className="p-break" />
        and is hosted on{" "}
        <a href="https://heroku.com/" rel="noreferrer" target="_blank">
          Heroku
        </a>
      </div>
    </>
  );
}
