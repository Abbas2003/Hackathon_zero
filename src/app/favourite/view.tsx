"use client";
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AddTags } from "../gallery/action";
import { useState } from "react";

const View = ({ src, tag, fun }: { src: string, tag: string[], fun: any }) => {
  const [fav, setFav] = useState(tag.includes("favourite"));
  return (
    <div className="relative">
      <CldImage
        width="400"
        height="300"
        src={src}
        alt="Description of my image"
        className="rounded-md"
      />
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          fun(src)
          setFav(!fav)
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <AiFillHeart className="w-7 h-7 cursor-pointer text-red-500" />
        ) : (
          <AiOutlineHeart className="w-7 h-7 cursor-pointer text-white hover:text-red-500 duration-300 " />
        )}
      </div>
    </div>
  );
};

export default View;
