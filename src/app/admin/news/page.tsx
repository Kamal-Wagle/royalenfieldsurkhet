'use client';

import React from "react";
import Link from "next/link";
import $axios from "@/lib/axios.instance";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  tag: string;
  link: string;
  originalName: string;
  mimeType: string;
  createdAt: string;
}

const convertDriveLinkToImage = (url: string) => {
  const match = url.match(/\/d\/(.+?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

const isImage = (mimeType: string) => mimeType.startsWith("image/");
const isPdf = (mimeType: string) => mimeType === "application/pdf";

const NewsPage = () => {
  const { data: news, isLoading, error } = useQuery<NewsItem[], Error>({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await $axios.get("/api/news");
      return res.data.news;
    },
  });

  if (isLoading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news: {error.message}</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">School News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news?.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg shadow p-4 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

            <p className="mb-3 text-gray-700 flex-grow">{item.description}</p>

            {isImage(item.mimeType) && (
              <Image
                src={convertDriveLinkToImage(item.link)}
                alt={item.originalName}
                width={400}
                height={250}
                className="rounded-md mb-3 object-cover"
              />
            )}

            {isPdf(item.mimeType) && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mb-3"
              >
                View PDF: {item.originalName}
              </a>
            )}

            {!isImage(item.mimeType) && !isPdf(item.mimeType) && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mb-3"
              >
                Download: {item.originalName}
              </a>
            )}

            <div className="mt-auto flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2">
                  {item.tag}
                </span>
                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>

              {/* Edit Button */}
              <Link
                href={`/admin/news/edit/${item._id}`}
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

export default NewsPage;
