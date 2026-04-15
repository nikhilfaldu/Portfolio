import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

const items = [
  { text: "Full Stack Web & Software Development", color: "#f0a0c0" },
  { text: "Custom IT Solutions & System Design", color: "#be6adf" },
  { text: "Cybersecurity & Cloud Hosting", color: "#f0a0c0" },
  { text: "Game Development & Interactive Applications", color: "#be6adf" },
  { text: "UI/UX Design, Graphics & Branding", color: "#f0a0c0" },
  { text: "Open Source Contributor", color: "#be6adf" },
  { text: "Digital Presence & Product Development", color: "#f0a0c0" },
];

function Type() {
  const wrapperRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (wrapperRef.current) {
        const wrapper = wrapperRef.current.querySelector(".Typewriter__wrapper");
        if (wrapper) {
          const text = wrapper.textContent;
          if (text.length <= 1) {
            // New string starting, update color
            const item = items[indexRef.current % items.length];
            wrapper.style.color = item.color;
          }
          if (text.length === 0) {
            indexRef.current++;
          }
        }
      }
    });

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current, { childList: true, subtree: true, characterData: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef}>
      <Typewriter
        options={{
          strings: items.map((i) => i.text),
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 50,
        }}
      />
    </div>
  );
}

export default Type;
