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
    song: "asdasd",
    composer: "asdas",
    date: "asdasdad",
    photo: "/MV-Arise-my-soul.jpg",
    link: "https://vimeo.com/236775991",
  },
];

export default function Music() {
  return (
    <div className="section-header" id="music">
      <h2>Music</h2>
      <div id="music-videos">
        {videos.map((video) => (
          <Video key={video.id} props={video} />
        ))}
      </div>
    </div>
  );
}
