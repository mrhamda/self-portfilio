import { faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function ProjectComponent({
  content,
  title,
  built,
  githubLink,
  category,
}) {
  return (
    <div className="flip-card light:text-white">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title ">{title}</p>
          <p>{category}</p>
        </div>
        <div className="flip-card-back relative pt-6">
          {category.includes("Game") ? (
            <div className="absolute top-0 right-2 transition-all">
              <a
                target="_blank"
                href={githubLink}
                className="hover:opacity-45 transition-all drop-shadow-lg cursor-pointer"
                style={{ textShadow: "3px 3px 6px rgba(255, 255, 255, 0.8)" }}
              >
                <FontAwesomeIcon icon={faItchIo} size="lg" />
              </a>
            </div>
          ) : (
            <div className="absolute top-0 right-2 transition-all">
              <a
                target="_blank"
                href={githubLink}
                className="hover:opacity-45 transition-all drop-shadow-lg"
                style={{ textShadow: "3px 3px 6px rgba(255, 255, 255, 0.8)" }}
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          )}

          <p style={{ fontSize: "1rem" }}>{content}</p>
          <p className="mt-5 font-bold">{built}</p>
        </div>
      </div>
    </div>
  );
}
