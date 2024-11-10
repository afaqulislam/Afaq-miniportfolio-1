// Footer.tsx
import React from "react";
import "./Footer.css"; // Import the custom CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} <span> Afaq Ul Islam</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
