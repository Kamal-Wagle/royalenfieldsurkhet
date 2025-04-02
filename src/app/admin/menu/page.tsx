"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import MenuTable from "@/components/MenuTable";
import $axios from "@/lib/axios.instance";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MenuItem } from "@/types/menu";

export default function AdminMenuPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Fetch menu items with correct typing
  const { data, isLoading, isError, error } = useQuery<MenuItem[], Error>({
    queryKey: ["menu-items"],
    queryFn: async (): Promise<MenuItem[]> => {
      const response = await $axios.get("/api/menu");
  
      // Ensure unique keys with proper typing
      const menuItems = response.data.menuItems.map((item: Partial<MenuItem>, index: number) => ({
        ...item,
        id: String(item.id ?? item._id ?? `fallback-key-${index}`), // Ensure string ID
      })) as MenuItem[];
  
      console.log("Menu Item IDs:", menuItems.map(item => item.id)); // Debugging
  
      return menuItems;
    },
  });
  
  

  // ✅ DELETE menu item
  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await $axios.delete(`/api/menu/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu-items"] }); // ✅ Corrected usage
      setIsModalOpen(false); // Close modal after deletion
    },
    onError: (error) => console.error("Error deleting menu item:", error),
  });

  // Show delete confirmation modal
  const handleDelete = (id: string) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  // Confirm delete action
  const confirmDelete = () => {
    if (deleteId) deleteMutation.mutate(deleteId);
  };

  // ✅ EDIT menu item (Redirect to edit page)
  const handleEdit = (item: MenuItem) => {
    router.push(`/admin/menu/edit/${item.id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Menu</h1>
        <Link href="/admin/menu/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </Link>
      </div>

      {/* Handle Loading & Errors */}
      {isLoading ? (
        <p>Loading menu items...</p>
      ) : isError ? (
        <p className="text-red-500">Error fetching menu: {error?.message}</p>
      ) : (
        <MenuTable 
          items={data || []} 
          onEdit={handleEdit} 
          onDelete={handleDelete} // Show modal before deleting
        />
      )}

      {/* Delete Confirmation Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <p>This action cannot be undone. Do you really want to delete this item?</p>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              No
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
