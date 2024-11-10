// HomePage.tsx
"use client";
import AboutPage from "./Components/About/About";
import ContactPage from "./Components/Contact/Contact";import "./globals.css"; // Import your custom CSS

const HomePage: React.FC = () => {
  return (
    <>
      <div className="home-container" id="home">
        <main className="home-main">
          <div className="text-section">
            <h1 className="main-heading">
              Welcome to <span className="highlighted-text">AFAQ UL ISLAM</span> Portfolio
            </h1>
            <p className="description">
              I'm a passionate Frontend Developer creating modern, responsive web applications using the latest technologies.
            </p>
            <div className="button-wrapper">
              <button className="button">Download CV</button>
            </div>
          </div>

          <div className="image-section">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiKZwhw_gm2y9gDbO77w-8w-kUMMNY2LaDw&s"
              alt="Developer at work"
              className="developer-image"
            />
          </div>
        </main>
      </div>

      <div id="about">
        <AboutPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
};

export default HomePage;
