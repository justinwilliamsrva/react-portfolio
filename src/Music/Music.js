import React from "react";
import Video from "./Video";
import "../styles/music.css";
const videos = [
  {
    id: 1,
    song: "Clean Gredients",
    composer: "Ameronix",
    date: "Database of chemical ingredients used primarily to formulate residential, institutional, industrial, and janitorial cleaning products that have been pre-approved to meet the U.S. EPA’s Safer Choice Standard",
    photo: "cleang.png",
    link: "https://cleangredients.org/",
  },
  {
    id: 2,
    song: "Comp Recovery",
    composer: "Ameronix",
    date: "Dashboard used by medical providers and lawyers to streamline the input, filling and evaluation of workers’ compensation recovery data. ",
    photo: "comp-rec.png",
    link: "https://comprecoveryinc.com/",
  },

  {
    id: 3,
    song: "Modana Photography",
    composer: "Freelance",
    date: "Photography website showcasing artist's work, biography, pricing, reviews and form for contact",
    photo: "madona-photography.png",
    link: "http://madonagaliphotography.com/index",
  },

  {
    id: 4,
    song: "CHHS Orchestra LMS",
    composer: "Freelance",
    date: "Students can login to profile, turn-in assignments, receive teacher feedback, and compare progress to the rest of the class",
    photo: "rpg-photo-old.JPG",
    link: "https://justinwilliamsrva.github.io/chhsorchestra/orchestra/rpg.html",
  },
];

export default function Music() {
  return (
    <section className="bg-primary" id="music">
      <span id="musics"></span>
      <div className="container">
        <h2>Work</h2>
        <div id="music-videos">
          {videos.map((video) => (
            <Video key={video.id} props={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
