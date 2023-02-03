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
          width={140}
          heigth={140}
        />
        <TechnologyCard
          imageSrc={nextLogo}
          technolgy="Next"
          alt="Next-Logo"
          width={136}
          heigth={136}
        />
        <TechnologyCard
          id="styledCard"
          imageSrc={styledLogo}
          technolgy="styled-components"
          alt="Styled-componentes-logo"
          width={160}
          heigth={160}
        />
      </div>
    </TechnologiesSection_>
  );
}
