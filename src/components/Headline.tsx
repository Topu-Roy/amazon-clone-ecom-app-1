import { HeadlineProps } from "@/types";
import React from "react";

function Headline({ text }: HeadlineProps) {
  return <div className="text-4xl font-bold py-8">{text}</div>;
}

export default Headline;
