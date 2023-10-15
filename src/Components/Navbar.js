import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand mx-5" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Become a Guide</a>
                        </li>
                    </ul>

                </div>
                <a className="navbar-brand" href="#"><FaFacebook /></a>
                <a className="navbar-brand" href="#"><FaTwitter /></a>
                <a className="navbar-brand" href="#"><FaInstagram /></a>
                <a className="navbar-brand" href="#"><FaWhatsapp /></a>
            </div>
        </nav>
    );
}

export default Navbar;
