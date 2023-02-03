import ContactButtons from "../ContactButtons";
import { Presentation_ } from "./style";

export default function Presentation() {
  return (
    <Presentation_>
      <div>
        <h1>Pedro Rassier</h1>
        <h2>Desenvolvedor ;</h2>
        <p id="presentationText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam
          dui, scelerisque in vehicula ut, bibendum vitae mauris.
        </p>
      </div>
      <ContactButtons />
    </Presentation_>
  );
}
