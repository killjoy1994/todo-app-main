import React, { useContext } from "react";
import moonLogo from "../assets/images/icon-moon.svg";
import sunLogo from "../assets/images/icon-sun.svg";
import { ThemeContext } from "../App";

export default function Header() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <header className="items-start flex justify-between">
      <h1 className="text-neutral-light-very-light-gray text-2xl tracking-[8px] font-semibold">TODO</h1>
      <button onClick={toggleTheme} className="">
        <img src={theme == "dark" ? sunLogo : moonLogo} alt="" />
      </button>
    </header>
  );
}
