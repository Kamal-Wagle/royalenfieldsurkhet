"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import $axios from "@/lib/axios.instance";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Define a type for the error
  interface CustomError {
    response?: {
      data?: {
        message?: string;
      };
    };
  }

  const mutation = useMutation({
    mutationKey: ["login-admin"],
    mutationFn: async (values: { email: string; password: string }) => {
      return await $axios.post("/api/auth/login", values);
    },
    onSuccess: () => {
      router.push("/admin"); // Navigate to the /admin page
    },
    onError: () => {
     
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

   // Access the properties from the mutation object
   const { mutate, isPending, isError, error } = mutation;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/auth/forgetpassword"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
               {/* Display error if any */}
      {isError && (
        <p className="mt-4 text-red-500">
          {(error as CustomError)?.response?.data?.message || "An error occurred."}
        </p>
      )}
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;