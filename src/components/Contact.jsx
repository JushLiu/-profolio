import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f3j9xzf",
      "template_io5zinm",
      form.current,
      "q2uM_ZE5GFnaDWLp6"
    );
    e.target.reset();
    alert("信件寄出成功!");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
