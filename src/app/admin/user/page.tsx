"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import $axios from "@/lib/axios.instance";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import UserTable from "@/components/UserTable";

// Define a proper type for the staff member
interface StaffMember {
  _id: string;
  name: string;
  email: string;
  contactNumber: string;
  staffPhoto: string;
  role: string;
}

export default function AdminUserPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch staff data
  const { data, isLoading, isError, error: fetchError } = useQuery({
    queryKey: ["staff"],
    queryFn: async () => {
      const response = await $axios.get("/api/user");
      return response.data.userMembers || [];
    },
  });

  // Send OTP API call
  const sendOtp = async () => {
    if (!deleteId) {
      setErrorMessage("User ID is missing.");
      return;
    }

    try {
      await $axios.post(`/api/user/request-delete-otp`, { id: deleteId });
      setOtpModalOpen(true); // Open OTP input modal
      setIsModalOpen(false); // Close delete confirmation modal
      setErrorMessage(""); // Reset error
    } catch {
      setErrorMessage("Error sending OTP. Please try again.");
    }
  };

  // Verify OTP and delete user
  const verifyOtpAndDelete = async () => {
    if (!deleteId || !otp) {
      setErrorMessage("User ID and OTP are required.");
      return;
    }

    try {
      await $axios.post(`/api/user/verify-delete-otp`, { id: deleteId, otp });

      // ✅ Close OTP modal and reset states after successful deletion
      setOtpModalOpen(false);
      setOtp("");
      setDeleteId(null);
      setErrorMessage("");

      // ✅ Refresh user list
      queryClient.invalidateQueries({ queryKey: ["staff"] }); // ✅ Corrected usage


      // ✅ Redirect to the same page (optional)
      router.push("/admin/user");
    } catch {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  // Show delete confirmation modal
  const handleDelete = (id: string) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage User</h1>
        <Link href="/admin/user/new">
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Add New Admin
          </Button>
        </Link>
      </div>

      {/* Handle Loading & Errors */}
      {isLoading ? (
        <p>Loading staff...</p>
      ) : isError ? (
        <p className="text-red-500">Error fetching staff: {fetchError instanceof Error ? fetchError.message : 'Unknown error'}</p>
      ) : (
        <UserTable
          items={data.map((staff: StaffMember) => ({
            id: staff._id,
            name: staff.name,
            email: staff.email,
            contactNumber: staff.contactNumber,
            staffPhoto: staff.staffPhoto,
            role: staff.role,
          }))}
          onDelete={(id) => handleDelete(id)}
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
            <Button variant="destructive" onClick={sendOtp}>
              Yes, Send OTP
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* OTP Input Modal */}
      <Dialog open={otpModalOpen} onOpenChange={setOtpModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter OTP to Confirm Deletion</DialogTitle>
          </DialogHeader>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="p-2 border border-gray-300 rounded w-full"
          />
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOtpModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={verifyOtpAndDelete}>
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}