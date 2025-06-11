"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Loader2, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface DeleteCategoryProps {
  refresh: boolean;
  onRefresh: () => void;
}

const DeleteCategory = ({ refresh, onRefresh }: DeleteCategoryProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/newcategory");
      const data = await res.json();

      if (res.ok) {
        setCategories(data.categories || []);
      } else {
        toast.error(data.error || "Failed to fetch categories");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedCategory) return;

    try {
      setDeleting(selectedCategory);
      const res = await fetch("/api/newcategory", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageCategory: selectedCategory }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Category deleted");
        setCategories(data.categories);
        setSelectedCategory(null);
        onRefresh(); // Trigger refresh in parent component
      } else {
        toast.error(data.error || "Failed to delete");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [refresh]); // Add refresh to dependency array

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Delete a Category</h2>

      {loading ? (
        <div className="text-center">Loading categories...</div>
      ) : categories.length === 0 ? (
        <div className="text-gray-500">No categories found.</div>
      ) : (
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li
              key={cat}
              className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg"
            >
              <span>{cat}</span>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    onClick={() => setSelectedCategory(cat)}
                    disabled={deleting === cat}
                  >
                    {deleting === cat ? (
                      <Loader2 className="animate-spin h-4 w-4" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Delete &quot;{selectedCategory}&quot;?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. Are you sure you want to
                      delete this category?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setSelectedCategory(null)}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                      {deleting === selectedCategory ? (
                        <Loader2 className="animate-spin h-4 w-4 mr-2" />
                      ) : (
                        "Delete"
                      )}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeleteCategory;
