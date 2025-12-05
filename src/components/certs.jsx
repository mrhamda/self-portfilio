import React from "react";

export function Certifaction({
  content,
  title,
  built,
  link,
  category,
  imgUrl,
}) {
  return (
    <div className="card01 light:text-white">
      <div className="card01-inner">
        <div className="card01-front flex flex-col items-center p-3">
          <img
            src={imgUrl}
            alt={title}
            className="rounded-lg object-contain"
            style={{
              height: "150px",
              width: "auto",
            }}
          />

          <div className="absolute top-0 right-2 transition-all">
            <a
              target="_blank"
              href={link}
              className="hover:opacity-45 transition-all drop-shadow-lg cursor-pointer"
              style={{ textShadow: "3px 3px 6px rgba(255, 255, 255, 0.8)" }}
            >
              <img
                src="public/../c.png"
                style={{ width: "40px", height: "34px" }}
                className="rounded-full mt-1"
              />
            </a>
          </div>

          <p className="title mt-3">{title}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
}
