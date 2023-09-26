import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import profilePic from "../../img/profile.jpg";

const Navbar = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-1");
    window.scrollTo({
      top: contactForm.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="profile-pic">
          <img src={profilePic} alt="" />
        </div>
        <div className="n-name">Ritik</div>
        <Toggle />
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonials" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>

        <button className="button n-button" onClick={scrollToContact}>
          Contact
        </button>
      </div>
    </div>
  );
};

export { Navbar };
