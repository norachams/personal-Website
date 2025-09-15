import React, { useRef } from "react";
import { FiGithub, FiLink } from "react-icons/fi";


export default function FeaturedProjectsStrip() {
  const items = [
    {
      title: "JobJourney",
      desc: "A job tracker dashboard that automatically tracks job applications. Built with Flask (Python), React + TypeScript, Firebase (auth/storage), Gmail API and Cohere API.",
      href: "https://job-journey-three.vercel.app/", 
      github: "https://github.com/norachams/JobJourney",
      img: "/journey.png",
    },
    {
      title: "Voz",
      desc: "An AI voice chat Assistant web app, where you can talk to it like a real person and revisit old chats. Built with Typescript and Next.js.",
      href: "https://voz-chat.vercel.app/",
      github: "https://github.com/norachams/Voz",
      img: "/voz.png",
    },
    {
      title: "Test Farm - Ingenico",
      desc: "An automated test farm that runs device tests in parallel, with a real-time dashboard for monitoring and control. Built with Flask/Python, Appium, backend APIs, and a React/JavaScript frontend.",
      img: "/testfarm.png",
    },
  ];

  const trackRef = useRef(null);

  return (
    <div className="featured-wrap">
      <div className="featured-row">
        <div className="feat-viewport">
          <div className="feat-track" ref={trackRef}>
            {items.map((it) => (
              <div className="feat-slide" key={it.title}>
                <div className="feat-media">
                  <img className="feature-image" src={it.img} alt={it.title} />
                  <div className="feature-gradient" />
                  <div className="feature-actions">
                    {it.href && (
                      <a
                        href={it.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${it.title} live link`}
                      >
                        <FiLink size={20} />
                      </a>
                    )}
                    {it.github && (
                      <a
                        href={it.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${it.title} GitHub`}
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                  </div>

                  <div className="feature-caption">
                    <h3>{it.title}</h3>
                    <p>{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
