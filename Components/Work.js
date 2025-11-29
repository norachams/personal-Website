import React, { useState } from 'react';

export default function Home() {

  const [activeTab, setActiveTab] = useState(0);


  const tabs = [
    {
      title: 'Ingenico',
      description:  <div className="description">
      <p className="title">Software Engineer Intern @ Ingenico</p>
      <p className="date">Sep 2025 - Dec 2025</p>
      <p className="desc">• Engineered a test farm using Flask, Python and Appium, reducing time by 40% through automated resource allocation.</p>
      <p className="desc">• Scaled the test farm infrastructure to support 24 devices simultaneously by integrating backend APIs for dynamic testing.</p>
      <p className="desc">• Developed a real-time dashboard in React and JavaScript to efficiently monitor and manage 50+ devices in the test farm.</p>
      <p className="desc">• Implemented automated CI/CD pipelines using Jenkins and Docker to deploy and test Android-based payment terminals.</p>
      </div> 
    },
    {
      title: 'Fidelity',
      description:  <div className="description">
      <p className="title">Automation Developer Intern @ Fidelity Investments</p>
      <p className="date">Jan 2024 - Apr 2024</p>
      <p className="desc">•  Developed file-processing workflow algorithms in Power Automate with JSON parsing, saving 1.5 hours per cycle</p>
      <p className="desc">• Engineered Power BI solution for daily updates delivering real-time insights, saving 1250 hours yearly via automated emails</p>
      <p className="desc">• Led full project lifecycles, demonstrating project management, clear communication, and delivering impactful solutions</p>
      </div> 
    },

    {
      title: 'AutoTrader',
      description: <div className="description">
      <p className="title">Data Automation Developer Intern @ AutoTrader</p>
      <p className="date">May 2023 - August 2023 </p>
      <p className="desc">• Automated workflows with Python scripts using Pandas, OpenPyXL, and NumPy, saving 25 hours of manual work monthly</p>
      <p className="desc">• Enhanced data accuracy through validation checks, deduplication, and data cleansing, achieving a 20% reduction in errors</p>
      <p className="desc">• Built scalable pipelines with web scraping to process Big Data, providing insights for 20 automakers and 150 dealerships</p>
      </div> 
    },
    {
      title: 'MLH SRE',
      description: <div className="description">
      <p className="title">Site Reliability Engineering Fellow @ Major League Hacking</p>
      <p className="date">Jan 2023 - May 2023 </p>
      <p className="desc">• Architected a scalable Flask web app integrating MySQL services to enhance data management and system reliability</p>
      <p className="desc">• Deployed and managed Unix/Linux servers on DigitalOcean, automating testing and streamlining CI/CD processes</p>
      <p className="desc">• Achieved 25% increase in deployment speed and reduced downtime with optimized workflows and automated solutions</p>
      <p className="desc">• Selected out of 4,000 applicants for a highly competitive 12-week curriculum-based learning program, with an acceptance rate of 2.5%.</p> 
      </div> 
    },
    
    {
      title: 'Klick Health',
      description: <div className="description">
      <p className="title">Web developer Intern @ Klick Health</p>
      <p className="date">May 2022 - August 2022</p>
      <p className="desc">• Optimized user experience and reduced bounce rates by 25% through responsive design using React, JavaScript, & CSS</p>
      <p className="desc">• Collaborated with the QA team to resolve issues on Jira by identifying and fixing bugs, while also enhancing website accessibility, resulting in a 15% increase in overall website quality.</p>
      <p className="desc">• Redesigned client websites by improving components and responsiveness, leading to 15% increase in user engagement</p>
      </div> 
    }

  ];
  
  return (
    <section id="experience" className="section experience">
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
    </section>
  );
}
