"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

interface CategoryListProps {
  refresh: boolean;
}

const CategoryList = ({ refresh }: CategoryListProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/newcategory");
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to fetch categories");
        } else {
          setCategories(data.categories || []);
        }
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [refresh]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <Loader2 className="animate-spin" />
        <span className="ml-2">Loading categories...</span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 p-4 text-center">{error}</p>;
  }

  return (
    <Card className="max-w-xl mx-auto p-6 mt-10">
      <h2 className="text-xl font-semibold mb-4">Available Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <Badge key={index} variant="default">
              {cat}
            </Badge>
          ))
        ) : (
          <p className="text-gray-500">No categories added yet.</p>
        )}
      </div>
    </Card>
  );
};

export default CategoryList;
