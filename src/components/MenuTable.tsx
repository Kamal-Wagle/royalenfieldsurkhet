import Image from "next/image"; 
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import { MenuItem } from "@/types/menu";

export default function MenuTable({ 
  items = [], 
  onEdit, 
  onDelete 
}: { 
  items: MenuItem[], 
  onEdit: (item: MenuItem) => void, 
  onDelete: (id: string) => void 
}) {
  if (!Array.isArray(items)) {
    console.error("Expected 'items' to be an array but received:", items);
    return <p className="text-center text-gray-500">Error: Invalid menu data.</p>;
  }

  if (items.length === 0) {
    return <p className="text-center text-gray-500">No menu items available.</p>;
  }

  // Debugging: Check for duplicate or missing keys
  const keys = items.map((item, index) => item.id ?? item._id ?? `fallback-key-${index}`);
  const uniqueKeys = new Set(keys);

  if (keys.length !== uniqueKeys.size) {
    console.warn("Duplicate keys detected in menu items!", keys);
  }

  return (
    <div className="border rounded-lg overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={item.id ?? item._id ?? `fallback-key-${index}`}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>
                <Image 
                  src={item.imageUrl} 
                  alt={item.name} 
                  width={50} 
                  height={50}
                  className="object-cover rounded" 
                />
              </TableCell>
              <TableCell className="max-w-xs truncate">{item.description}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                {item.isAvailable === "available" ? (
                  <span className="text-green-600">Available</span>
                ) : (
                  <span className="text-red-500">Unavailable</span>
                )}
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="icon" onClick={() => onEdit(item)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => onDelete(item.id ?? item._id)}>
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
