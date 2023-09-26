import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import { motion } from "framer-motion";
export const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const scrollToContact = () => {
    const contactForm = document.getElementById("download-R");
    window.scrollTo({
      top: contactForm.offsetTop,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span> Ritik Kumar</span>
          <span>
          Dedicated Java Developer with a passion for innovation and a strong commitment to team success.
Proven ability to learn quickly, adapt to new technologies, and drive continuous improvement. Eager to
apply technical expertise and attention to detail in contributing to project excellence and industry
advancement .
          </span>
        </div>

        <button className=" button i-button" onClick={scrollToContact}>Hire me</button>

        <div className="i-icons">
          <a href="https://github.com/360Ritik">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/ritik-kumar-336111131">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/ritik6593/">
            <img src={Instagram} alt="Instagrm" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="boy" />

        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ left: "74%", top: "-4%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={crown} text1="web" text2="Development" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="Backend" text2="Development" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
