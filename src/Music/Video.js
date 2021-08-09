import React from "react";

export default function Video({ props }) {
  return (
    <div className="music-container">
      <img
        loading="lazy"
        src={props.photo}
        alt={props.song}
        className="image"
      />
      <h3>
        {props.song} by {props.composer}{" "}
      </h3>
      <div className="middle">
        <a href={props.link} target="_blank" rel="noreferrer" className="text">
          View
        </a>
        <h4>{props.date}</h4>
      </div>
    </div>
  );
}
