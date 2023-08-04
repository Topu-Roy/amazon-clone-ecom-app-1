import { HeadlineProps } from "@/types";
import React from "react";

function Headline({ text, className }: HeadlineProps) {
  return <div className={`text-4xl font-bold py-8 ${className}`}>{text}</div>;
}

export default Headline;
