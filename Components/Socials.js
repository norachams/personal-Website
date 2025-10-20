import { SiGithub, SiLinkedin, SiGmail,SiMedium} from "react-icons/si";

export default function Home() {
    return (
        <ul className="social-icons">
        <li className="social-icon github-icon">
        <a href="https://github.com/norachams">
        <SiGithub className="social-icon" size={25} />
         </a>
        </li>
        <li className="social-icon linkedin-icon">
        <a href="https://www.linkedin.com/in/nora-chamseddin-13b8a5207/">
        <SiLinkedin className="social-icon" size={25} />
         </a>
        </li>
        <li className="social-icon email-icon">

        <a href="mailto:nchamseddin@gmail.com">
        <SiGmail className="social-icon" size={25} />
         </a>

        <a href="https://medium.com/@nchamseddin">
        <SiMedium className="social-icon" size={25} />
         </a>
        
        </li>
      </ul>
      );
  }