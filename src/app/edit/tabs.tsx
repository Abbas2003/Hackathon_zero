"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldImage  } from "next-cloudinary";

export function TabsDemo({ src }: { src: string }) {
  
  const CImage =   CldImage as any

  return (
    <Tabs defaultValue="original" className="w-full px-4 py-5">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray Scale</TabsTrigger>
        <TabsTrigger value="oil">Oil Paint</TabsTrigger>
        <TabsTrigger value="vignette">Vignette</TabsTrigger>
      </TabsList>

      {/* Original */}
    <TabsContent value="original">
        <div className="flex gap-7 justify-center py-5">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
          />
        </div>
      </TabsContent>

      {/* Blur */}
      <TabsContent value="blur">
        <div className="flex gap-7 justify-center py-5">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
            effects={[{blur:500}]}
          />
        </div>
      </TabsContent>

      {/* Gray Scale */}
      <TabsContent value="gray">
        <div className="flex gap-7 justify-center py-5">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
            effects={[{grayscale: true}]}
          />
        </div>
      </TabsContent>

      {/* Oil Paint */}
      <TabsContent value="oil">
        <div className="flex gap-7 justify-center py-5">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
            effects={[{oilPaint: true}]}
          />
        </div>
      </TabsContent>

      {/* Vignette */}
      <TabsContent value="vignette">
        <div className="flex gap-7 justify-center py-5">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
          />
          {<CImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Img"
            vignette='60'
          /> }
        </div>
      </TabsContent>
    </Tabs>
  );
}
