import Image from "next/image";
import linkedinIcon from "../../assets/linkedin.svg";
import githubLogo from "../../assets/github.svg";
import { ContactButtons_ } from "./style";

export default function ContactButtons() {
  return (
    <ContactButtons_>
      <a href="https://www.linkedin.com/in/pedro-rassier/" target="_blank">
        <button id="linkedinBtn">
          <Image src={linkedinIcon} />
          <p>LinkedIn</p>
        </button>
      </a>
      <a
        href="https://github.com/PedroRassier?tab=repositories"
        target="_blank"
      >
        <button id="githubBtn">
          <Image src={githubLogo} />
          <p>GitHub</p>
        </button>
      </a>
    </ContactButtons_>
  );
}
