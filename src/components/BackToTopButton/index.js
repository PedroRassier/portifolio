import { ArrowUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { BackToTopButton_ } from "./style";

export default function BackToTopButton() {
  const [iconYPosition, setIconYPosition] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const transform = `translate(0,${iconYPosition}) `;
  const handleHover = () => {
    setIconYPosition(iconYPosition - 10);
  };
  const handleMouseOut = () => {
    setIconYPosition(0);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
        setIconYPosition(0);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showTopBtn && (
        <BackToTopButton_
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseOut}
          onClick={goToTop}
        >
          <ArrowUp size={32} color="#ffffff" transform={transform} />
        </BackToTopButton_>
      )}
    </div>
  );
}
