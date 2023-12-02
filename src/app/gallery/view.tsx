"use client";
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart, AiFillHeart, AiFillFolderAdd } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { AddTags } from "./action";
import { useState } from "react";
import Link from "next/link";
import AlbumDialogue from "./albumDialogue";

const View = ({ src, tag }: { src: string; tag: string[] }) => {
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

      {/* Heart icon for Fav */}
      <div
        className="absolute top-1 right-1"
        onClick={() => {
          setFav(!fav);
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <AiFillHeart className="w-7 h-7 cursor-pointer text-red-500" />
        ) : (
          <AiOutlineHeart className="w-7 h-7 cursor-pointer text-white hover:text-red-500 duration-300 " />
        )}
      </div>

      {/* Edit icon for EditImg */}
      <div className="absolute top-1 left-1">
        <Link href={`/edit?publicId=${src}`}>
          <CiEdit className="w-7 h-7 cursor-pointer text-white hover:text-red-500 duration-300 " />
        </Link>
      </div>

      {/* Add to Album */}
      <div className="absolute bottom-1 left-1">
          <AlbumDialogue imageData={src}/>
      </div>
    </div>
  );
};

export default View;
