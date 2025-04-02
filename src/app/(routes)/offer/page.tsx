'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import $axios from "@/lib/axios.instance";
import { useQuery } from "@tanstack/react-query";

interface Offer {
  name: string;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  isAvailable: string; // isAvailable is a string now ("available" or "unavailable")
  remainingDays: string; // The remaining days for the offer
}

export default function OffersPage() {
  const [search, setSearch] = useState('');

  // Fetch offers using `useQuery`
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["offers"], // Unique key for the query
    queryFn: async () => {
      const response = await $axios.get("/api/offer"); // GET request to fetch offers
      return response.data.offerList; // Return the fetched data
    },
    
  });

  // Access the offers array from the API response
  const filteredOffers = Array.isArray(data)
    ? data.filter((offer: Offer) =>
        offer.name.toLowerCase().includes(search.toLowerCase())
      )
    : []; // Default to empty array if offers is not an array

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Something went wrong"}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Offers</h2>

      <div className="flex justify-center mb-6">
        <Input
          placeholder="Search offers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredOffers.map((offer, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={offer.imageUrl}
              alt={offer.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{offer.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{offer.description}</p>
              <p className="text-lg font-bold mt-2">Save {offer.discountPercentage}%</p>
              {/* Badge logic based on isAvailable */}
              <Badge variant={offer.isAvailable === 'available' ? 'default' : 'destructive'} className="mt-2">
                {offer.isAvailable === 'available' ? 'Available' : 'Expired'}
              </Badge>
              <p className="mt-2 text-sm text-gray-500">Expires in {offer.remainingDays} days</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
