'use client';

import React from "react";
import Link from "next/link";
import $axios from "@/lib/axios.instance";
import { useQuery } from "@tanstack/react-query";

interface EventItem {
  _id: string;
  eventName: string;
  eventdescprition: string;
  eventTag: string;
  date: string;
  time: string;
  createdAt: string;
}

const EventPage = () => {
  const { data: events, isLoading, error } = useQuery<EventItem[], Error>({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await $axios.get("/api/event");
      return res.data.eventsList;
    },
  });

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error.message}</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events?.map((event) => (
          <div
            key={event._id}
            className="border rounded-lg shadow p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{event.eventName}</h2>

            <p className="mb-3 text-gray-700 flex-grow">{event.eventdescprition}</p>

            <div className="mb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2">
                {event.eventTag}
              </span>
            </div>

            <div className="mb-2 text-sm text-gray-600">
              <strong>Date:</strong> {event.date}
            </div>

            <div className="mb-3 text-sm text-gray-600">
              <strong>Time:</strong> {event.time}
            </div>

            <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
              <span>Posted on {new Date(event.createdAt).toLocaleDateString()}</span>

              {/* Edit Button */}
              <Link
                href={`/admin/event/edit/${event._id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
