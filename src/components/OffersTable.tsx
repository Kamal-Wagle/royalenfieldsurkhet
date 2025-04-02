import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import { OfferItem } from '@/types/menu';


export default function OffersTable({
  items = [],
  onEdit,
  onDelete
}: {
  items: OfferItem[];
  onEdit: (item: OfferItem) => void;
  onDelete: (id: string) => void;
}) {

  // Ensure that items is an array and handle errors gracefully
  if (!Array.isArray(items)) {
    console.error("Expected 'items' to be an array but received:", items);
    return <p className="text-center text-gray-500">Error: Invalid offer data.</p>;
  }

  if (items.length === 0) {
    return <p className="text-center text-gray-500">No offers available.</p>;
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
          {items.map((item) => {
            const price = isNaN(item.price) ? 0 : item.price;
            const itemId = item.id ?? item._id; // Fallback to _id if id is undefined

            return (
              <TableRow key={itemId}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="object-cover rounded"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-300 rounded" />
                  )}
                </TableCell>
                <TableCell className="max-w-xs truncate">{item.description}</TableCell>
                <TableCell>${price.toFixed(2)}</TableCell>
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
                  <Button variant="ghost" size="icon" onClick={() => onDelete(itemId as string)}>
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
