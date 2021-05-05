import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Footer() {
  const [state, handleSubmit] = useForm("mzbydrrr");
  if (state.succeeded) {
    console.log(state);
    return (
      <>
        <div className="section-header" id="contact">
          <div className="container-contact">
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
          <div id="status" className="success">
            Thank you
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
  return (
    <>
      <div className="section-header" id="contact">
        <span id="contacts"></span>

        <div className="container-contact">
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
