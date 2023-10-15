import React from "react";
import { Link } from "react-router-dom";
import '../Pages/Home.css'

const Footer = () => {
  return (
    <footer className="pt-13 pb-7 footer bg-color-6">
      <div className="container container-xxl">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-6 mb-lg-0 text-center">
            <h3 className="fs-16 mb-3 mt-4 text-white letter-spacing-05">
              Quick Links
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Home
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  About us
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Features
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 text-center f-border-left f-border-right">
            <div className="footer-logo">
              <img src="images/logo-white.svg" alt="" />
            </div>
            <h3 className="mb-2  text-white letter-spacing-05">
              About Us
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Home
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Features
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  About Us
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 mb-6 mb-lg-0 text-center">
            <h3 className="fs-16 mb-3 text-white mt-4 letter-spacing-05">
              Contacts
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  <i className="fab fa-whatsapp mr-1" /> +91 8379882933
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  <i className="fal fa-phone-alt mr-1" /> +91 261 229 5000
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="mailto:info@kalamandirjewellers.com"
                  className="text-gray hover-white font-weight-500">
                  <i className="fal fa-paper-plane mr-1" />
                  info@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
             </div>
    </footer>
  );
};

export default Footer;
