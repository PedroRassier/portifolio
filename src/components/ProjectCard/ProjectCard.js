import Image from "next/image";
import { GlobeHemisphereWest } from "phosphor-react";
import githubLogo from "../../assets/gitHubWithoutBG.svg";
import { ProjectCard_ } from "./style";

export default function ProjectCard(props) {
  return (
    <ProjectCard_>
      <Image src={props.src} id="projectImage" />
      <h4>{props.projectName}</h4>
      <p>{props.projectDescription}</p>
      <div>
        <p>Repositório e Deploy: </p>
        <a href={props.repository} target="_blank">
          <button id="repositoryGitHubLogo">
            <Image src={githubLogo} width={50} height={50} />
          </button>
        </a>
        <a href={props.deployLink} target="_blank">
          <button id="deployGlobeLogo">
            <GlobeHemisphereWest size={48} color="#ffffff" />
          </button>
        </a>
      </div>
    </ProjectCard_>
  );
}
