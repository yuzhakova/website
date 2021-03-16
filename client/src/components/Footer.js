import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Based in Vancouver Canada</p>
            </div>
            <div className="d-flex">
              <a href="tel:604-880-5245">+1(604)880-5245</a>
            </div>
            <div className="d-flex">
              <p>natalia.yuzhakova@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">
                  <Link smooth={true} to="home" href="#">
                    Home
                  </Link>
                </a>
                <br />
                <a className="footer-nav">
                  <Link smooth={true} to="about" offset={-110} href="#">
                    About me
                  </Link>
                </a>
                <br />
                <a className="footer-nav">
                  {" "}
                  <Link smooth={true} to="services" href="#">
                    Services
                  </Link>
                </a>
              </div>
              <div className="col">
                <a className="footer-nav">
                  {" "}
                  <Link smooth={true} to="experience" href="#">
                    Experience
                  </Link>
                </a>
                <br />
                <a className="footer-nav">
                  <Link smooth={true} to="testimonials" href="#">
                    Testimonials
                  </Link>
                </a>
                <br />
                <a className="footer-nav">
                  <Link smooth={true} to="contact" href="#">
                    Contact
                  </Link>
                </a>
              </div>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;NYConsulting | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
