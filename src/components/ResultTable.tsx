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
import { Pencil, Trash, Users, Trophy } from "lucide-react";

// Updated Result interface matching your schema fields
export interface Result {
  _id: string;
  resultTitle: string;
  examType: string;
  class: string;
  statistics: string;
  session: string;
  totalStudents?: number;
  passPercentage?: number;
  fileId: string;
  link: string;
  originalName: string;
  mimeType: string;
  createdAt: string;
  updatedAt: string;
}

export default function ResultTable({
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

  // Google Drive preview URL helper
  const getDrivePreviewUrl = (fileId: string) =>
    `https://drive.google.com/file/d/${fileId}/preview`;

  // Helper function to get color based on pass percentage
  const getPassPercentageColor = (percentage?: number) => {
    if (!percentage) return "text-gray-500";
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-blue-600";
    if (percentage >= 70) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <>
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Exam Type</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Statistics</TableHead>
              <TableHead>Session</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Uploaded At</TableHead>
              <TableHead>View File</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.resultTitle}</TableCell>
                <TableCell>{item.examType}</TableCell>
                <TableCell>{item.class}</TableCell>
                <TableCell>{item.statistics}</TableCell>
                <TableCell>{item.session}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    {item.totalStudents && (
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-1 text-gray-500" />
                        <span>{item.totalStudents} Students</span>
                      </div>
                    )}
                    {item.passPercentage && (
                      <div className="flex items-center text-sm">
                        <Trophy className="w-4 h-4 mr-1 text-gray-500" />
                        <span className={getPassPercentageColor(item.passPercentage)}>
                          {item.passPercentage}% Pass
                        </span>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>{new Date(item.createdAt).toLocaleString()}</TableCell>
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
                        setSelectedTitle(item.resultTitle);
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
