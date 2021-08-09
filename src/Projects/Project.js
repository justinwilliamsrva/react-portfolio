import React from "react";

export default function Project({ props }) {
  const techs = props.techs;

  return (
    <div>
      {props.id % 2 === 1 ? (
        <div className={`${props.title} zoom flex-container project-card`}>
          <div className="card-left">
            <img
              loading="lazy"
              className="project-image"
              src={props.img}
              alt={props.title}
            />
          </div>
          <div className="card-right">
            <h3>{props.title}</h3>
            <div className="project-link-list">
              <a
                className="project-link"
                rel="noreferrer"
                href={props.link}
                target="_blank">
                Check it Out
              </a>

              <a
                className="project-link"
                rel="noreferrer"
                href={props.github}
                target="_blank">
                Github
              </a>
            </div>
            <p>{props.description}</p>
            <ul className="tech-list">
              {techs.map((tech) => (
                <li className="tech" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={`${props.title} zoom flex-container project-card`}>
          <div className="card-right">
            <h3>{props.title}</h3>
            <div className="project-link-list">
              <a
                className="project-link"
                rel="noreferrer"
                href={props.link}
                target="_blank">
                Check it Out
              </a>

              <a
                className="project-link"
                rel="noreferrer"
                href={props.github}
                target="_blank">
                Github
              </a>
            </div>
            <p>{props.description}</p>
            <ul className="tech-list">
              {techs.map((tech) => (
                <li className="tech" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-left">
            <img
              loading="lazy"
              className="project-image"
              src={props.img}
              alt={props.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}
