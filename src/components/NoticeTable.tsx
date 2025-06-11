import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

export interface Result {
  _id: string;
  noticeTitle: string;
  noticeDescription?: string;
  noticeCategory?: string;
  fileId: string;
  link: string;
  mimeType: string;
  uploadedAt: string;
}

export default function NoticeTable({
  items = [],
  onEdit,
  onDelete,
}: {
  items: Result[];
  onEdit: (item: Result) => void;
  onDelete: (id: string) => void;
}) {
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  if (!Array.isArray(items)) {
    console.error("Expected 'items' to be an array but received:", items);
    return <p className="text-center text-gray-500">Error: Invalid result data.</p>;
  }

  if (items.length === 0) {
    return <p className="text-center text-gray-500">No results available.</p>;
  }

  const getDrivePreviewUrl = (fileId: string) =>
    `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <>
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Uploaded At</TableHead>
              <TableHead>View File</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.noticeTitle}</TableCell>
                <TableCell>{item.noticeDescription || '-'}</TableCell>
                <TableCell>{item.noticeCategory || '-'}</TableCell>
                <TableCell>{item.mimeType}</TableCell>
                <TableCell>{new Date(item.uploadedAt).toLocaleString()}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (selectedFileId === item.fileId) {
                        setSelectedFileId(null);
                        setSelectedTitle(null);
                      } else {
                        setSelectedFileId(item.fileId);
                        setSelectedTitle(item.noticeTitle);
                      }
                    }}
                  >
                    {selectedFileId === item.fileId ? "Hide" : "View"}
                  </Button>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => onEdit(item)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(item._id)}
                  >
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedFileId && (
        <div className="mt-4 border rounded p-4 h-[600px] w-full">
          <h3 className="mb-2 font-semibold">{selectedTitle}</h3>
          <iframe
            src={getDrivePreviewUrl(selectedFileId)}
            width="100%"
            height="100%"
            frameBorder="0"
            title={selectedTitle ?? "File Viewer"}
            allow="autoplay"
          />
        </div>
      )}
    </>
  );
}
