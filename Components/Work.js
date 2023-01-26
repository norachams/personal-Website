import React, { useState } from 'react';

export default function Home() {

    

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(0);

  // List of tab objects
 

  const tabs = [
    {
      title: 'MLH SRE',
      description: <div className="description">
      <p className="title">Site Reliability Engineering Fellow @ Major League Hacking</p>
      <p className="date">Jan 2023 - Present </p>
      <p className="space">.</p>
      <p className="desc"> • Completing a structured curriculum-based learning covering core Site Reliability Engineering topics.</p>
      <p className="desc"> • Gaining and using practical skills from Linux Foundation Training and Certifications LFS201.</p>
      <p className="desc"> • Utilizing skills gained from LFS201 to efficiently administer, configure and upgrade Linux systems.</p>
      <p className="desc"> • Selected 1 of 25 out of 4,000 applicants for a 12-week program with an acceptance rate of 2.5%</p>

      </div> 
    },
    {
      title: 'MLH SWE',
      description: <div className="description">
      <p className="title">Software Engineering Prep Fellow @ Major League Hacking</p>
      <p className="date">Nov 2022 </p>
      <p className="space">.</p>
      <p className="desc"> • Designed, developed and tested a portfolio website and React web app for our MLH pod team</p>
      <p className="desc"> • Selected from over 700 applicants to experiment with new technologies by collaborating in groups.</p>
      <p className="desc"> • Utilized React.js and APIs to graphically display the weather of a selected city and suggest activities.</p>
      <p className="desc"> • Reviewed and tested over 30 pull requests and provided assistance by organizing group meetings.</p>
      </div> 
    },
    {
      title: 'Klick Health',
      description: <div className="description">
      <p className="title">Web developer Intern @ Klick Health</p>
      <p className="date">May 2022 - August 2022</p>
      <p className="space">.</p>
      <p className="desc">• Developed, designed, and authored websites by collaborating with senior web developers to meet client needs using Adobe Experience Manager, HTML, CSS and JS.</p>
      <p className="desc">• Assisted QA team with resolving tasks on Jira by ensuring quality and accessibility of websites before launch and improving overall user experience.</p>
      <p className="desc">• Created and presented a campaign, branding strategy and a website refresh for a nonprofit organization, Eat REAL, to help raise $16M by 2025.</p>
      </div> 
    },

    
    {
      title: 'Laurier Computing Society',
      description:  <div className="description">
      <p className="title">Software Developer @ Laurier Computing Society</p>
      <p className="date">Jan 2022 - May 2022</p>
      <p className="space">.</p>
      <p className="desc">• Launched, designed, and implemented, a Django web app that uses the SRS algorithm to help users memorize more efectively by collaborating with an agile led team of 4 student developers over 4 months.</p>
      <p className="desc">• Computed the back-end system by ensuring accurate Elo calculation for the SRS algorithm using Python increasing web app efectiveness by 5%.</p>
      </div> 
    },
   

    {
        title: 'Enactus Laurier',
        description: <div className="description">
        <p className="title">Web Designer @ Enactus Laurier</p>
        <p className="date">March 2022 – August 2022</p>
        <p className="space">.</p>
        <p className="desc">• Worked with a team to design a website for a nonprofit organization, with the goal of raising awareness about the project and driving donations.</p>
        <p className="desc">• Utilized design skills and knowledge of user experience (UX) principles to create a visually appealing and user-friendly website.</p>
        </div> 
    },
    {
        title: 'Graphic Designer',
        description: <div className="description">
        <p className="title">Graphic Designer Freelancer @ UpWork</p>
        <p className="date">Dec 2020 – March 2021</p>
        <p className="space">.</p>
        <p className="desc">• Worked closely with clients to understand their design and business vision.</p>
        <p className="desc">• Utilized Adobe Photoshop to create a 230 page planner, exporting press-ready PDF files for high quality final product.</p>
        <p className="desc">• Demonstrated strong design skills and attention to detail in creating visually appealing and functional products for clients.</p>
        </div> 
    }

  ];
  return (
    <div className="title-and-tabs">
      <h2 className="about-me-title">Experience</h2>
      <div className="tab-system">
      
        <div className="tab-titles">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
       
        </div>
        <div className="tab-description">
          {tabs[activeTab].description}
        </div>
      </div>
    </div>
  );
}
