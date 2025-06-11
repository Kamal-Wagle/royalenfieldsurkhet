// components/AlbumDeleteModal.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Album {
  _id: string;
  albumName: string;
  description: string;
  imagesUrl: string[];
}

type Props = {
  album: Album | null;
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

const AlbumDeleteModal = ({ album, isDeleting, onClose, onDelete }: Props) => {
  return (
    <Dialog open={!!album} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Album</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <strong>{album?.albumName}</strong>?
            <br />
            This will delete the album and all images permanently from Google Drive.
          </DialogDescription>
        </DialogHeader>

        {album?.imagesUrl?.[0] && (
          <Image
            src={convertDriveLinkToImage(album.imagesUrl[0])}
            alt={album.albumName}
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
            {isDeleting ? "Deleting..." : "Delete Album"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AlbumDeleteModal;
