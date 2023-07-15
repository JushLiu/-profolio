import React from "react";
import { BsStars } from "react-icons/bs";
import "./experience.css";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>前端技能</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">熟練</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">熟練</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">熟練</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">熟練</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">中等</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>後端技能</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">中等</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">中等</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>Prisma</h4>
                <small className="text-light">初階</small>
              </div>
            </article>
            <article className="experience__details">
              <BsStars className="experience__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">中等</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
