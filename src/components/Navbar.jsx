import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        
        if (targetId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 80; 
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
        setIsOpen(false);
    };

    return (
        <header className="header">
            <nav className="navbar">
               
                <div className={`nav-links ${isOpen ? "active" : ""}`}>
                    <a href="#" onClick={(e) => handleScroll(e, "home")}>Koti</a>
                    <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projektit</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Yhteydenotto</a>
                </div>

                <button className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;