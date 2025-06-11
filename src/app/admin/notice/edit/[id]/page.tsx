'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import $axios from '@/lib/axios.instance';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-hot-toast';

export default function EditNoticePage() {
  const router = useRouter();
  const { id } = useParams();

  const [notice, setNotice] = useState({
    noticeTitle: '',
    noticeDescription: '',
    noticeCategory: '',
    fileId: '',
    link: '',
    originalName: '',
    mimeType: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const folderId = process.env.GDRIVE_Notice_FOLDER_ID;

  useEffect(() => {
    if (!id) return;

    async function fetchNotice() {
      try {
        const res = await $axios.get(`/api/notice/${id}`);
        const data = res.data.notice;

        setNotice({
          noticeTitle: data.noticeTitle || '',
          noticeDescription: data.noticeDescription || '',
          noticeCategory: data.noticeCategory || '',
          fileId: data.fileId || '',
          link: data.link || '',
          originalName: data.originalName || '',
          mimeType: data.mimeType || '',
        });
      } catch (err) {
        console.error('Error fetching notice:', err);
        setError('Failed to fetch notice.');
      } finally {
        setLoading(false);
      }
    }

    fetchNotice();
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
        const arrayBuffer = await selectedFile.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString('base64');

        filePayload = {
          name: selectedFile.name,
          content: base64,
          mimeType: selectedFile.type,
        };
      }

      await $axios.put(`/api/notice/${id}`, {
        noticeTitle: notice.noticeTitle,
        noticeDescription: notice.noticeDescription,
        noticeCategory: notice.noticeCategory,
        folderId,
        file: filePayload,
      });

      toast.success('Notice updated successfully!');
      router.push('/admin/notice');
    } catch (err) {
      console.error('Error updating notice:', err);
      toast.error('Failed to update notice.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit Notice</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl">
        <div className="grid grid-cols-1 gap-6">
          {/* Title */}
          <div>
            <Label>Notice Title</Label>
            <Input
              value={notice.noticeTitle}
              onChange={(e) =>
                setNotice({ ...notice, noticeTitle: e.target.value })
              }
              placeholder="Enter notice title"
              className="w-full mt-1"
            />
          </div>

          {/* Description */}
          <div>
            <Label>Notice Description</Label>
            <Textarea
              value={notice.noticeDescription}
              onChange={(e) =>
                setNotice({ ...notice, noticeDescription: e.target.value })
              }
              placeholder="Enter description"
              rows={4}
              className="w-full mt-1"
            />
          </div>

          {/* Category */}
          <div>
            <Label>Notice Category</Label>
            <Input
              value={notice.noticeCategory}
              onChange={(e) =>
                setNotice({ ...notice, noticeCategory: e.target.value })
              }
              placeholder="e.g. Academic, Event, Holiday"
              className="w-full mt-1"
            />
          </div>

          {/* Current File Link */}
          <div>
            <Label>Current File</Label>
            <a
              href={notice.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline block mt-1"
            >
              {notice.originalName || 'View Existing File'}
            </a>
          </div>

          {/* Upload New File */}
          <div>
            <Label>Replace with New File (optional)</Label>
            <Input
              type="file"
              accept="application/pdf,image/*"
              onChange={handleFileChange}
              className="w-full mt-1"
            />
          </div>
        </div>

        <Button
          onClick={handleUpdate}
          className="mt-6 w-full bg-blue-600 text-white"
        >
          Update Notice
        </Button>
      </div>
    </div>
  );
}
