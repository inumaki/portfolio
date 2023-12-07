import projects from "../constants/project";
import "../assets/Css/cards.css";
import projectpng from "../assets/projects/epiceats.png";

export const Projects = () => {
  return (
    <>
      <div className="title">Projects.</div>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.src} alt={`Project ${project.id} Image`} />
            <a href={project.link} rel="noreferrer" target="_blank">
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="skills">
                  {project.skills.map((skill, index) => (
                    <div className="skill" key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
