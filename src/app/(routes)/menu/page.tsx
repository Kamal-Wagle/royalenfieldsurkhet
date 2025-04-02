'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import $axios from "@/lib/axios.instance";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// Define the MenuItem interface
interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  isAvailable: string; // isAvailable is a string now ("available" or "unavailable")
}

export default function MenuPage() {
  const [search, setSearch] = useState('');

  // Define the query options
  const queryOptions: UseQueryOptions<MenuItem[], Error> = {
    queryKey: ["menu-items"], // Unique key for the query
    queryFn: async () => {
      const response = await $axios.get("/api/menu"); // GET request to fetch menu items
      return response.data; // Return the fetched data
    },
  };

  // Fetch menu items using `useQuery` with proper type for options
  const { data, isLoading, isError, error } = useQuery(queryOptions);

  // Filter the menu items based on the search input
  const filteredItems: MenuItem[] = Array.isArray(data)
    ? data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : []; // Default to empty array if data is not an array

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Something went wrong"}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Menu</h2>

      <div className="flex justify-center mb-6">
        <Input
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
              <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
              {/* Badge logic based on isAvailable */}
              <Badge variant={item.isAvailable === 'available' ? 'default' : 'destructive'} className="mt-2">
                {item.isAvailable === 'available' ? 'Available' : 'Sold Out'}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
