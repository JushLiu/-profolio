import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { AiOutlineMessage } from "react-icons/ai";

const navs = [
  { href: "#", icon: <AiOutlineHome /> },
  { href: "#about", icon: <AiOutlineUser /> },
  { href: "#experience", icon: <AiOutlineBook /> },
  { href: "#portfolio", icon: <SiMicrosoftsqlserver /> },
  { href: "#contact", icon: <AiOutlineMessage /> },
];

function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav>
      {navs.map((a) => (
        <a
          key={a.href}
          href={a.href}
          onClick={() => setActive(a.href)}
          className={active === a.href ? "active" : ""}
        >
          {a.icon}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
