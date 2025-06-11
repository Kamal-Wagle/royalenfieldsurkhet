"use client";
import Image from "next/image";
import $axios from "@/lib/axios.instance";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  fileId: string;
  originalName: string;
  createdAt: string;
}

const NewsDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const {
    data: news,
  } = useQuery<NewsItem>({
    queryKey: ["news", id],
    queryFn: async () => {
      const response = await $axios.get(`/api/news/${id}`);
      return response.data.news;
    },
    enabled: !!id, // prevent running until `id` is available
  });

  return (
    <div className="container mx-auto px-4 py-20 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">{news?.title}</h1>
      <p className="text-sm text-gray-500">
        Published on{" "}
        {news?.createdAt
          ? new Date(news.createdAt).toLocaleDateString()
          : "Loading..."}
      </p>

      {news?.fileId && news?.originalName && (
        <Image
          src={`https://drive.google.com/uc?export=view&id=${news.fileId}`}
          alt={news.originalName}
          width={1000}
          height={600}
          className="w-full max-h-[500px] object-cover rounded-lg"
        />
      )}

      <p className="text-lg text-gray-700 whitespace-pre-line">
        {news?.description}
      </p>
    </div>
  );
};

export default NewsDetailPage;
