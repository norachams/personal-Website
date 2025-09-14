import React, { useState } from "react";

export default function Home() {
  const [catSrc, setCatSrc] = useState("/sleepingcat.png");

  return (
    <div className="banner">
      <div className="banner-text">
        <h5>Hi, my name is</h5> 
        <h1 className="banner-name">Nora Chamseddin.</h1>
        <h1 className="banner-desc">I build things with code.</h1>
        <h5 className="banner-cof">Feel free to poke around the room I drew!</h5>
        <a className="banner-button"  href="mailto:nchamseddin@gmail.com"  target="_blank" >Say Hello</a>
      </div>
       <div className="room">
        <img src="/room.png" alt="Nora's cozy dev room" className="room-img" />    
        <a
          href="#projects"
          aria-label="Projects"
          className="hotspot app"
          style={{ left: "33.5%", top: "34.3%" }}  
        >
          <img src="/projects.png" alt="" />
        </a>
        <a
          href="#experience"
          aria-label="Experience"
          className="hotspot app"
          style={{ left: "26.5%", top: "36.9%" }}  
        >
          <img src="/jobs.png" alt="" />
        </a>
        <a
          href="#about"
          aria-label="About"
          className="hotspot app"
          style={{ left: "19.5%", top: "39.5%" }} 
        >
          <img src="/about.png" alt="" />
        </a>
        <a
          href="/Resume-request.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="hotspot book"
          style={{ left: "66.4%", top: "27.5%" }}  
        >
          <img src="/book.png" alt="" />
        </a>
         <a
          href="#"
          aria-label="Caramella"
          className="hotspot cat"
          style={{ left: "45.4%", top: "83.5%" }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setCatSrc("/cat.png");
          }}
        >
          <img src={catSrc} alt="" />
        </a>
      </div>
    </div>
    
  );
}
