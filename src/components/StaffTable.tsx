import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

// Define the Staff interface to type the data
export interface StaffItem {
  _id: string;
  id?: string;
  name: string;
  email: string;
  contactNumber: string;
  staffPhoto: string;
  role: string;
}

// Convert Google Drive URL to direct image link
const getDirectImageUrl = (url: string) => {
  const match = url.match(/\/d\/([^/]+)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

export default function StaffTable({
  items = [],
  onEdit,
  onDelete
}: {
  items: StaffItem[];
  onEdit: (item: StaffItem) => void;
  onDelete: (id: string) => void;
}) {

  if (!Array.isArray(items)) {
    console.error("Expected 'items' to be an array but received:", items);
    return <p className="text-center text-gray-500">Error: Invalid staff data.</p>;
  }

  if (items.length === 0) {
    return <p className="text-center text-gray-500">No staff members available.</p>;
  }

  return (
    <div className="border rounded-lg overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((staff) => (
            <TableRow key={staff.id ?? staff._id}>
              <TableCell>{staff.name}</TableCell>
              <TableCell>{staff.email}</TableCell>
              <TableCell>{staff.contactNumber}</TableCell>
              <TableCell>
                {staff.staffPhoto ? (
                  <Image
                    src={getDirectImageUrl(staff.staffPhoto)}
                    alt={staff.name}
                    width={50}
                    height={50}
                    className="object-cover rounded"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded" />
                )}
              </TableCell>
              <TableCell>{staff.role}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="icon" onClick={() => onEdit(staff)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => onDelete(staff.id ?? staff._id)}>
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
