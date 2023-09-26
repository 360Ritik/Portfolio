import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "../../Doc/ResumeJ.pdf";
import Card from "../Card/Card";

import { motion } from "framer-motion";
export const Services = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome" id="download-R">
        <span> Technology </span>
        <span>Enthusiast</span>
        <span>
        "I possess a fervent interest and deep passion for Java development and Cloud computing.
        <br/> Currently, I am actively seeking an opportunity to bolster my skills and knowledge in these domains.
        <br/> For a comprehensive overview of my work and skills, please refer to my attached resume."
        </span>
        <a href={Resume} download="Resume" target="_blank">
          <button  className="button s-button" > Download Resume</button>
        </a>

        <div
          className=" blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* right-Side */}
      <div className="cards">
        {/* first Card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading="FrontEnd"
            detail={"Html,  Css,  Javascript,   React"}
          />
        </motion.div>

        {/* second Card */}

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading="BackEnd"
            detail={"Java, mysql, Springboot, Git,Jpa"}
          />
        </motion.div>

        {/* Third Card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: "12rem", top: "19rem" }}
        >
          <Card
            emoji={Humble}
            heading="Cloud"
            detail={"Aws, Docker,Linux, Kubernetes"}
          />
        </motion.div>
        <div
          className=" blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};
