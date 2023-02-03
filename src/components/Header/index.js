import Link from "next/link";
import { Header_ } from "./style";

export default function Header() {
  return (
    <Header_>
      <Link href="#home" className="link">
        Home
      </Link>
      <Link href="#about" className="link">
        About
      </Link>
      <Link href="#projects" className="link">
        Projects
      </Link>
    </Header_>
  );
}
