"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/gallery")
  },[]);
  // useState hook to change the image

  return (
    <main className="flex min-h-screen flex-col items-center my-5 p-24 text-xl font-extrabold"></main>
  );
}
