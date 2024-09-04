import React from 'react';
import { FiGithub,FiLink } from 'react-icons/fi';


function PortfolioItem({ title, imgUrl, stack = [], link,linkgit }) {
    return (
       <div className="dark:border-white rounded-md overflow-hidden shadow-xl transition duration-500 hover:-translate-y-3 ">
          <img className="w-full h-36 md:h-48 object-cover "
             src={imgUrl}
             alt="portfolio" 
          />
          <div className="w-full p-4">
            {linkgit &&(
               <a href={linkgit} className="">
               <FiGithub className="linkgit"size={23} />
               </a>
             )}
            {link &&(
               <a href={link} className="">
               <FiLink className="link"size={23} />
               </a>
             )}
             <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
         
             {stack && stack.length > 0 && (
                <p className="port-container">
                {stack.map(item => (
                    <span className="items">
                    {item}
                    </span>
                ))}
                </p>
            )}
          </div>
       </div>
    )
 }

 export default PortfolioItem;

/*
function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      <div className="dark:border-white rounded-md overflow-hidden shadow-xl transition duration-500 hover:-translate-y-3 ">
         <img className="w-full h-36 md:h-48 object-cover "
            src={imgUrl}
            alt="portfolio" 
         />
         <div className="w-full p-4">
         <a href={link} className="">
         <FiGithub className="linkgit"size={23} />
         </a>
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
        
            <p className="port-container">
               {stack.map(item => (
                  <span className="items">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </div>
   )
}
*/
