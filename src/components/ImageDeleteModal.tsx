// components/ImageDeleteModel.tsx
'use client';

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GalleryImage } from "@/types"; // Or define the type here if not shared

type Props = {
  image: GalleryImage | null;
  isDeleting: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const convertDriveLinkToImage = (url: string) => {
  const match = url.match(/\/d\/(.+?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

const ImageDeleteModel = ({ image, isDeleting, onClose, onDelete }: Props) => {
  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this image? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        {image && (
          <Image
            src={convertDriveLinkToImage(image.src)}
            alt={image.category}
            width={500}
            height={300}
            className="w-full h-64 object-cover rounded-md my-4"
          />
        )}

        <DialogFooter className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDeleteModel;
