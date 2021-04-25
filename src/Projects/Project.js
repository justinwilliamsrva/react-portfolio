import React from "react";

export default function Project({ props }) {
  return (
    <div>
      {props.id % 2 === 1 ? (
        <div className="project-card">
          <div className="card-left">
            <img className="project-image" src={props.img} alt="image" />
          </div>
          <div className="card-right">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {/* <p>{props.technologies}</p> */}
          </div>
        </div>
      ) : (
        <div className="project-card-reverse">
          <div className="card-right">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {/* <p>{props.technologies}</p> */}
          </div>
          <div className="card-left">
            <img className="project-image" src={props.img} alt="images" />
          </div>
        </div>
      )}
    </div>
  );
}
