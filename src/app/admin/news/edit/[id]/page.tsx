'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import $axios from '@/lib/axios.instance';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // assuming you have this component
import { toast } from 'react-hot-toast';

export default function EditNewsPage() {
  const router = useRouter();
  const { id } = useParams();

  const [news, setNews] = useState({
    title: '',
    description: '',
    tag: '',
    fileId: '',
    link: '',
    originalName: '',
    mimeType: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Your Google Drive folder ID from env
  const folderId = process.env.NEXT_PUBLIC_GDRIVE_NEWS_FOLDER_ID;

  useEffect(() => {
    if (!id) return;

    async function fetchNews() {
      try {
        const res = await $axios.get(`/api/news/${id}`);
        const data = res.data.news;

        setNews({
          title: data.title || '',
          description: data.description || '',
          tag: data.tag || '',
          fileId: data.fileId || '',
          link: data.link || '',
          originalName: data.originalName || '',
          mimeType: data.mimeType || '',
        });
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to fetch news.');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [id]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpdate = async () => {
    try {
      let filePayload = null;

      if (selectedFile) {
        // Convert file to base64 string
        const arrayBuffer = await selectedFile.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString('base64');

        filePayload = {
          name: selectedFile.name,
          content: base64,
          mimeType: selectedFile.type,
        };
      }

      await $axios.put(`/api/news/${id}`, {
        title: news.title,
        description: news.description,
        tag: news.tag,
        folderId,
        file: filePayload,
      });

      toast.success('News updated successfully!');
      router.push('/admin/news');
    } catch (err) {
      console.error('Error updating news:', err);
      toast.error('Failed to update news.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit News</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl">
        <div className="grid grid-cols-1 gap-6">
          {/* Title */}
          <div>
            <Label>Title</Label>
            <Input
              value={news.title}
              onChange={(e) => setNews({ ...news, title: e.target.value })}
              placeholder="Enter news title"
              className="w-full mt-1"
            />
          </div>

          {/* Description */}
          <div>
            <Label>Description</Label>
            <Textarea
              value={news.description}
              onChange={(e) => setNews({ ...news, description: e.target.value })}
              placeholder="Enter news description"
              className="w-full mt-1"
              rows={5}
            />
          </div>

          {/* Tag */}
          <div>
            <Label>Tag</Label>
            <Input
              value={news.tag}
              onChange={(e) => setNews({ ...news, tag: e.target.value })}
              placeholder="Enter tag (e.g. sports, politics)"
              className="w-full mt-1"
            />
          </div>

          {/* Existing File Link */}
          <div>
            <Label>Current File</Label>
            {news.link ? (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline block mt-1"
              >
                {news.originalName || 'View Existing File'}
              </a>
            ) : (
              <p>No file uploaded yet.</p>
            )}
          </div>

          {/* Upload New File */}
          <div>
            <Label>Replace with New File (optional)</Label>
            <Input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full mt-1"
            />
          </div>
        </div>

        {/* Update Button */}
        <Button
          onClick={handleUpdate}
          className="mt-6 w-full bg-blue-600 text-white"
        >
          Update News
        </Button>
      </div>
    </div>
  );
}
