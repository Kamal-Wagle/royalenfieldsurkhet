'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import $axios from "@/lib/axios.instance";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BikeTable from "@/components/BikeTable";

// Define Bike type to match BikeTable's expected interface
interface Bike {
  _id: string;
  name: string;
  price: string;
  year: string;
  mileage: string;
  brand: string;
  fuelType: string;
  fileId: string;
  features: string[];
  createdAt: string;
}



export default function AdminBikePage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all bikes
  const { data, isLoading, isError, error } = useQuery<Bike[], Error>({
    queryKey: ["bike"],
    queryFn: async () => {
      const response = await $axios.get("/api/bike");
      return response.data.bikes;
    },
  });

  // Mutation to delete bike
  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await $axios.delete(`/api/bike/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bike"] });
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error("Delete error:", error);
    },
  });

  // Delete trigger
  const handleDelete = (id: string) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  // Confirm delete
  const confirmDelete = () => {
    if (deleteId) deleteMutation.mutate(deleteId);
  };

  // Edit trigger
  const handleEdit = (bike: Bike) => {
    router.push(`/admin/bike/edit/${bike._id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Bikes</h1>
        <Link href="/admin/bike/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Bike
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <p>Loading bikes...</p>
      ) : isError ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <BikeTable 
          items={data || []} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>This will permanently delete the bike record. Are you sure?</p>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
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
