import React from "react";
import CV from "../../assets/pink-flowers.webp";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
