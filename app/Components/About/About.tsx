// AboutPage.tsx
import React from "react";
import "./aboutStyles.css"; // Import your custom CSS file

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiKZwhw_gm2y9gDbO77w-8w-kUMMNY2LaDw&s" // Your image URL
            alt="Developer at work"
            className="image"
          />
        </div>
        <div className="about-text">
          <h1 className="about-title">About Me</h1>
          <p className="about-paragraph">
            I am a web developer passionate about creating interactive, modern
            websites with a focus on user experience and functionality.
          </p>
          <p className="about-paragraph">
            I love exploring new technologies and applying them in my projects
            to enhance user experience and functionality. My goal is to
            continuously improve my skills and create visually appealing and
            highly functional web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
