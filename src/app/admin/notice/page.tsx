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
import NoticeTable from "@/components/NoticeTable";

// Define Notice type
interface Notice {
  _id: string;
  noticeTitle: string;
  link: string;
  fileId: string;
  mimeType: string;
  uploadedAt: string;
}

export default function AdminNoticePage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all notices
  const { data, isLoading, isError, error } = useQuery<Notice[], Error>({
    queryKey: ["notice"],
    queryFn: async () => {
      const response = await $axios.get("/api/notice");
      return response.data.notices; // Make sure your API returns { results: [...] }
    },
  });

  // Mutation to delete notice
  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await $axios.delete(`/api/notice/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notice"] });
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
  const handleEdit = (notice: Notice) => {
    router.push(`/admin/notice/edit/${notice._id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Notices</h1>
        <Link href="/admin/notice/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Notice
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <p>Loading notices...</p>
      ) : isError ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <NoticeTable
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
          <p>This will permanently delete the notice. Are you sure?</p>
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
