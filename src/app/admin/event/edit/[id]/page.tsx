'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import $axios from '@/lib/axios.instance';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-hot-toast';

export default function EditEventPage() {
  const router = useRouter();
  const { id } = useParams();

  const [event, setEvent] = useState({
    eventName: '',
    eventdescprition: '',
    eventTag: '',
    date: '',
    time: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    async function fetchEvent() {
      try {
        const res = await $axios.get(`/api/event/${id}`);
        const data = res.data.eventsList;

        setEvent({
          eventName: data.eventName || '',
          eventdescprition: data.eventdescprition || '',
          eventTag: data.eventTag || '',
          date: data.date || '',
          time: data.time || '',
        });
      } catch (err: unknown) {
        console.error('Error fetching event:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch event.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await $axios.put(`/api/event/${id}`, {
        eventName: event.eventName,
        eventdescprition: event.eventdescprition,
        eventTag: event.eventTag,
        date: event.date,
        time: event.time,
      });

      toast.success('Event updated successfully!');
      router.push('/admin/event');
    } catch (err: unknown) {
      console.error('Error updating event:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to update event.';
      toast.error(errorMessage);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit Event</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl">
        <div className="grid grid-cols-1 gap-6">
          {/* Event Name */}
          <div>
            <Label>Event Name</Label>
            <Input
              value={event.eventName}
              onChange={(e) => setEvent({ ...event, eventName: e.target.value })}
              placeholder="Enter event name"
              className="w-full mt-1"
            />
          </div>

          {/* Event Description */}
          <div>
            <Label>Description</Label>
            <Textarea
              value={event.eventdescprition}
              onChange={(e) => setEvent({ ...event, eventdescprition: e.target.value })}
              placeholder="Enter event description"
              className="w-full mt-1"
              rows={5}
            />
          </div>

          {/* Event Tag */}
          <div>
            <Label>Tag</Label>
            <Input
              value={event.eventTag}
              onChange={(e) => setEvent({ ...event, eventTag: e.target.value })}
              placeholder="Enter tag (e.g., academic, cultural)"
              className="w-full mt-1"
            />
          </div>

          {/* Event Date */}
          <div>
            <Label>Date</Label>
            <Input
              type="date"
              value={event.date}
              onChange={(e) => setEvent({ ...event, date: e.target.value })}
              className="w-full mt-1"
            />
          </div>

          {/* Event Time */}
          <div>
            <Label>Time</Label>
            <Input
              type="time"
              value={event.time}
              onChange={(e) => setEvent({ ...event, time: e.target.value })}
              className="w-full mt-1"
            />
          </div>
        </div>

        {/* Update Button */}
        <Button
          onClick={handleUpdate}
          className="mt-6 w-full bg-blue-600 text-white"
        >
          Update Event
        </Button>
      </div>
    </div>
  );
}
