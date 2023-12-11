import projects from "../constants/project";
import "../assets/Css/cards.css";
import epiceats from "../assets/projects/epiceats.png";
import todo from "../assets/projects/todo.png";
import vote from "../assets/projects/vote.png";
import yelpcamp from "../assets/projects/yelpcamp.png";

export const Projects = () => {

  const importImages = [epiceats, vote, yelpcamp, todo];
  return (
    <>
      <div className="title">Projects.</div>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={importImages[index]} alt={`Project ${project.id} Image`} />
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
