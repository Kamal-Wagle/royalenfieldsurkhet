'use client';

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-hot-toast";

export default function EditOfferPage() {
  const router = useRouter();
  const { id } = useParams();
  const [offer, setOffer] = useState({
    name: "",
    description: "",
    category: "",
    discountPercentage: 0,
    imageUrl: "",
    isAvailable: "available",
    remainingDays: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchOffer() {
      try {
        const res = await $axios.get(`/api/offer/${id}`);
        const data = res.data.offer || res.data;

        setOffer({
          name: data.name || "",
          description: data.description || "",
          category: data.category || "",
          discountPercentage: data.discountPercentage || 0,
          imageUrl: data.imageUrl || "",
          isAvailable: data.isAvailable || "available",
          remainingDays: data.remainingDays || 0,
        });
      } catch (err) {
        console.error("Error fetching offer:", err);
        setError("Failed to fetch offer.");
      } finally {
        setLoading(false);
      }
    }

    fetchOffer();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await $axios.put(`/api/offer/${id}`, offer);
      toast.success("Offer updated successfully!");
      router.push("/admin/offer");
    } catch (err) {
      console.error("Error updating offer:", err);
      toast.error("Failed to update offer.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit Offer</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-6xl">
        <div className="grid grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <Label>Offer Name</Label>
            <Input
              value={offer.name}
              onChange={(e) => setOffer({ ...offer, name: e.target.value })}
              placeholder="Enter offer name"
              className="w-full mt-1"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <Label>Description</Label>
            <Input
              value={offer.description}
              onChange={(e) => setOffer({ ...offer, description: e.target.value })}
              placeholder="Enter offer description"
              className="w-full mt-1"
            />
          </div>


            {/* Category */}
            <div className="col-span-2">
            <Label>Category</Label>
            <Input
              value={offer.category}
              onChange={(e) => setOffer({ ...offer, category: e.target.value })}
              placeholder="Enter offer category"
              className="w-full mt-1"
            />
          </div>

          {/* Discount Percentage */}
          <div>
            <Label>Discount Percentage</Label>
            <Input
              type="number"
              value={offer.discountPercentage}
              onChange={(e) => setOffer({ ...offer, discountPercentage: Number(e.target.value) })}
              placeholder="Enter discount percentage"
              className="w-full mt-1"
            />
          </div>

          {/* Image URL */}
          <div>
            <Label>Offer Image URL</Label>
            <Input
              value={offer.imageUrl}
              onChange={(e) => setOffer({ ...offer, imageUrl: e.target.value })}
              placeholder="Enter image URL"
              className="w-full mt-1"
            />
          </div>

          {/* Remaining Days */}
          <div>
            <Label>Remaining Days</Label>
            <Input
              type="number"
              value={offer.remainingDays}
              onChange={(e) => setOffer({ ...offer, remainingDays: Number(e.target.value) })}
              placeholder="Enter remaining days for offer"
              className="w-full mt-1"
            />
          </div>

          {/* Status */}
          <div>
            <Label>Status</Label>
            <Select
              value={offer.isAvailable}
              onValueChange={(value) => setOffer({ ...offer, isAvailable: value })}
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
          Update Offer
        </Button>
      </div>
    </div>
  );
}
