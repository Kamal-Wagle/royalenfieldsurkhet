"use client";




import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import $axios from "@/lib/axios.instance";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import OffersTable from "@/components/OffersTable";
import { Offer, OfferItem } from "@/types/menu"; // Import both types

export default function AdminOffersPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch offers using `useQuery`
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["offers"], // Declare query key
    queryFn: async () => {
      const response = await $axios.get("/api/offer");
      return response.data.offerList || []; // Ensure correct mapping from API response
    },
  });

  // DELETE offer
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await $axios.delete(`/api/offer/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["offers"] }); // ✅ Corrected usage
      setIsModalOpen(false); // Close modal after deletion
    },
    onError: (error) => console.error("Error deleting offer:", error),
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

  // EDIT offer (Redirect to edit page)
  const handleEdit = (item: OfferItem) => {
    router.push(`/admin/offer/edit/${item._id}`); // Use _id since it's guaranteed to be a string
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Offers</h1>
        <Link href="/admin/offer/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Offer
          </Button>
        </Link>
      </div>

      {/* Handle Loading & Errors */}
      {isLoading ? (
        <p>Loading offers...</p>
      ) : isError ? (
        <p className="text-red-500">Error fetching offers: {error instanceof Error ? error.message : 'Unknown error'}</p>
      ) : (
        <OffersTable
          items={data.map((offer: Offer) => ({
            _id: offer._id, // Ensure _id is passed correctly
            id: offer._id, // Use the same id as _id
            name: offer.name,
            imageUrl: offer.imageUrl,
            category: offer.category,
            price: offer.price,
            description: offer.description,
            isAvailable: offer.isAvailable ? "available" : "unavailable",
          }))}
          onEdit={handleEdit} // Pass the handleEdit correctly typed
          onDelete={handleDelete} // Show modal before deleting
        />
      )}

      {/* Delete Confirmation Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <p>This action cannot be undone. Do you really want to delete this offer?</p>
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
