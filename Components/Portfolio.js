import React from 'react';
import PortfolioItem from './PortfolioItem';


const portfolio =[
  {
    title: 'DormDirect',
    imgUrl: '/dormdirect.png',
    stack: ['React','TypeScript','Firebase', 'Flask', 'Web Scraping'],
    linkgit: 'https://github.com/norachams/DormDirect',
  },
  {
    title: 'JobJourney',
    imgUrl: '/journey.png',
    stack: ['Flask', 'React','TypeScript','Firebase','RESTful API', 'NLP'],
    linkgit: 'https://github.com/norachams/JobJourney',
  },
  {
    title: 'HawkHacks Portal',
    imgUrl: '/dashboard.png',
    stack: ['TypeScript', 'React', 'Firebase', 'RESTful API'],
    linkgit: 'https://github.com/LaurierHawkHacks/Dashboard',
  },
   {
      title: 'TextBox',
      imgUrl: '/textbox.png',
      stack: ['React', 'JavaScript' ,'CSS'],
      linkgit: 'https://github.com/norachams/Textbox',
      link: 'https://textboxstim.netlify.app/'
   },
    {
      title: 'Mnimi',
      imgUrl: '/django.png',
      stack: ['Django', 'CSS', 'JavaScript', 'Python'],
      linkgit: 'https://github.com/norachams/Mnimi',

  },
  {
      title: 'OpCharge',
      imgUrl: '/oppcharge.png',
      stack: ['Python', 'HTML', 'CSS'],
      linkgit: 'https://github.com/norachams/OpCharge',
   }
]


function Portfolio() {
    return (
     <div className="portfolio-section">
         <h2 className="portfolio-title">Projects</h2>
       <div className="portfolio-box">
          <div className="portfolio-cont">
             {portfolio.map(project => (
                <PortfolioItem className="portfolio-img"
                   imgUrl={project.imgUrl}
                   title={project.title}
                   stack={project.stack}
                   link={project.link}
                   linkgit={project.linkgit}
                />
             ))}
          </div>
       </div>
       </div>
    )
 }
 export default Portfolio;
 



/*
function Portfolio() {
    return (
        <div className="portfolio-section">
        <h2 className="portfolio-title">Portfolio</h2>
        <div className="portfolio-box">
          <div className="portfolio-cont">
            {portfolio.map(project => (
              <div className="portfolio-item" title={project.title}>
                <div
                  className="portfolio-img"
                  style={{ backgroundImage: `url(${project.imgUrl})` }}
                >
                  <div className="portfolio-buttons">
                    <a href={project.link} className="portfolio-button">
                      View
                    </a>
                    <a href={project.linkgit} className="portfolio-button">
                      Code
                    </a>
                  </div>
                </div>
                <h3 className="portfolio-item-title">{project.title}</h3>
                <p className="portfolio-item-stack">{project.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
 }
 
 export default Portfolio;


*/



/*



*/



   
 

