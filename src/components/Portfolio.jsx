import React from "react";
import "./portfolio.css";
import POR1 from "../assets/blue-snow.webp";
import POR2 from "../assets/full-bloom.png";
import POR3 from "../assets/herringbone.webp";
import POR4 from "../assets/leaves-pattern.webp";
import POR5 from "../assets/pink-flowers.webp";

const portfolios = [
  {
    src: POR1,
    href: "https:google.com",
    title: "This is a portfolio item title.",
  },
  {
    src: POR2,
    href: "https:google.com",
    title: "This is a portfolio item title.",
  },
  {
    src: POR3,
    href: "https:google.com",
    title: "This is a portfolio item title.",
  },
  {
    src: POR4,
    href: "https:google.com",
    title: "This is a portfolio item title.",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolios.map((portfolio) => (
          <a href={portfolio.href}>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={portfolio.src} alt="" />
              </div>
              <h3>{portfolio.title}</h3>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
