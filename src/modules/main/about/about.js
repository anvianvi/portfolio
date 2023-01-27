import './about.css';
import { SKILLS } from './listOfSkills';

function About() {

  return (
    <section className='about like-screen-height' id='about'>
      <div className='content-wrapper'>
        <h2 className='h2'>About Me</h2>

        <div className='content-about-wrapper'>
          <div className='summary-wrapper'>
            <h3 className='h3'>Get to know me!</h3>
            <p className='about-content-paragraph'>As a Frontend Web Developer, my main interest is in new technologies and learning the secrets of the industry. I am constantly seeking to participate in various courses, projects and other activities to deepen my common experience and gain technical knowledge. My goal is to advance my skills and be able to back up my decisions and understand the code. I am not afraid to take on challenging tasks in order to achieve my goals, and I am able to think outside the box and work well under pressure and strict time limits.</p>
            <p className='about-content-paragraph'>I have several projects that I have worked on that are available in the Projects section of my portfolio. These projects showcase my abilities as a developer and I am always open to new opportunities where I can contribute, learn and grow. If you have a job opportunity that matches my skills and experience, I would be more than happy to hear from you.</p>
            <p className='about-content-paragraph-last'>I am a highly motivated and skilled Frontend Web Developer who is dedicated to staying up-to-date with the latest technologies and continuously improving my skills. I am comfortable taking on challenging tasks and working under pressure, and I am always open to job opportunities where I can contribute, learn and grow. If you have a job opportunity that matches my skills and experience, please don't hesitate to contact me.</p>
            <a href='#contacts' className='btn'>Contact</a>

          </div>
          <div className='skills-wrapper'>
            <h3 className='h3'>My Skills</h3>
            <div className='skills-box'>
              {SKILLS.map((skill) => (
                <div key={skill.id} className='my-skill'> {skill.name}</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section >
  );
}

export default About;   
