import React from 'react';
import { FiGithub,FiLink } from 'react-icons/fi';
import { FaRegFolder } from "react-icons/fa";

<FaRegFolder />



function PortfolioItem({ title, stack = [], link,linkgit,description }) {
    return (
       <div className="dark:border-white rounded-md overflow-hidden shadow-xl transition duration-500 hover:-translate-y-3 ">
          <div className="w-full p-4 card-content">
           <div className="card-top">
            <div className="card-left">
               <FaRegFolder className="folderlogo" size={23} />
            </div>
            <div className="card-right">
               {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                  <FiLink size={23} />
                  </a>
               )}
               {linkgit && (
                  <a href={linkgit} target="_blank" rel="noopener noreferrer">
                  <FiGithub size={23} />
                  </a>
               )}
            </div>
            </div>
            
             <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
             <p>{description}</p>
             {stack && stack.length > 0 && (
               <ul className="tech-row">
                  {stack.map(item => (
                  <li className="chip" key={item}>{item}</li>
                  ))}
               </ul>
               )}
          </div>
       </div>
    )
 }

 export default PortfolioItem;


