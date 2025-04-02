'use client';

import { useMutation } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

const roles = ["cook", "staff", "bartender", "worker", "cleaner"];

interface Staff {
  name: string;
  email: string;
  contactNumber: string;
  staffPhoto: string;
  role: string;
}

// Assuming the response contains a staff object or a success message
interface StaffResponse {
  staff: Staff;
  message: string; // For example, it could contain a success message or status
}

const addStaffMember = async (staff: Staff): Promise<StaffResponse> => {
  const response = await $axios.post("/api/staff", staff);
  return response.data;
};

export default function AddStaffPage() {
  const router = useRouter();

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      staffPhoto: "",
      role: ""
    },
    onSubmit: (values: Staff) => {
      mutation.mutate(values); // Trigger the mutation on form submit

    }
  });

 

  const mutation = useMutation({
    mutationFn: addStaffMember,
    onSuccess: () => {
      toast.success("Staff added successfully!");
      router.push("/admin/staff"); // Redirect to the staffs page
    },
    onError: (err: unknown) => {
      if (err instanceof Error) {
        toast.error("Failed to add staff.");
        console.error("Error adding staff:", err.message);
      } else {
        toast.error("An unknown error occurred.");
        console.error("Unknown error adding staff:", err);
      }
    },
  });


  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add New Staff Member</h1>
      <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label>Name</Label>
              <Input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter name" />
            </div>
            <div>
              <Label>Email</Label>
              <Input name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter email" />
            </div>
            <div>
              <Label>Contact Number</Label>
              <Input name="contactNumber" value={values.contactNumber} onChange={handleChange} onBlur={handleBlur} placeholder="Enter contact number" />
            </div>
            <div>
              <Label>Photo URL</Label>
              <Input name="staffPhoto" value={values.staffPhoto} onChange={handleChange} onBlur={handleBlur} placeholder="Enter photo URL" />
            </div>
            <div>
              <Label>Role</Label>
              <Select value={values.role} onValueChange={(value) => setFieldValue("role", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="mt-6 w-full bg-blue-600 text-white" disabled={mutation.isPending}>
            {mutation.isPending ? "Adding..." : "Add Staff Member"}
          </Button>
        </form>
      </div>
      {/* Display error if any */}
      {mutation.isError && <p className="mt-4 text-red-500">{(mutation.error instanceof Error ? mutation.error.message : "Unknown error")}</p>}
    </div>
  );
}
