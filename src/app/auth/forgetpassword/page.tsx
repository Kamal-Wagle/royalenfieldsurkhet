"use client"
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import $axios from "@/lib/axios.instance";
import Link from "next/link";
import { AxiosError } from "axios";

// Define the structure of the response you expect from the API
interface ErrorResponse {
  message?: string; // `message` is optional, so it handles cases where it's not there
}

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  // React Query mutation for sending OTP
  const sendOtpMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await $axios.post("/api/forgetpassword", { email });
      return response.data;
    },
    onSuccess: () => {
      setSuccess("OTP sent successfully. Check your email.");
      setError(""); // Reset error on success

      // Redirect to the verification page
      router.push("/auth/forgetpassword/verify");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Access the message safely with the correct type
      setError(error.response?.data?.message || "An error occurred.");
      setSuccess(""); // Reset success message on error
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Trigger the OTP request
    sendOtpMutation.mutate(email);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
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

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <Button
            type="submit"
            className="w-full"
            disabled={sendOtpMutation.isPending}
        >
          {sendOtpMutation.isPending ? "Sending OTP..." : "Send OTP"}
          </Button>
        </form>

        <div className="flex justify-center">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
