import React from "react";

export default function Video({ props }) {
  return (
    <div class="music-container">
      <img loading="lazy" src={props.photo} alt={props.song} class="image" />
      <h3>
        {props.song} by {props.composer}{" "}
      </h3>
      <div class="middle">
        <a href={props.link} target="_blank" rel="noreferrer" class="text">
          View
        </a>
        <h4>{props.date}</h4>
      </div>
    </div>
  );
}
