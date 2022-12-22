import './about.css';
import { SKILLS } from './listOfSkills';

function About() {

  return (
    <section className='about' id='about'>
      <div className='about-wrapper content-wrapper'>
        <h2 className='h2'>About Me</h2>

        <div className='content-about-wrapper'>
          <div className='summary-wrapper'>
            <h3 className='h3'>Some about me</h3>
            <p className='about-content-paragraph'>Check out some of my work in the Projects section. And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text</p>
            <p className='about-content-paragraph'>And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more textAnd some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text And some more text </p>
            <p className='about-content-paragraph-last'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. </p>
            <a href='#contact' className='btn'>Contact</a>

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
