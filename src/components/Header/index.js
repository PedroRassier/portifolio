import Link from "next/link";
import { Header_ } from "./style";

export default function Header() {
  return (
    <Header_>
      <Link href="#about" className="link">
        About
      </Link>
      <Link href="#technologies" className="link">
        Technologies
      </Link>
      <Link href="#projects" className="link">
        Projects
      </Link>
    </Header_>
  );
}
