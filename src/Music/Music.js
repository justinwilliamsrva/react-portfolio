import React from "react";
import Video from "./Video";
const videos = [
  {
    id: 1,
    song: "asdasd",
    composer: "asdas",
    date: "May 23, 1988",
    photo: "/MV-Arise-my-soul.jpg",
    link: "https://vimeo.com/236775991",
  },
  {
    id: 2,
    song: "asdasd",
    composer: "asdas",
    date: "asdasdad",
    photo: "/MV-Arise-my-soul.jpg",
    link: "https://vimeo.com/236775991",
  },

  {
    id: 3,
    song: "asdasd",
    composer: "asdas",
    date: "asdasdad",
    photo: "/MV-Arise-my-soul.jpg",
    link: "https://vimeo.com/236775991",
  },
  {
    id: 4,
    song: "asdasd",
    composer: "asdas",
    date: "May 23, 1988",
    photo: "/MV-Arise-my-soul.jpg",
    link: "https://vimeo.com/236775991",
  },
  {
    id: 5,
    song: "asdasd",
    composer: "asdas",
    date: "asdasdad",
    photo: "/MV-Arise-my-soul.jpg",
    link: "https://vimeo.com/236775991",
  },

  {
    id: 6,
    song: "Chesterfield Observer Article",
    composer: "Rich Griset",
    date: "February 7, 2018",
    photo: "/article.jpg",
    link:
      "https://www.chesterfieldobserver.com/articles/at-clover-hill-a-youth-string-orchestra-preps-for-its-debut/",
  },
];

export default function Music() {
  return (
    <div className="section-header" id="music">
       <span id="musics"></span>
      <h2>Music</h2>
      <div id="music-videos">
        {videos.map((video) => (
          <Video key={video.id} props={video} />
        ))}
      </div>
    </div>
  );
}
