"use client";

import {
  Calendar,
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import $axios from "@/lib/axios.instance";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

type Event = {
  _id: string;
  eventName: string;
  eventdescprition: string;
  eventTag: string;
  date: string;
  time: string;
};

export default function UpcomingEvents() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError, error } = useQuery<Event[], Error>({
    queryKey: ["event"],
    queryFn: async () => {
      const response = await $axios.get("/api/event");
      return response.data.eventsList;
    },
  });

  const tagStyles: Record<
    string,
    {
      bgColor: string;
      textColor: string;
      badgeBg: string;
      badgeText: string;
    }
  > = {
    sport: {
      bgColor: "bg-blue-600",
      textColor: "text-white",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-600",
    },
    academic: {
      bgColor: "bg-green-600",
      textColor: "text-white",
      badgeBg: "bg-green-100",
      badgeText: "text-green-600",
    },
    cultural: {
      bgColor: "bg-purple-600",
      textColor: "text-white",
      badgeBg: "bg-purple-100",
      badgeText: "text-purple-600",
    },
    default: {
      bgColor: "bg-gray-600",
      textColor: "text-white",
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-600",
    },
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  if (isLoading)
    return <p className="text-center py-20">Loading events...</p>;
  if (isError)
    return <p className="text-center py-20 text-red-500">Error: {error.message}</p>;

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-10 animate-spin"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-red-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Calendar className="inline h-4 w-4 mr-2" />
            Upcoming Events
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What&apos;s Coming Next
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mark your calendars for these exciting upcoming events and activities at Surya Prakash Secondary School.
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="flex justify-end gap-3 mb-4 pr-2">
          <Button variant="outline" size="icon" onClick={() => scroll("left")}>
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")}>
            <ChevronRight />
          </Button>
        </div>

        {/* Horizontally Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Hide scrollbar for WebKit */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {data?.map((event) => {
            const [day, month] = event.date.split(" ");
            const style = tagStyles[event.eventTag.toLowerCase()] || tagStyles.default;

            return (
              <div key={event._id} className="snap-start shrink-0 w-[300px]">
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`${style.bgColor} ${style.textColor} rounded-lg p-3 text-center min-w-[60px]`}>
                        <div className="text-xl font-bold">{day}</div>
                        <div className="text-xs">{month?.toUpperCase()}</div>
                      </div>
                      <div className={`${style.badgeBg} ${style.badgeText} px-3 py-1 rounded-full text-xs font-medium capitalize`}>
                        {event.eventTag}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-800">{event.eventName}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.eventdescprition}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <Button className={`w-full ${style.bgColor} hover:brightness-90`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
