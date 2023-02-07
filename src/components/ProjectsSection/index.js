import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectsSection_ } from "./style";

export default function ProjectsSection() {
  return (
    <ProjectsSection_ id="projects">
      <h3>Projects</h3>
      <div id="projectsCards">
        <ProjectCard
          projectName="Pokedex"
          projectDescription="This project is a Pokedex using PokeAPI. I made this project to study the use of APIs and context."
          repository="https://github.com/PedroRassier/Pokedex"
          deployLink="https://pokedex-pedrorassier.netlify.app"
        />
        <ProjectCard
          projectName="Pokedex"
          projectDescription="This project is a Pokedex using PokeAPI. I made this project to study the use of APIs and context."
          repository="https://github.com/PedroRassier/Pokedex"
          deployLink="https://pokedex-pedrorassier.netlify.app"
        />
        <ProjectCard
          projectName="Pokedex"
          projectDescription="This project is a Pokedex using PokeAPI. I made this project to study the use of APIs and context."
          repository="https://github.com/PedroRassier/Pokedex"
          deployLink="https://pokedex-pedrorassier.netlify.app"
        />
      </div>
    </ProjectsSection_>
  );
}
