import React from "react";
import Project from "./Project";
import "../styles/project.css";

const projects = [
  {
    id: 1,
    title: "Passport",
    description:
      "The world's simplest car maintenance management system that allows user login, keeps a database of user cars and car data, informs user of their maintenance status whether it is up to date, due soon or past due",
    img: "passport.PNG",
    techs: ["React", "Tailwind", "Laravel"],
    link: "https://passportcar.com/",
    github: "https://github.com/justinwilliamsrva/cartracker",
  },
  {
    id: 2,
    title: "Spirited Scenery",
    description:
      "Easily find local art pieces and breweries with the power of Google's API. The app also considers your local weather conditions and offers advice on whether you should venture on foot or wear a coat on your travels.",
    img: "/Spirted.JPG",
    techs: ["JQuery", "Material", "AJAX"],
    // Do not put in Material-UI since it is too big
    link: "https://justinwilliamsrva.github.io/Spirited-Scenery/",
    github: "https://github.com/justinwilliamsrva/Spirited-Scenery",
  },
 

  {
    id: 3,
    title: "Summer Camp Staff App",
    description:
      "A CRUD app that allows camp organizers and staff to keep track of inventory, manage student records, and communicate with all staff while keeping certain features reserved.",
    img: "staff.JPG",
    techs: ["MongoDB", "Express", "React"],
    link: "https://summercampstaffapp.herokuapp.com/",
    github: "https://github.com/justinwilliamsrva/SummerCampApp",
  },
  {
    id: 4,
    title: "Violin Central",
    description:
      "A CRUD app where authenticated users can access a Violin Book Database and post new entries. Users can also search for lessons plans. ",
    img: "violin central.JPG",
    techs: ["Handlebars", "Express", "MySQL"],
    link: "http://violin-central.herokuapp.com/",
    github: "https://github.com/justinwilliamsrva/Violin-Central",
  },
  {
    id: 5,
    title: "Work Day Scheduler",
    description:
      "A simple calendar app for scheduling your workday while easily switching between hour and half-half increments. ",
    img: "workday.JPG",
    techs: ["CSS", "JavaScript", "Moment.js"],
    link: "https://justinwilliamsrva.github.io/dailyscheduler/",
    github: "https://github.com/justinwilliamsrva/dailyscheduler",
  },
  {
    id: 6,
    title: "Weather Tracker",
    description:
      "Using the the openWeather API, this dashboard gives the current conditions as well of a five day forecast of desired cities. ",
    img: "weather.png",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://justinwilliamsrva.github.io/Weather-Dashboard/",
    github:
      "https://github.com/justinwilliamsrva/Weather-Dashboard",
  },
];
export function ProjectList() {
  return (
    <section id="project-scroll" className="bg-dark">
      <div id="project" className="container">
        <h2>Side Projects</h2>
        <div id="project-div">
          {projects.map((project) => (
            <Project key={project.id} props={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
