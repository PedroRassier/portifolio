import ContactButtons from "../ContactButtons";
import { Presentation_ } from "./style";

export default function Presentation() {
  return (
    <Presentation_>
      <div>
        <h1>Pedro Rassier</h1>
        <h2>Desenvolvedor;</h2>
        <p id="presentationText">
          Bem vindo a minha página! Sou desenvolvedor web e busco oferecer
          sempre o melhor resultado e produto para todos.
        </p>
      </div>
      <ContactButtons />
    </Presentation_>
  );
}
