import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

function Button({ children, classname, href, onClick, px, white }) {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"}`;
  const spanClases = "relative z-10";
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClases}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href}>
      <span className={spanClases}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
}

export default Button;
