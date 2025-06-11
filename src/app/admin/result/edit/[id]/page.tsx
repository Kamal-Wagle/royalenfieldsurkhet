'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import $axios from '@/lib/axios.instance';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-hot-toast';

export default function EditResultPage() {
  const router = useRouter();
  const { id } = useParams();

  const [result, setResult] = useState({
    resultTitle: '',
    examType: '',
    class: '',
    statistics: '',
    session: '',
    totalStudents: '',
    passPercentage: '',
    fileId: '',
    link: '',
    originalName: '',
    mimeType: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const folderId = process.env.NEXT_PUBLIC_GDRIVE_RESULT_FOLDER_ID;

  useEffect(() => {
    if (!id) return;

    async function fetchResult() {
      try {
        const res = await $axios.get(`/api/result/${id}`);
        const data = res.data.result;

        setResult({
          resultTitle: data.resultTitle || '',
          examType: data.examType || '',
          class: data.class || '',
          statistics: data.statistics || '',
          session: data.session || '',
          totalStudents: data.totalStudents?.toString() || '',
          passPercentage: data.passPercentage?.toString() || '',
          fileId: data.fileId || '',
          link: data.link || '',
          originalName: data.originalName || '',
          mimeType: data.mimeType || '',
        });
      } catch (err) {
        console.error('Error fetching result:', err);
        setError('Failed to fetch result.');
      } finally {
        setLoading(false);
      }
    }

    fetchResult();
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

      await $axios.put(`/api/result/${id}`, {
        resultTitle: result.resultTitle,
        examType: result.examType,
        class: result.class,
        statistics: result.statistics,
        session: result.session,
        totalStudents: result.totalStudents ? Number(result.totalStudents) : undefined,
        passPercentage: result.passPercentage ? Number(result.passPercentage) : undefined,
        folderId,
        file: filePayload,
      });

      toast.success('Result updated successfully!');
      router.push('/admin/result');
    } catch (err) {
      console.error('Error updating result:', err);
      toast.error('Failed to update result.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit Result</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl">
        <div className="grid grid-cols-1 gap-6">
          {/* Result Title */}
          <div>
            <Label>Title</Label>
            <Input
              value={result.resultTitle}
              onChange={(e) =>
                setResult({ ...result, resultTitle: e.target.value })
              }
              placeholder="Enter result title"
              className="w-full mt-1"
            />
          </div>

          {/* Exam Type */}
          <div>
            <Label>Exam Type</Label>
            <Input
              value={result.examType}
              onChange={(e) => setResult({ ...result, examType: e.target.value })}
              placeholder="Enter exam type"
              className="w-full mt-1"
            />
          </div>

          {/* Class */}
          <div>
            <Label>Class</Label>
            <Input
              value={result.class}
              onChange={(e) => setResult({ ...result, class: e.target.value })}
              placeholder="Enter class"
              className="w-full mt-1"
            />
          </div>

          {/* Statistics */}
          <div>
            <Label>Statistics</Label>
            <Input
              value={result.statistics}
              onChange={(e) => setResult({ ...result, statistics: e.target.value })}
              placeholder="Enter statistics"
              className="w-full mt-1"
            />
          </div>

          {/* Session */}
          <div>
            <Label>Session</Label>
            <Input
              value={result.session}
              onChange={(e) => setResult({ ...result, session: e.target.value })}
              placeholder="Enter session"
              className="w-full mt-1"
            />
          </div>

          {/* Total Students */}
          <div>
            <Label>Total Students (Optional)</Label>
            <Input
              type="number"
              value={result.totalStudents}
              onChange={(e) => setResult({ ...result, totalStudents: e.target.value })}
              placeholder="Enter total number of students"
              min="0"
              className="w-full mt-1"
            />
          </div>

          {/* Pass Percentage */}
          <div>
            <Label>Pass Percentage (Optional)</Label>
            <Input
              type="number"
              value={result.passPercentage}
              onChange={(e) => setResult({ ...result, passPercentage: e.target.value })}
              placeholder="Enter pass percentage"
              min="0"
              max="100"
              step="0.01"
              className="w-full mt-1"
            />
          </div>

          {/* Existing File Link */}
          <div>
            <Label>Current File</Label>
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline block mt-1"
            >
              {result.originalName || 'View Existing File'}
            </a>
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
          Update Result
        </Button>
      </div>
    </div>
  );
}
