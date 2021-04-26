import React from "react";

export default function Project({ props }) {
  const techs = props.techs;
  console.log(techs);

  return (
    <div>
      {props.id % 2 === 1 ? (
        <div className="project-card">
          <div className="card-left">
            <img className="project-image" src={props.img} alt="image" />
          </div>
          <div className="card-right">
            <h3>{props.title}</h3>
            <ul className="project-link-list">
              <li className="project-link">
                <a href={props.link} target="_blank">
                  Check it Out
                </a>
              </li>
              <li className="project-link">
                <a href={props.github} target="_blank">
                  Github
                </a>
              </li>
            </ul>
            <p>{props.description}</p>

            <ul className="tech-list">
              {techs.map((tech) => (
                <li className="tech">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="project-card-reverse">
          <div className="card-right">
            <h3>{props.title}</h3>

            <p>{props.description}</p>
            <ul className="tech-list">
              {techs.map((tech) => (
                <li className="tech">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="card-left">
            <img className="project-image" src={props.img} alt="images" />
          </div>
        </div>
      )}
    </div>
  );
}
