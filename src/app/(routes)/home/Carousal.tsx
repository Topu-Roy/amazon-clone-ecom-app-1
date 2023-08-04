"use client";
import { ImageType } from "@/types";
import Image from "next/image";
import React from "react";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Carousal() {
  // function Carousal({ images }: ImageType) {

  const images: string[] = [
    "/carousal (5).jpg",
    "/carousal (4).jpg",
    "/carousal (2).jpg",
    "/carousal (1).jpg",
    "/carousal (3).jpg",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(index);
  }, [index]);

  const prev = () =>
    setIndex((index) => (index == 0 ? images.length - 1 : index - 1));

  const next = () =>
    setIndex((index) => (index == images.length - 1 ? 0 : index + 1));

  return (
    <div className="w-[45%] relative rounded-3xl">
      <div
        className="flex flex-row justify-center items-center aspect-square overflow-x-auto transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <Image alt="image" src={images[0]} fill objectFit="cover" />
        <Image alt="image" src={images[1]} fill objectFit="cover" />
        <Image alt="image" src={images[2]} fill objectFit="cover" />
        <Image alt="image" src={images[3]} fill objectFit="cover" />
        <Image alt="image" src={images[4]} fill objectFit="cover" />
      </div>

      {/* Left & Right Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="flex items-center justify-center bg-white/60 p-3 rounded-full hover:bg-white/75 shadow-md"
        >
          <AiOutlineLeft size={30} color={"#3b3d3b"} />
        </button>
        <button
          onClick={next}
          className="flex items-center justify-center bg-white/60 p-3 rounded-full hover:bg-white/75 shadow-md"
        >
          <AiOutlineRight size={30} color={"#3b3d3b"} />
        </button>
      </div>
    </div>
  );
}

export default Carousal;

// * From Home Page
// ! not working

// import Carousal from "./Carousal";

// const images: string[] = [
//   "/carousal (5).jpg",
//   "/carousal (4).jpg",
//   "/carousal (2).jpg",
//   "/carousal (1).jpg",
//   "/carousal (3).jpg",
// ];

/* <Carousal images={images} /> */
