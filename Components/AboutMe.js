export default function Home() {
    return (
<section id="about" className="section about-me"> 
  <div className="about-me">
  <div className="about-me-content flex flex-col justify-between bg-transparent m-auto">
    <h2 className="about-me-title ">About</h2>
    <div className="about-me-text-and-image flex bg-transparent">
      <div className="about-me-text">
          <p> I’m a fourth-year double degree student studying Computer Science and Business Administration. I’ve completed four internships focused on development and automation, most recently at <a href="https://ingenico.com/en" >Ingenico</a>, <a href="https://www.fidelity.ca/en/" >Fidelity</a>, and <a href="https://www.autotrader.ca/" >AutoTrader</a>. 
          In my free time, I love building fun, practical projects that help me learn and solve real problems I run into.</p>
          <p>
            I’m also passionate about giving back. I am currently mentoring as a web developer with{" "}
            <a
              href="https://www.paper-airplanes.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paper Airplanes
            </a>{" "}
            and volunteer at events with{" "}
            <a
              href="https://cs.uwaterloo.ca/wics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Women in Computer Science (WiCS)
            </a>.
          </p>

            <div className="tech-list-wrapper">
            <p className="tech-list-title">Some of the tools and technologies I’ve been using lately include:</p>
            <ul className="tech-list">
              <li>Python</li>
              <li>React.js</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
            <p> Outside of tech, I’m an avid rock climber and puzzle enthusiast. You’ll often find me doing jigsaw puzzles or playing games like Wordle, Worldle, and Travle. I also love exploring new places and cultures through travel.</p>
          </div>
          </div>
          <div className="image-background">
        <img className="about-me-image" src="/me.jpg" alt="About Me Image" />
      </div>
    </div>
  </div>
</div>
</section>
)
}


