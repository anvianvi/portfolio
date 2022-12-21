import './projects.css';
import { PROJECTS } from './listOfProjects';

function Projects() {

  return (
    <section className='projects' id='projects'>
      <div className='projects-wrapper content-wrapper'>
        <h2 className='h2'>Projects</h2>
        {PROJECTS.map((project) => (
          <div className='project-box'>
            <div className='project-box-img'><img src={project.img} alt="screenshot of project main page" /></div>
            <div className='project-box-text'>
              <div>{project.name}</div>
              <div>{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

