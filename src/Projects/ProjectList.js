import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Spirited Scenery",
    description:
      "Explore your city's culture confidently with the Spirited Scenery App! Use our app to easily find local art museums and breweries! In addition, the app considers your local weather conditions and offers advice on how to whether you should venture on foot or wear a coat on your travels. If you're an art sophisticate, critic, a bar crawler or all of the above, we've got you covered!",
    img: "/Spirted.JPG",
    techs: ["JQuery", "Material-UI", "AJAX"],
    link: "https://justinwilliamsrva.github.io/Spirited-Scenery/",
    github: "https://github.com/justinwilliamsrva/Spirited-Scenery",
  },
  {
    id: 2,
    title: "Orchestra RPG",
    description:
      "Ullamco Lorem amet quis consequat consectetur deserunt occaecat. Sint ea labore magna minim irure quis dolore excepteur fugiat ea aliqua. Proident adipisicing excepteur quis officia exercitation id laborum. Cillum labore Lorem dolor nostrud cillum et occaecat culpa. Duis duis est ad exercitation minim officia culpa. Magna ad pariatur ullamco sunt commodo velitDolor in non consectetur voluptate est Lorem et commodo aliquip ad voluptate irure exercitation in. Nostrud sit voluptate pariatur enim Lorem. Ipsum magna fugiat occaecat velit minim cupidatat enim officia eiusmod in ex. Cillum labore dolor mollit sunt. Elit proident labore eu pariatur consequat. Occaecat exercitation eu anim ipsum ut minim.",
    img: "rpg-photo.JPG",
    techs: ["JQuery", "Material-UI", "AJAX"],
  },
  {
    id: 3,
    title: "CHHS Orchestra",
    description:
      "Ullamco Lorem amet quis consequat consectetur deserunt occaecat. Sint ea labore magna minim irure quis dolore excepteur fugiat ea aliqua. Proident adipisicing excepteur quis officia exercitation id laborum. Cillum labore Lorem dolor nostrud cillum et occaecat culpa. Duis duis est ad exercitation minim officia culpa. Magna ad pariatur ullamco sunt commodo velitDolor in non consectetur voluptate est Lorem et commodo aliquip ad voluptate irure exercitation in. Nostrud sit voluptate pariatur enim Lorem. Ipsum magna fugiat occaecat velit minim cupidatat enim officia eiusmod in ex. Cillum labore dolor mollit sunt. Elit proident labore eu pariatur consequat. Occaecat exercitation eu anim ipsum ut minim.",
    img: "cavorch.JPG",
    techs: ["Javascript", "JQuery", "Material-UI", "AJAX"],
  },
];
export function ProjectList() {
  return (
    <div>
      <div className="section-header" id="projects">
        <h2>Projects</h2>

        {projects.map((project) => (
          <Project key={project.id} props={project} />
        ))}
      </div>
    </div>
  );
}
