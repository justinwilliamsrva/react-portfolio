import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Spirited Scenery",
    description:
      "Ullamco Lorem amet quis consequat consectetur deserunt occaecat. Sint ea labore magna minim irure quis dolore excepteur fugiat ea aliqua. Proident adipisicing excepteur quis officia exercitation id laborum. Cillum labore Lorem dolor nostrud cillum et occaecat culpa. Duis duis est ad exercitation minim officia culpa. Magna ad pariatur ullamco sunt commodo velitDolor in non consectetur voluptate est Lorem et commodo aliquip ad voluptate irure exercitation in. Nostrud sit voluptate pariatur enim Lorem. Ipsum magna fugiat occaecat velit minim cupidatat enim officia eiusmod in ex. Cillum labore dolor mollit sunt. Elit proident labore eu pariatur consequat. Occaecat exercitation eu anim ipsum ut minim.",
    img: "/Spirted.JPG",
  },
  {
    id: 2,
    title: "Orchestra RPG",
    description:
      "Ullamco Lorem amet quis consequat consectetur deserunt occaecat. Sint ea labore magna minim irure quis dolore excepteur fugiat ea aliqua. Proident adipisicing excepteur quis officia exercitation id laborum. Cillum labore Lorem dolor nostrud cillum et occaecat culpa. Duis duis est ad exercitation minim officia culpa. Magna ad pariatur ullamco sunt commodo velitDolor in non consectetur voluptate est Lorem et commodo aliquip ad voluptate irure exercitation in. Nostrud sit voluptate pariatur enim Lorem. Ipsum magna fugiat occaecat velit minim cupidatat enim officia eiusmod in ex. Cillum labore dolor mollit sunt. Elit proident labore eu pariatur consequat. Occaecat exercitation eu anim ipsum ut minim.",
    img: "rpg-photo.JPG",
  },
  {
    id: 3,
    title: "CHHS Orchestra",
    description:
      "Ullamco Lorem amet quis consequat consectetur deserunt occaecat. Sint ea labore magna minim irure quis dolore excepteur fugiat ea aliqua. Proident adipisicing excepteur quis officia exercitation id laborum. Cillum labore Lorem dolor nostrud cillum et occaecat culpa. Duis duis est ad exercitation minim officia culpa. Magna ad pariatur ullamco sunt commodo velitDolor in non consectetur voluptate est Lorem et commodo aliquip ad voluptate irure exercitation in. Nostrud sit voluptate pariatur enim Lorem. Ipsum magna fugiat occaecat velit minim cupidatat enim officia eiusmod in ex. Cillum labore dolor mollit sunt. Elit proident labore eu pariatur consequat. Occaecat exercitation eu anim ipsum ut minim.",
    img: "cavorch.JPG",
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
