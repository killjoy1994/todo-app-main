import React from "react";
import moonLogo from "../assets/images/icon-moon.svg";

export default function Header() {
  return (
    <header className="items-start flex justify-between">
      <h1 className="text-neutral-light-very-light-gray text-2xl tracking-[8px] font-semibold">TODO</h1>
      <button className="">
        <img src={moonLogo} alt="" />
      </button>
    </header>
  );
}
