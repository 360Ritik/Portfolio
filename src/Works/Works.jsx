import React from "react";
import "./Works.css";
import Upwork from "../img/Upwork.png";
import Fiverr from "../img/fiverr.png";
import Amazon from "../img/amazon.png";
import Shopify from "../img/Shopify.png";
import Facebook from "../img/Facebook.png";

import { motion } from "framer-motion";

const Works = () => {

  const scrollToContact = () => {
    const contactForm = document.getElementById("download-R");
    window.scrollTo({
      top: contactForm.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span>Works  &  </span>
        <span>Experience</span>
        <span>
          I acquired proficiency in utilizing Git and
          <br />
          Linux for development. Additionally, I contributed to the
          <br />
          development of key features in an application, leveraging SpringBoot,
          Maven, and JPA
          
        </span>

        <button className="button s-button" onClick={scrollToContact}>Hire Me</button>

        <div
          className=" blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* right side */}
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="w-right"
      >
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} />
          </div>
        </div>

        {/* backCircle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </motion.div>
    </div>
  );
};

export default Works;
