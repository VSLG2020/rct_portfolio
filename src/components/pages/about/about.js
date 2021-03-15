import React from 'react';
import '../about/about.css';
import profPic from "../../../assets/images/profilepic.jpg";


function About() {
  return (
    <section>
      <div>
      <img src={profPic} style={{ width: "100%" }} alt="profPic" />
      <div className="aboutMe">
        <h1 id="about">Who am I?</h1>
      </div>
     </div>
    </section >
    
  );
}

export default About;