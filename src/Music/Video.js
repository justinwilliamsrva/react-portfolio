import React from "react";

export default function Video({ props }) {
  return (
    <div class="container">
      <img src={props.photo} alt={props.song} class="image" />
      <h3>{props.date}</h3>
      <div class="middle">
        <h4>{props.song}</h4>
        <h4>{props.composer}</h4>
        <a href={props.link} target="_blank" class="text">
          Watch
        </a>
      </div>
    </div>
  );
}
