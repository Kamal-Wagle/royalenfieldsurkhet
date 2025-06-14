'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import $axios from '@/lib/axios.instance';
import { toast } from 'react-hot-toast';

export default function EditBikePage() {
  const router = useRouter();
  const { id } = useParams();

  const [bike, setBike] = useState({
    name: '',
    price: '',
    year: '',
    mileage: '',
    brand: '',
    type: '',
    engine: '',
    fuelType: '',
    transmission: '',
    color: '',
    owners: '',
    insurance: '',
    registration: '',
    description: '',
    features: [] as string[],
    specifications: { 'Engine Displacement': '' },
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBike = async () => {
      try {
        const res = await $axios.get(`/api/bike/${id}`);
        setBike(res.data.bike);
      } catch (error) {
        console.error('Error fetching bike:', error);
        toast.error('Failed to fetch bike details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBike();
  }, [id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'Engine Displacement') {
      setBike((prev) => ({
        ...prev,
        specifications: { ...prev.specifications, [name]: value },
      }));
    } else {
      setBike((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
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

      await $axios.put(`/api/bike/${id}`, {
        ...bike,
        file: filePayload,
      });

      toast.success('Bike updated successfully!');
      router.push('/admin/bike');
    } catch (error) {
      console.error('Error updating bike:', error);
      toast.error('Failed to update bike.');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit Bike</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl">
        <div className="grid grid-cols-1 gap-6">
          {[
            'name',
            'price',
            'year',
            'mileage',
            'brand',
            'type',
            'engine',
            'fuelType',
            'transmission',
            'color',
            'owners',
            'insurance',
            'registration',
          ].map((field) => (
            <div key={field}>
              <Label className="capitalize">{field}</Label>
              <Input
                name={field}
                value={bike[field as keyof typeof bike] as string}
                onChange={handleInputChange}
                placeholder={`Enter ${field}`}
                className="w-full mt-1"
              />
            </div>
          ))}

          <div>
            <Label>Description</Label>
            <Textarea
              name="description"
              value={bike.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full mt-1"
            />
          </div>

          <div>
            <Label>Engine Displacement</Label>
            <Input
              name="Engine Displacement"
              value={bike.specifications['Engine Displacement']}
              onChange={handleInputChange}
              placeholder="e.g. 125cc"
            />
          </div>

          <div>
            <Label>Upload New Image (Optional)</Label>
            <Input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
        </div>

        <Button
          onClick={handleUpdate}
          className="mt-6 w-full bg-blue-600 text-white"
        >
          Update Bike
        </Button>
      </div>
    </div>
  );
}
