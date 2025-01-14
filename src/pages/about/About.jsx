import React from "react";
import "./about.css";

const About = () => {
  return (
    <main className="content color__text">
      <h2>What is Open Source?</h2>
      <p>
        Open Source is a programming philosophy that work and ownership of
        projects should be decentralized and community-based. Open Source
        Software (OSS) is software which is publically visible and modifiable.
        Some OSS projects that you may know or have used include Mozilla
        Firefox, Linux, Audacity, and Wordpress.
      </p>

      <h2>What do we do?</h2>
      <p>
        Oberlin Open Source Club (ObieSource) is a club in which students can
        interact with Oberlin-specific open source projects. Anyone can join,
        and anyone can contribute to our projects. To see what we're working on,
        checkout our <a href="https://github.com/ObieSource">GitHub Page</a>,
        and explore our website to learn more about our club!
      </p>
    </main>
  );
};

export default About;
