/*import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is connecting people.</p>
            </div>
            <p className="mid">
            Campus Connect is an innovative app designed to enhance the social and academic life of students, 
            faculty, and staff on campus. It provides a seamless platform to foster connections, 
            and create a vibrant campus community.Campus Connect is more than just an app; it's your gateway to a richer, more connected campus experience.
            Join now and be a part of the thriving campus community!
            </p>

           
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;*/

import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const About = () => {
  const scrollToClubs = () => {
    scroll.scrollTo(document.getElementById("clubs").offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is connecting people.</p>
            </div>
            <p className="mid">
              Campus Connect is an innovative app designed to enhance the social and academic life of students,
              faculty, and staff on campus. It provides a seamless platform to foster connections,
              and create a vibrant campus community. Campus Connect is more than just an app; it's your gateway to a richer, more connected campus experience.
              Join now and be a part of the thriving campus community!
            </p>
            <div className="button-container">
              <button className="explore-button" onClick={scrollToClubs}>
                Explore Clubs! <span>&rarr;</span>
              </button>
            </div>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

