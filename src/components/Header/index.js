import Link from "next/link";
import { Header_ } from "./style";

export default function Header() {
  return (
    <Header_>
      <Link href="#about" className="link" prefetch={false}>
        About
      </Link>
      <Link href="#technologies" className="link" prefetch={false}>
        Technologies
      </Link>
      <Link href="#projects" className="link" prefetch={false}>
        Projects
      </Link>
    </Header_>
  );
}
