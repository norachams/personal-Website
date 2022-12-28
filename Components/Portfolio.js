import React from 'react';
import PortfolioItem from './PortfolioItem';


const portfolio =[
  {
     title: 'Mnimi',
     imgUrl: '/django.png',
     stack: ['Django', 'CSS', 'JavaScript'],
     link: 'https://github.com/norachams/Mnimi',

  },
  {
      title: 'NFTgram',
      imgUrl: '/nftgram.png',
      stack: ['JavaScript', 'Solidity', 'Tailwind'],
      link: 'https://github.com/norachams/NFTgram',
  
  },
  {
     title: 'HangMan',
     imgUrl: '/hangman.png',
     stack: ['Python'],
     link: 'https://github.com/norachams/hangman-game',
  },
  {
      title: 'OpCharge',
      imgUrl: '/oppcharge.png',
      stack: ['Python', 'HTML', 'CSS'],
      link: 'https://github.com/norachams/OpCharge',
   },
   {
      title: 'The Weather Center',
      imgUrl: '/project-mlh.png',
      stack: ['React', 'CSS' ,'HTML'],
      link: 'https://github.com/norachams/prep-project-22.NOV.PREP.2',
   },
   {
      title: 'MLH Portfolio',
      imgUrl: '/portfolio-mlh.png',
      stack: ['JavaScript', 'SCSS' ,'HTML'],
      link: 'https://github.com/norachams/prep-portfolio-22.NOV.PREP.2',
   },
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



   
 

