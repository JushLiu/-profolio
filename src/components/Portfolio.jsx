import React from "react";
import "./portfolio.css";
import POR1 from "../assets/flexQ.png";

const portfolios = [
  {
    src: POR1,
    href: "/黑白轉轉棋/index.html",
    title: "JavaScript 小遊戲",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolios.map((portfolio) => (
          <article className="portfolio__item" key={portfolio.title}>
            <a href={portfolio.href}>
              <div className="portfolio__item-image">
                <img src={portfolio.src} alt="" />
              </div>
              <h3>{portfolio.title}</h3>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
