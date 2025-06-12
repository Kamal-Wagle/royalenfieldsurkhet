"use client"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import $axios from "@/lib/axios.instance";
import { useQuery } from "@tanstack/react-query"

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  fileId: string;
  originalName: string;
  createdAt: string;
}

const NewsSection = () => {
  const { data: news, isLoading, error } = useQuery<NewsItem[], Error>({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await $axios.get("/api/news");
      return response.data.news;
    },
  });

  if (isLoading) return <div>Loading news...</div>;
  if (error) return <div>Error loading news: {error.message}</div>;
  if (!news || news.length === 0) return <div>No news available.</div>;

  return (
    <div className="container mx-auto px-4 py-20 space-y-16">
      {/* Featured News */}
      {news[0] && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src={`https://drive.google.com/uc?export=view&id=${news[0].fileId}`}
            alt={news[0].originalName}
            width={400}
            height={400}
            className="w-full h-[450px] object-cover rounded-xl"
          />
          <div className="space-y-6">
            <span className="uppercase text-sm font-medium text-gray-500">Featured</span>
            <h2 className="text-3xl font-bold text-gray-900">{news[0].title}</h2>
            <p className="text-gray-600">{news[0].description}</p>
            <Link
              href={`/news/${news[0]._id}`}
              className="inline-flex items-center text-red-600 hover:text-red-800 font-medium text-lg group-hover:underline transition-all"
            >
              Read Full Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      )}

      {/* Other News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.slice(1, 11).map((item) => (
          <Card key={item._id} className="group transition-shadow hover:shadow-lg">
            <Image
              src={`https://drive.google.com/uc?export=view&id=${item.fileId}`}
              alt={item.originalName}
              width={600}
              height={400}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <p className="text-xs text-gray-500 mb-1">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">
                {item.description.slice(0, 100)}...
              </p>
              <Link
                href={`/news/${item._id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More <ArrowRight className="inline h-4 w-4 ml-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
