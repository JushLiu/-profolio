import React from "react";
import "./about.css";
import ME from "../assets/logo.jpg";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <h3>您好，我是Jush，一位想朝著網頁工程師發展的年輕人。</h3>
          <br />
          <h3>
            原本讀生科系的我，在進入實驗室工作後，深感未來發展受限且重複性的工作不適合我，
            自此有了轉職的念頭。
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
