import React from "react";
import { twMerge } from "tailwind-merge";

export default function Circle({ children, className, ...props }) {
  return <span className={twMerge("h-6 w-6 rounded-full border border-neutral-light-dark-grayish-blue inline-block", className)} {...props}>{children}</span>;
}
