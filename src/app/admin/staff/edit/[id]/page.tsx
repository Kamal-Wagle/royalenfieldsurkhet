"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-hot-toast";

export default function EditStaffPage() {
  const router = useRouter();
  const { id } = useParams();
  
  const [staff, setStaff] = useState({
    name: "",
    email: "",
    contactNumber: "",
    staffPhoto: "",
    role: "staff",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchStaff() {
      try {
        const res = await $axios.get(`/api/staff/${id}`);
        const data = res.data.staff || res.data; // Adjust API response mapping

        setStaff({
          name: data.name || "",
          email: data.email || "",
          contactNumber: data.contactNumber || "",
          staffPhoto: data.staffPhoto || "",
          role: data.role || "staff",
        });
      } catch (err) {
        console.error("Error fetching staff:", err);
        setError("Failed to fetch staff details.");
      } finally {
        setLoading(false);
      }
    }

    fetchStaff();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await $axios.put(`/api/staff/${id}`, staff);
      toast.success("Staff details updated successfully!");
      router.push("/admin/staff");
    } catch (err) {
      console.error("Error updating staff:", err);
      toast.error("Failed to update staff.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit Staff</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl">
        <div className="grid grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-2">
            <Label>Staff Name</Label>
            <Input
              value={staff.name}
              onChange={(e) => setStaff({ ...staff, name: e.target.value })}
              placeholder="Enter staff name"
              className="w-full mt-1"
            />
          </div>

          {/* Email */}
          <div className="col-span-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={staff.email}
              onChange={(e) => setStaff({ ...staff, email: e.target.value })}
              placeholder="Enter staff email"
              className="w-full mt-1"
            />
          </div>

          {/* Contact Number */}
          <div className="col-span-2">
            <Label>Contact Number</Label>
            <Input
              type="tel"
              value={staff.contactNumber}
              onChange={(e) => setStaff({ ...staff, contactNumber: e.target.value })}
              placeholder="Enter staff contact number"
              className="w-full mt-1"
            />
          </div>

          {/* Staff Photo URL */}
          <div className="col-span-2">
            <Label>Staff Photo URL</Label>
            <Input
              value={staff.staffPhoto}
              onChange={(e) => setStaff({ ...staff, staffPhoto: e.target.value })}
              placeholder="Enter staff photo URL"
              className="w-full mt-1"
            />
          </div>

          {/* Role */}
          <div className="col-span-2">
            <Label>Role</Label>
            <Select
              value={staff.role}
              onValueChange={(value) => setStaff({ ...staff, role: value })}
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Update Button */}
        <Button onClick={handleUpdate} className="mt-6 w-full bg-blue-600 text-white">
          Update Staff
        </Button>
      </div>
    </div>
  );
}
