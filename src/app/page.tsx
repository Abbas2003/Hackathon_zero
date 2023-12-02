"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import View from "./gallery/view";


interface UploadImage {
  event: "success";
  info: {
    public_id: string;
  }
}

export default function Home() {
  // useState hook to change the image
  const [imgId, setImgId] = useState("")

  return (
    <main className="flex min-h-screen flex-col items-center my-5 p-24 text-xl font-extrabold">
      
      {/* Upload btn */}
      <CldUploadButton uploadPreset="m7lpw3gk" onUpload={(result)=>{
       let response = result as UploadImage
       setImgId(response.info.public_id)
      }}/>
      
    </main>
  );
}
