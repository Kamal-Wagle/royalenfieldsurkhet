"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios"; // Import AxiosError for better error typing

// Define the structure of the response you expect from the API
interface ErrorResponse {
  message?: string; // `message` is optional, so it handles cases where it's not there
}

export default function OtpVerifyPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  // React Query mutation for verifying OTP and resetting password
  const verifyOtpMutation = useMutation({
    mutationFn: async ({ email, otp, newPassword }: { email: string; otp: string; newPassword: string }) => {
      const response = await $axios.post("/api/forgetpassword/varify", { email, otp, newPassword });
      return response.data;
    },
    onSuccess: () => {
      setSuccess("Password reset successfully.");
      setError(""); // Reset error on success
      router.push("/auth/login"); // Redirect to login page after success
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Access the message safely with the correct type
      setError(error.response?.data?.message || "An error occurred.");
      setSuccess(""); // Reset success message on error
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !otp || !newPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Trigger the OTP verification and password reset
    verifyOtpMutation.mutate({ email, otp, newPassword });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            OTP Verification and Password Reset
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Please enter your email, the OTP sent to you, and a new password.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* OTP Input */}
          <div>
            <Label htmlFor="otp" className="sr-only">
              OTP
            </Label>
            <Input
              id="otp"
              name="otp"
              type="text"
              autoComplete="one-time-code"
              required
              placeholder="Enter OTP"
              maxLength={6}
              pattern="\d{6}"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          {/* New Password Input */}
          <div>
            <Label htmlFor="new-password" className="sr-only">
              New Password
            </Label>
            <Input
              id="new-password"
              name="new-password"
              type="password"
              required
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <Button type="submit" className="w-full" disabled={verifyOtpMutation.isPending}>
            {verifyOtpMutation.isPending ? "Verifying..." : "Reset Password"}
          </Button>
        </form>

        <div className="flex justify-center">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
