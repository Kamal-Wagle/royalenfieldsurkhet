'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image'; // Import the Image component from Next.js

const images = [
  { src: "https://picsum.photos/id/1011/800/600" },
  { src: "https://picsum.photos/id/1012/800/600" },
  { src: "https://res.cloudinary.com/dl9zyguda/image/upload/f_auto,q_auto/cld-sample" },
  { src: "https://picsum.photos/id/1014/800/600" },
  { src: "https://picsum.photos/id/1015/800/600" },
  { src: "https://picsum.photos/id/1016/800/600" },
  { src: "https://picsum.photos/id/1017/800/600" },
  { src: "https://picsum.photos/id/1018/800/600" },
  { src: "https://picsum.photos/id/1019/800/600" },
  { src: "https://picsum.photos/id/1020/800/600" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenImage = () => {
    if (selectedImage) {
      window.open(selectedImage, "_blank");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card
                className="overflow-hidden cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0 h-40">
                  <Image
                    src={image.src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={800} // Set width for optimization
                    height={600} // Set height for optimization
                  />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="">
              <DialogTitle>Image Preview</DialogTitle>
              <Image
                src={selectedImage!}
                alt="Selected"
                className="w-full h-auto rounded-lg mb-4"
                width={800} // Set width for optimization
                height={600} // Set height for optimization
              />
              <div className="flex gap-7">
                <Button onClick={handleOpenImage} className="w-full">
                  Open Image in New Tab
                </Button>
                <Button className="w-full">
                  Edit Url
                </Button>
                <Button className="w-full">
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
