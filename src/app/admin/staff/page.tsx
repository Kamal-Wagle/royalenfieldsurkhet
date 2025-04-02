'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";  
import $axios from "@/lib/axios.instance";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import StaffTable, { StaffItem } from "@/components/StaffTable";
import { AxiosError } from "axios"; // Import AxiosError

// Define the Staff interface to type the data
interface Staff {
  _id: string;
  name: string;
  email: string;
  contactNumber: string;
  staffPhoto: string;
  role: string;
}

export default function AdminStaffPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch staff data using `useQuery` with proper typing
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["staff"],
    queryFn: async () => {
      const response = await $axios.get("/api/staff");
      return response.data.staffMembers || []; // Ensure correct mapping from API response
    },
   
  });

  // DELETE staff member
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await $axios.delete(`/api/staff/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff"] }); // ✅ Corrected usage

      setIsModalOpen(false); // Close modal
    },
    onError: (error: AxiosError) => {
      console.error("Error deleting staff:", error.message);
    },
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

  // EDIT staff (Redirect to edit page)
  const handleEdit = (staff: StaffItem) => {
    router.push(`/admin/staff/edit/${staff._id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Staff</h1>
        <Link href="/admin/staff/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Staff
          </Button>
        </Link>
      </div>

      {/* Handle Loading & Errors */}
      {isLoading ? (
        <p>Loading staff...</p>
      ) : isError ? (
        <p className="text-red-500">Error fetching staff: {error?.message}</p>
      ) : (
        <StaffTable 
          items={data.map((staff:Staff) => ({
            id: staff._id,
            name: staff.name,
            email: staff.email,
            contactNumber: staff.contactNumber,
            staffPhoto: staff.staffPhoto,
            role: staff.role,
          }))} 
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
          <p>This action cannot be undone. Do you really want to delete this staff member?</p>
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
