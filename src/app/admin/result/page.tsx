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
import ResultTable from "@/components/ResultTable";

// Updated Result type matching schema
interface Result {
  _id: string;
  resultTitle: string;
  examType: string;
  class: string;
  statistics: string;
  session: string;
  fileId: string;
  link: string;
  originalName: string;
  mimeType: string;
  createdAt: string;
  updatedAt: string;
}

export default function AdminResultPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError, error } = useQuery<Result[], Error>({
    queryKey: ["results"],
    queryFn: async () => {
      const response = await $axios.get("/api/result");
      return response.data.results;
    },
  });

  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await $axios.delete(`/api/result/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["results"] });
      setIsModalOpen(false);
    },
    onError: (error) => console.error("Error deleting result:", error),
  });

  const handleDelete = (id: string) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (deleteId) deleteMutation.mutate(deleteId);
  };

  const handleEdit = (result: Result) => {
    router.push(`/admin/result/edit/${result._id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Results</h1>
        <Link href="/admin/result/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Result
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <p>Loading results...</p>
      ) : isError ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <ResultTable
          items={data || []}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <p>This will permanently delete the result.</p>
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
