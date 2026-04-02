import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <a href="/">Koti</a>
                <a href="/projects">Projektit</a>
                <a href="/contact">Yhteydenotto</a>
            </nav>
        </header>
    );
}

export default Navbar;