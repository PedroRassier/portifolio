import Image from "next/image";
import { TechnologyCard_ } from "./style";

export default function TechnologyCard(props) {
  return (
    <TechnologyCard_>
      <Image src={props.imageSrc} alt={props.alt} />
      <p>{props.technolgy}</p>
    </TechnologyCard_>
  );
}
