"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import CategoryList from "@/components/CategoryList";
import DeleteCategory from "@/components/Deleteocategory";

const NewCategoryPage = () => {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false); // Used to trigger refresh

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!category.trim()) {
      toast.error("Category name is required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/newcategory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageCategory: category.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to add category");
      } else {
        toast.success("Category added successfully!");
        setCategory("");
        setRefresh((prev) => !prev); // trigger refresh in child components
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-2">Add New Category</h1>
        {loading && <p className="text-blue-600 mb-4">Uploading...</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="category">Category Name</Label>
            <Input
              id="category"
              placeholder="e.g., Event 2025"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={loading}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Category"}
          </Button>
        </form>
      </div>

      {/* Pass refresh trigger to child components */}
      <CategoryList refresh={refresh} />
      <DeleteCategory refresh={refresh} onRefresh={() => setRefresh((prev) => !prev)} />
    </>
  );
};

export default NewCategoryPage;
