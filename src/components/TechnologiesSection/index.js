import TechnologyCard from "../TechnologyCard";
import { TechnologiesSection_ } from "./style";
import nextLogo from "../../assets/nextLogo.svg";
import reactLogo from "../../assets/reactLogo.svg";
import styledLogo from "../../assets/styledLogo.svg";

export default function TechnologiesSection() {
  return (
    <TechnologiesSection_>
      <div id="technologies"></div>
      <h3>Tecnologias</h3>
      <div id="cards">
        <TechnologyCard
          imageSrc={reactLogo}
          technolgy="React"
          alt="React-Logo"
        />
        <TechnologyCard imageSrc={nextLogo} technolgy="Next" alt="Next-Logo" />
        <TechnologyCard
          id="styledCard"
          imageSrc={styledLogo}
          technolgy="styled-components"
          alt="Styled-componentes-logo"
        />
      </div>
    </TechnologiesSection_>
  );
}
