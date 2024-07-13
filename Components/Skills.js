
import { FaJava, FaPython, FaReact, FaNodeJs,FaHtml5, FaCss3, FaGitAlt, FaGithub, FaJs, FaVuejs } from 'react-icons/fa';
import { SiC, SiBootstrap, SiFlask,SiHeroku, SiDjango,SiPowerapps,SiPandas, SiPowerautomate, SiTypescript, SiEclipseide,SiJira, SiVisualstudiocode,SiTailwindcss,SiFigma, SiMysql,SiMongodb} from "react-icons/si";

export default function Home() {
    return (
        <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container">
          <div className="skill-box">
            <FaPython className="skill-icon" size={48} />
            <p className="skill-name">Python</p>
          </div>
          <div className="skill-box">
            <SiTypescript className="skill-icon"size={48} />
            <p className="skill-name">TypeScript</p>
          </div>
          <div className="skill-box">
            <FaReact className="skill-icon" size={48} />
            <p className="skill-name">React</p>
          </div>
          <div className="skill-box">
            <FaJs className="skill-icon" size={48} />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill-box">
            <SiC className="skill-icon" size={48} />
            <p className="skill-name">C</p>
          </div>
          <div className="skill-box">
            <SiFlask className="skill-icon" size={48} />
            <p className="skill-name">Flask</p>
          </div>
          <div className="skill-box">
            <FaNodeJs className="skill-icon" size={48} />
            <p className="skill-name">NodeJs</p>
          </div>
          <div className="skill-box">
            <FaJava className="skill-icon"size={48} />
            <p className="skill-name">Java</p>
          </div>
          <div className="skill-box">
            <FaVuejs className="skill-icon" size={48} />
            <p className="skill-name">Vuejs</p>
          </div>
          <div className="skill-box">
            <SiPandas className="skill-icon" size={48} />
            <p className="skill-name">Pandas</p>
          </div>
          <div className="skill-box">
            <SiTailwindcss className="skill-icon" size={48} />
            <p className="skill-name">Tailwindcss</p>
          </div>
          <div className="skill-box">
            <SiMongodb className="skill-icon" size={48} />
            <p className="skill-name">Mongodb</p>
          </div>
          <div className="skill-box">
            <SiMysql className="skill-icon" size={48} />
            <p className="skill-name">Mysql</p>
          </div>
          <div className="skill-box">
            <SiDjango className="skill-icon" size={48} />
            <p className="skill-name">Django</p>
          </div>
          <div className="skill-box">
            <FaGitAlt className="skill-icon" size={48} />
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-box">
            <FaGithub className="skill-icon" size={48} />
            <p className="skill-name">GitHub</p>
          </div>
          <div className="skill-box">
            <SiVisualstudiocode className="skill-icon" size={48} />
            <p className="skill-name">VScode</p>
          </div>
          <div className="skill-box">
            <SiHeroku className="skill-icon" size={48} />
            <p className="skill-name">Heroku</p>
          </div>
          <div className="skill-box">
            <SiJira className="skill-icon" size={48} />
            <p className="skill-name">Jira</p>
          </div>
          <div className="skill-box">
            <SiFigma className="skill-icon" size={48} />
            <p className="skill-name">Figma</p>
          </div>
        </div>
      </div>
    )
  }
