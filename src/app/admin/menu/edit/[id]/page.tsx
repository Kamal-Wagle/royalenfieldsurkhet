'use client';

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-hot-toast";

export default function EditMenuPage() {
  const router = useRouter();
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
    imageUrl: "",
    isAvailable: "available",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchItem() {
      try {
        const res = await $axios.get(`/api/menu/${id}`);
        const data = res.data.menuItem || res.data;

        setMenuItem({
          name: data.name || "",
          description: data.description || "",
          category: data.category || "",
          price: data.price || 0,
          imageUrl: data.imageUrl || "",
          isAvailable: data.isAvailable || "available",
        });
      } catch (err) {
        console.error("Error fetching menu item:", err);
        setError("Failed to fetch menu item.");
      } finally {
        setLoading(false);
      }
    }

    fetchItem();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await $axios.put(`/api/menu/${id}`, menuItem);
      toast.success("Menu item updated successfully!");
      router.push("/admin/menu");
    } catch (err) {
      console.error("Error updating menu item:", err);
      toast.error("Failed to update menu item.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit Menu Item</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-6xl">
        <div className="grid grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <Label>Name</Label>
            <Input
              value={menuItem.name}
              onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })}
              placeholder="Enter item name"
              className="w-full mt-1"
            />
          </div>

          {/* Category */}
          <div>
            <Label>Category</Label>
            <Input
              value={menuItem.category}
              onChange={(e) => setMenuItem({ ...menuItem, category: e.target.value })}
              placeholder="Enter category"
              className="w-full mt-1"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <Label>Description</Label>
            <Input
              value={menuItem.description}
              onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })}
              placeholder="Enter description"
              className="w-full mt-1"
            />
          </div>

          {/* Price */}
          <div>
            <Label>Price</Label>
            <Input
              type="number"
              value={menuItem.price}
              onChange={(e) => setMenuItem({ ...menuItem, price: Number(e.target.value) })}
              placeholder="Enter price"
              className="w-full mt-1"
            />
          </div>

          {/* Image URL */}
          <div>
            <Label>Image URL</Label>
            <Input
              value={menuItem.imageUrl}
              onChange={(e) => setMenuItem({ ...menuItem, imageUrl: e.target.value })}
              placeholder="Enter image URL"
              className="w-full mt-1"
            />
          </div>

          {/* Status */}
          <div>
            <Label>Status</Label>
            <Select
              value={menuItem.isAvailable}
              onValueChange={(value) => setMenuItem({ ...menuItem, isAvailable: value })}
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="unavailable">Unavailable</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Update Button */}
        <Button onClick={handleUpdate} className="mt-6 w-full bg-blue-600 text-white">
          Update Item
        </Button>
      </div>
    </div>
  );
}
