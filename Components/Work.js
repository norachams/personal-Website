import React, { useState } from 'react';

export default function Home() {

    

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(0);

  // List of tab objects

  
  const tabs = [
    {
      title: 'MLH Prep',
      description: <div className="description">
      <p className="title">SWE Prep Fellow @ Major League Hacking</p>
      <p className="date">Nov 2022 </p>
      <p className="space">.</p>
      <p className="desc"> • Built and designed a portfolio website for our MLH pod team and a React app that graphically displays the weather of a selected city and suggests activities based on the weather by using APIs and collaborating and arranging pair programming sessions with teammates.</p>
      <p className="desc"> • Reviewed and tested over 30 pull requests and provided assistance to teammates by organizing group meetings and attending daily stand-ups.</p>
      <p className="desc"> • Selected as a fellow from over 700 applicants worldwide for a 3-week program to experiment with new technologies by collaborating in small groups and building projects.</p>
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
