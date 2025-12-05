import { useEffect, useState } from "react";

export function Header() {
  const texts = [
    "HEY 👋 I AM ABDULLAH HAMDAN, FULLSTACK WEBDEVELOPER.",
    "MY MISSION IS TO BUILD YOU A WEBSITE WITH MINIMAL COST 🚀",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // index in current text
  const [textIndex, setTextIndex] = useState(0); // index in texts array
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100;
    const pause = 3000;

    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!deleting && index < currentText.length) {
        // typing forward
        setDisplayedText(currentText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (!deleting && index === currentText.length) {
        // pause then start deleting
        setTimeout(() => setDeleting(true), pause);
      } else if (deleting && index > 0) {
        // deleting backwards
        setDisplayedText(currentText.slice(0, index - 1));
        setIndex(index - 1);
      } else if (deleting && index === 0) {
        // move to next text, loop around
        setDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, deleting, textIndex, texts]);

  return (
    <div
      className="
    relative h-screen w-full bg-cover
    bg-center
    md:bg-top
    bg-black
    text-white
  "
      id="Home"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Centered typewriter text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white light:text-white text-3xl md:text-5xl font-semibold text-center px-4">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
      </div>
    </div>
  );
}
