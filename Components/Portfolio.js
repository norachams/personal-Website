import React from 'react';
import PortfolioItem from './PortfolioItem';
import FeaturedProjectsStrip from './featuredprojects';


const portfolio =[
  {
      title: 'Levanta',
      stack: ['Python •', 'Github API •', 'Cohere API •', 'Twilio API •', 'Supabase'],
      linkgit: 'https://github.com/norachams/Levanta',
      description: 'A tough-love AI motivator that sends you personalized daily messages and a new LeetCode challenge to help you stay consistent with Leetcode.'
  },
  {
    title: 'Doc Detective',
    stack: ['React •','TypeScript •', 'FastAPI (Python) •', 'Cardinal API'],
    linkgit: 'https://github.com/norachams/DocDiff',
    link: 'https://doc-diff-three.vercel.app/',
    description: 'A student housing finder for the Waterloo area that aggregates rental listings from multiple sources into one convenient platform.'
  },
    {
    title: 'DormDirect',
    stack: ['React •','TypeScript •','Firebase •', 'Python (Flask) •', 'Web Scraping'],
    linkgit: 'https://github.com/norachams/DormDirect',
    description: 'A student housing finder for the Waterloo area that aggregates rental listings from multiple sources into one convenient platform.'
  },
    {
      title: 'TextBox',
      stack: ['React •', 'JavaScript •' ,'HTML/CSS'],
      linkgit: 'https://github.com/norachams/Textbox',
      link: 'https://textboxstim.netlify.app/',
      description: 'A playful web app canvas that gives you total control over textboxes, built using React and JavaScript.'
   },
  {
    title: 'HawkHacks Website & Portal',
    stack: ['TypeScript •', 'React •', 'Firebase'],
    linkgit: 'https://github.com/LaurierHawkHacks/Dashboard',
    link: 'https://hawkhacks.ca/',
    description: 'Allows users to register, view event details, and access resources throughout the HawkHacks hackathon.'
  },
//     {
//       title: 'Mnimi',
//       stack: ['Django •', 'CSS •', 'JavaScript •', 'Python'],
//       linkgit: 'https://github.com/norachams/Mnimi',
//       description: 'A web app that enables users to build study decks and use spaced repetition to learn content.'

//   },
  {
      title: 'OpCharge',
      stack: ['Python •', 'Google Maps API •', 'ML'],
      link: 'https://devpost.com/software/opcharge',
      linkgit: 'https://github.com/norachams/OpCharge',
      description: 'Strategically suggest locations for electric vehicle charging stations in the Windsor area. Won 1st in two different categories and awarded $2,500.'
   }
]


function Portfolio() {
    return (
    <section id="projects" className="section projects">
     <div className="portfolio-section">
         <h2 className="portfolio-title">Projects</h2>
          <FeaturedProjectsStrip/>
       <div className="portfolio-box">
          <div className="portfolio-cont">
             {portfolio.map(project => (
                <PortfolioItem className="portfolio-img"
                   key={project.title} 
                   title={project.title}
                   stack={project.stack}
                   link={project.link}
                   linkgit={project.linkgit}
                   description={project.description}
                />
             ))}
          </div>
       </div>
       </div>
       </section>
    )
 }
 export default Portfolio;
 







   
 

