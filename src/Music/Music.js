import React from "react";
import Video from "./Video";
import "../styles/music.css";
const videos = [
  {
    id: 1,
    song: "Jesus Paid it All",
    composer: "Grape/Gustafson",
    date: "October 1, 2017",
    photo: "/MV-Arise-my-soul.jpg",
    link: "https://vimeo.com/236775991",
  },
  {
    id: 2,
    song: "Chesterfield Observer Article",
    composer: "Rich Griset",
    date: "February 7, 2018",
    photo: "/article.jpg",
    link: "https://www.chesterfieldobserver.com/articles/at-clover-hill-a-youth-string-orchestra-preps-for-its-debut/",
  },

  {
    id: 3,
    song: "Concertant Duet Op.57 No.3: Moderato",
    composer: "Charles Auguste de Beriot ",
    date: "February 28, 2021 ",
    photo: "beriot.jpg",
    link: "https://www.youtube.com/watch?v=9X4zD4wjbnM",
  },

  {
    id: 4,
    song: "Passacaglia",
    composer: "Handel-Halvorsen",
    date: "May 23, 2021",
    photo: "/maxresdefault.jpg",
    link: "https://www.chesterfieldobserver.com/articles/at-clover-hill-a-youth-string-orchestra-preps-for-its-debut/",
  },
];

export default function Music() {
  return (
    <section className="bg-dark" id="music">
      <span id="musics"></span>
      <div className="container">
        <h2>Music</h2>
        <div id="music-videos">
          {videos.map((video) => (
            <Video key={video.id} props={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
