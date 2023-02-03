import Image from "next/image";
import linkedinIcon from "../../assets/linkedin.svg";
import githubLogo from "../../assets/github.svg";
import Link from "next/link";
import { ContactButtons_ } from "./style";

export default function ContactButtons() {
  return (
    <ContactButtons_>
      <a href="https://www.linkedin.com/in/pedro-rassier/" target="_blank">
        <button id="linkedinBtn">
          <Image src={linkedinIcon} width={72} height={72} />
          <p>LinkedIn</p>
        </button>
      </a>
      <a
        href="https://github.com/PedroRassier?tab=repositories"
        target="_blank"
      >
        <button id="githubBtn">
          <Image src={githubLogo} width={72} height={72} />
          <p>GitHub</p>
        </button>
      </a>
    </ContactButtons_>
  );
}
