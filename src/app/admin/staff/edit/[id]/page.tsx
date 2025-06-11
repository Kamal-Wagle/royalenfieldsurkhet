"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import Image from "next/image";

// Helper to convert Google Drive view link to direct image preview
const getDriveImageUrl = (url: string) => {
  const match = url.match(/\/d\/(.+?)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

export default function EditStaffPage() {
  const router = useRouter();
  const { id } = useParams();

  const [staff, setStaff] = useState({
    name: "",
    email: "",
    contactNumber: "",
    staffPhoto: "",
    role: "staff",
    gender: "Male",
    employmentType: "Full-time",
    qualifications: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchStaff() {
      try {
        const res = await $axios.get(`/api/staff/${id}`);
        const data = res.data.staff;

        setStaff({
          name: data.name || "",
          email: data.email || "",
          contactNumber: data.contactNumber || "",
          staffPhoto: data.staffPhoto || "",
          role: data.role || "staff",
          gender: data.gender || "Male",
          employmentType: data.employmentType || "Full-time",
          qualifications: (data.qualifications || []).join(", "),
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
      const base64File = file ? await toBase64(file) : null;

      interface StaffPayload {
        name: string;
        email: string;
        contactNumber: string;
        staffPhoto: string;
        role: string;
        gender: string;
        employmentType: string;
        qualifications: string[];
        file?: {
          name: string;
          content: string;
          mimeType: string;
        };
      }

      const payload: StaffPayload = {
        ...staff,
        qualifications: staff.qualifications
          .split(",")
          .map((q) => q.trim())
          .filter(Boolean),
      };

      if (base64File && file) {
        payload.file = {
          name: file.name,
          content: base64File,
          mimeType: file.type,
        };
      }

      await $axios.put(`/api/staff/${id}`, payload);
      toast.success("Staff details updated successfully!");
      router.push("/admin/staff");
    } catch (err) {
      console.error("Error updating staff:", err);
      toast.error("Failed to update staff.");
    }
  };

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve((reader.result as string).split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;

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
              className="mt-1"
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
              className="mt-1"
            />
          </div>

          {/* Contact Number */}
          <div className="col-span-2">
            <Label>Contact Number</Label>
            <Input
              type="tel"
              value={staff.contactNumber}
              onChange={(e) =>
                setStaff({ ...staff, contactNumber: e.target.value })
              }
              placeholder="Enter staff contact number"
              className="mt-1"
            />
          </div>

          {/* Gender */}
          <div className="col-span-1">
            <Label>Gender</Label>
            <Select
              value={staff.gender}
              onValueChange={(value) =>
                setStaff({ ...staff, gender: value })
              }
            >
              <SelectTrigger className="mt-1 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Employment Type */}
          <div className="col-span-1">
            <Label>Employment Type</Label>
            <Select
              value={staff.employmentType}
              onValueChange={(value) =>
                setStaff({ ...staff, employmentType: value })
              }
            >
              <SelectTrigger className="mt-1 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Qualifications */}
          <div className="col-span-2">
            <Label>Qualifications (comma-separated)</Label>
            <Textarea
              value={staff.qualifications}
              onChange={(e) =>
                setStaff({ ...staff, qualifications: e.target.value })
              }
              placeholder="e.g. BSc, MSc, PhD"
              className="mt-1"
            />
          </div>

          {/* Role */}
          <div className="col-span-2">
            <Label>Role</Label>
            <Select
              value={staff.role}
              onValueChange={(value) => setStaff({ ...staff, role: value })}
            >
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
                <SelectItem value="Professer">Professor</SelectItem>
              </SelectContent>
            </Select>
          </div>

        <div>
                  <Image
                    src={getDriveImageUrl(staff.staffPhoto)}
                    alt={staff.name}
                    width={80}
                    height={80}
                className="mt-2 h-32 rounded object-cover"
                  />
                
                  </div>
                
             
          {/* Upload New Photo */}
          <div className="col-span-2">
            <Label>Upload New Staff Photo</Label>
            <Input
              type="file"
              accept="image/*"
              className="mt-1"
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>
        </div>

        {/* Update Button */}
        <Button
          onClick={handleUpdate}
          className="mt-6 w-full bg-blue-600 text-white"
          disabled={loading}
        >
          Update Staff
        </Button>
      </div>
    </div>
  );
}
