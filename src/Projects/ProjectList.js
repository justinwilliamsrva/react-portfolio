import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Spirited Scenery",
    description:
      "Use our app to easily find local art pieces and breweries! In addition, the app considers your local weather conditions and offers advice on whether you should venture on foot or wear a coat on your travels.",
    img: "/Spirted.JPG",
    techs: ["JQuery", "Material-UI", "AJAX"],
    link: "https://justinwilliamsrva.github.io/Spirited-Scenery/",
    github: "https://github.com/justinwilliamsrva/Spirited-Scenery",
  },
  {
    id: 2,
    title: "Orchestra RPG",
    description:
      "Users can learn scales, shifting and bow technique during mandated virtual learningStudents can login to profile, turn-in assignments, receive teacher feedback, compare progress to the rest of the class.",
    img: "rpg-photo.JPG",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://cavorch.org/orchestra/rpg.html",
    github:
      "https://github.com/justinwilliamsrva/chhsorchestra/tree/master/orchestra",
  },
  {
    id: 3,
    title: "CHHS Orchestra",
    description:
      "Static website that displays the orchestra, conductor information, orchestra news and the calendar  parents and includes important links for students",
    img: "cavorch.JPG",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://cavorch.org/",
    github: "https://github.com/justinwilliamsrva/chhsorchestra",
  },
  {
    id: 4,
    title: "Summer Camp Staff App",
    description:
      "A CRUD app that allows camp organizers and staff to keep track of inventory, manage student records, and communicate with all staff while keeping certain features reserved for authorized users",
    img: "staff.JPG",
    techs: ["MongoDB", "Express", "React"],
    link: "https://summercampstaffapp.herokuapp.com/",
    github: "https://github.com/justinwilliamsrva/SummerCampApp",
  },
  {
    id: 5,
    title: "Violin Central",
    description:
      "A CRUD app where authenticated users can access a Violin Book Database and post new entries. Users can also search for lessons plans and connected them to certain books",
    img: "violin central.JPG",
    techs: ["Handlebars", "Express", "MySQL"],
    link: "http://violin-central.herokuapp.com/",
    github: "https://github.com/justinwilliamsrva/Violin-Central",
  },
];
export function ProjectList() {
  return (
    <section className="bg-light" id="project">
      <div className="container container--narrow">
        <h2>Projects</h2>

        {projects.map((project) => (
          <Project key={project.id} props={project} />
        ))}
      </div>
    </section>
  );
}
