'use client';

import { useMutation } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema for event form
const eventValidationSchema = Yup.object({
  eventName: Yup.string().required("Event name is required"),
  eventdescprition: Yup.string().required("Event description is required"),
  eventTag: Yup.string().required("Event tag is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

// API call to create event
const addEvent = async (data: {
  eventName: string;
  eventdescprition: string;
  eventTag: string;
  date: string;
  time: string;
}) => {
  try {
    const response = await $axios.post("/api/event", data);
    return response.data;
  } catch (error: unknown) {
    let errorMessage = "Something went wrong while creating the event.";
    
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (
      error && 
      typeof error === 'object' && 
      'response' in error && 
      error.response && 
      typeof error.response === 'object' && 
      'data' in error.response && 
      error.response.data && 
      typeof error.response.data === 'object' && 
      'error' in error.response.data && 
      typeof error.response.data.error === 'string'
    ) {
      errorMessage = error.response.data.error;
    }
    
    throw new Error(errorMessage);
  }
};

export default function AddEventPage() {
  const router = useRouter();

  const addEventMutation = useMutation({
    mutationFn: addEvent,
    onSuccess: () => {
      toast.success("Event created successfully!");
      resetForm();
      router.push("/admin/event");
    },
    onError: (err: Error) => {
      toast.error(err.message || "Failed to create event.");
      console.error("Create event error:", err);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      eventName: "",
      eventdescprition: "",
      eventTag: "",
      date: "",
      time: "",
    },
    validationSchema: eventValidationSchema,
    onSubmit: (values) => {
      addEventMutation.mutate(values);
    },
  });

  const { isPending, isError, error } = addEventMutation;

  return (
    <div className="p-8 bg-gray-50 min-h-screen max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Event</h1>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <Label htmlFor="eventName">Event Name</Label>
            <Input
              id="eventName"
              name="eventName"
              type="text"
              value={values.eventName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter event name"
            />
            {touched.eventName && errors.eventName && (
              <p className="text-red-500 text-sm">{errors.eventName}</p>
            )}
          </div>

          {/* Event Description */}
          <div>
            <Label htmlFor="eventdescprition">Event Description</Label>
            <Textarea
              id="eventdescprition"
              name="eventdescprition"
              value={values.eventdescprition}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter event description"
              rows={4}
            />
            {touched.eventdescprition && errors.eventdescprition && (
              <p className="text-red-500 text-sm">{errors.eventdescprition}</p>
            )}
          </div>

          {/* Event Tag */}
          <div>
            <Label htmlFor="eventTag">Event Tag</Label>
            <Input
              id="eventTag"
              name="eventTag"
              type="text"
              value={values.eventTag}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter tag (e.g., academic, sport, cultural)"
            />
            {touched.eventTag && errors.eventTag && (
              <p className="text-red-500 text-sm">{errors.eventTag}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="text"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter date (e.g., 18 June)"
            />
            {touched.date && errors.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              name="time"
              type="text"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter time (e.g., 9:00 AM - 4:00 PM)"
            />
            {touched.time && errors.time && (
              <p className="text-red-500 text-sm">{errors.time}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white"
          >
            {isPending ? "Creating..." : "Create Event"}
          </Button>
        </form>

        {isError && (
          <p className="mt-4 text-red-500">
            {error instanceof Error ? error.message : "An error occurred."}
          </p>
        )}
      </div>
    </div>
  );
}
