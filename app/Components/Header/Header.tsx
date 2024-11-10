
import React from "react";
import Link from "next/link";
import "../Header/Header.module.css"; 

const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <div className="logo">
          Afaq Portfolio
        </div>
        <div className="nav-links">
          <Link href="#home" scroll={true} className="nav-link">
            Home
            <span className="underline-effect" />
          </Link>
          <Link href="#about" scroll={true} className="nav-link">
            About
            <span className="underline-effect" />
          </Link>
          <Link href="#contact" scroll={true} className="nav-link">
            Contact
            <span className="underline-effect" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
