import './projects.css';
import { PROJECTS } from './listOfProjects';

function Projects() {

  return (
    <section className='projects' id='projects'>
      <div className='projects-wrapper content-wrapper'>
        <h2 className='h2'>Projects</h2>
        {PROJECTS.map((project) => (

          <div className='project-box' key={project.id}>
            <div className='project-img-container'><img src={project.img} alt="screenshot of project main page" className='project-img' /></div>
            <div className='project-box-text'>
              <div className='project-title'>{project.name}</div>
              <div className='project-description'>{project.description}</div>
              <a href={project.deploy} className='btn' target="_blank" rel="noreferrer">Check deploy</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

