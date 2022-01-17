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
      <div className="middle">
      <h4>{props.date}</h4>
        <a href={props.link} target="_blank" rel="noreferrer" className="text">
          View
        </a>
       
      </div>
       <h3>
        {props.song} 
      
      </h3>
    </div>
  );
}
