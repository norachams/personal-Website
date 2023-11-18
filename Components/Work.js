import React, { useState } from 'react';

export default function Home() {

    

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(0);

  // List of tab objects
 

  const tabs = [
    {
      title: 'AutoTrader',
      description: <div className="description">
      <p className="title">Data Automation Developer Intern @ AutoTrader</p>
      <p className="date">May 2023 - August 2023 </p>
      <p className="space">.</p>
      <p className="desc"> • Developed over ten Python scripts, utilizing Pandas, Openpyxl, and NumPy, resulting in a 30% reduction in manual data handling time.</p>
      <p className="desc"> • Ensured and maintained data accuracy by implementing data validation procedures, including data cleansing, deduplication, and validation checks, resulting in a 20% reduction in errors.</p>
      <p className="desc"> • Established data pipelines through web scraping techniques, facilitating the extraction and processing of Big Data, contributing to analytical insights for 20+ automakers and 150+ dealerships.</p>
      <p className="desc"> • Spearheaded the adoption of Git, Azure, Jira, and Confluence to streamline project management, enhance documentation practices, and foster team collaboration, leading to a 25% increase in project efficiency and on-time delivery.</p>

      </div> 
    },
    {
      title: 'MLH SRE',
      description: <div className="description">
      <p className="title">Site Reliability Engineering Fellow @ Major League Hacking</p>
      <p className="date">Jan 2023 - May 2023 </p>
      <p className="space">.</p>
      <p className="desc"> • Designed and built a scalable Flask web app that seamlessly integrates with MySQL database services, ensuring robust data management and enhancing overall system reliability.</p>
      <p className="desc"> • Efficiently deployed and managed Unix/Linux servers using DigitalOcean droplets, while implementing automated testing and streamlining deployment with CI/CD tools, resulting in a 25% boost in operational efficiency.</p>
      <p className="desc"> • Leveraged Docker containers and NGINX to deploy applications to testing environments, while also automating SSL certificate generation, ensuring a secure and reliable testing environment.</p>
      <p className="desc"> • Selected out of 4,000 applicants for a highly competitive 12-week curriculum-based learning program, with an acceptance rate of only 2.5%.</p> 
      </div> 
    },
    {
      title: 'MLH SWE',
      description: <div className="description">
      <p className="title">Software Engineering Prep Fellow @ Major League Hacking</p>
      <p className="date">Nov 2022 - Nov 2022 </p>
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
      <p className="desc">• Revamped client websites by utilizing HTML, CSS, and integrated Vue.js to optimize UX, resulting in a 30% increase in user engagement.</p>
      <p className="desc">• Collaborated with the QA team to resolve issues on Jira by identifying and fixing bugs, while also enhancing website accessibility, resulting in a 15% increase in overall website quality.</p>
      <p className="desc">• Worked with developers using Adobe Experience Manager to manage client assets, optimize workflows, and improve delivery processes.</p>
      <p className="desc">• Created and presented a comprehensive branding strategy and website refresh with a diverse team of student interns across various departments for a nonprofit organization, Eat REAL, with the goal of raising $16 million in donations by 2025.</p>
      </div> 
    },
    
    {
      title: 'Laurier Computing Society',
      description:  <div className="description">
      <p className="title">Software Developer @ Laurier Computing Society</p>
      <p className="date">Jan 2022 - May 2022</p>
      <p className="space">.</p>
      <p className="desc">• Launched and developed a Django app, "Mnimi, " incorporating memorization techniques and creating a responsive UI/UX using Figma and CSS.</p>
      <p className="desc">• Implemented SRS algorithm, resulting in a 20% improvement in recall memory, and utilized SQLite for data storage with deployment on Heroku.</p>
      <p className="desc">• Engineered the back-end system to maximize app performance, ensuring accurate Elo calculation, which increased overall algorithm effectiveness.</p>
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
