import Image from "next/image";
import githubLogo from "../../assets/github.svg";
import globeLogo from "../../assets/Globe.svg";
import { ProjectCard_ } from "./style";

export default function ProjectCard(props) {
  return (
    <ProjectCard_>
      <Image src={props.src} width={365} height={254} />
      <h4>{props.projectName}</h4>
      <p>{props.projectDescription}</p>
      <div>
        <p>Repositório e Deploy</p>
        <a href={props.repository} target="_blank">
          <button id="repositoryGitHubLogo">
            <Image src={githubLogo} width={72} height={72} />
          </button>
        </a>
        <a href={props.deployLink} target="_blank">
          <button id="deployGlobeLogo">
            <Image src={globeLogo} width={72} height={72} />
          </button>
        </a>
      </div>
    </ProjectCard_>
  );
}
