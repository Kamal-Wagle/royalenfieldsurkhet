"use client"

import { useState } from "react"
import { Eye, Calendar, Tag, FileText, Bell, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import $axios from "@/lib/axios.instance"
import { useQuery } from "@tanstack/react-query"

type Notice = {
  _id: string
  noticeTitle: string
  noticeDescription: string
  noticeCategory: string
  fileId: string
  link: string
  originalName: string
  mimeType: string
  createdAt: string
}

export default function NoticePage() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-blue-100 text-blue-800"
      case "Administrative":
        return "bg-purple-100 text-purple-800"
      case "Event":
        return "bg-orange-100 text-orange-800"
      case "Holiday":
        return "bg-pink-100 text-pink-800"
      case "General":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const { data: notices, isLoading, isError } = useQuery<Notice[], Error>({
    queryKey: ["notice"],
    queryFn: async () => {
      const response = await $axios.get("/api/notice")
      return response.data.notices
    },
  })

  if (isLoading) return <p className="text-center py-10">Loading notices...</p>
  if (isError) return <p className="text-center py-10 text-red-600">Error loading notices.</p>

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-green-100 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="flex flex-col items-center justify-center mb-6 sm:flex-row sm:justify-center sm:space-x-4">
            <Bell className="h-12 w-12 mb-2 sm:mb-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">School Notices</h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stay updated with important announcements and information
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm md:text-base">
            <div className="flex items-center space-x-1">
              <FileText className="h-5 w-5" />
              <span>{notices?.length ?? 0} Total Notices</span>
            </div>
            <div className="flex items-center space-x-1">
              <AlertCircle className="h-5 w-5" />
              <span>Important Notices</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-5 w-5" />
              <span>Updated Daily</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-6xl py-12 relative z-10">
        {/* Notices Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg sm:text-xl">
              <FileText className="h-5 w-5 mr-2" />
              All Notices ({notices?.length ?? 0})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                      Title
                    </th>
                    <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                      Category
                    </th>
                    <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                      Date
                    </th>
                    <th className="text-left py-3 px-3 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {notices?.map((notice, index) => (
                    <tr
                      key={notice._id}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="py-3 px-3 sm:px-4 max-w-xs sm:max-w-none">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">{notice.noticeTitle}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{notice.noticeDescription}</p>
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:px-4 whitespace-nowrap">
                        <Badge className={getCategoryColor(notice.noticeCategory)}>
                          <Tag className="h-3 w-3 mr-1" />
                          {notice.noticeCategory}
                        </Badge>
                      </td>
                      <td className="py-3 px-3 sm:px-4 whitespace-nowrap text-gray-600 text-xs sm:text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(notice.createdAt).toLocaleDateString()}
                        </div>
                      </td>

                      <td className="py-3 px-3 sm:px-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedNotice(notice)}
                            className="hover:bg-blue-50 hover:text-blue-700 flex items-center"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Notice Modal */}
        {selectedNotice && (
  <div
    onClick={() => setSelectedNotice(null)}
    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 sm:p-6"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 flex flex-col"
    >
      <h2 className="text-2xl font-bold mb-4 truncate">{selectedNotice.noticeTitle}</h2>
      <p className="mb-6 whitespace-pre-wrap text-gray-700">{selectedNotice.noticeDescription}</p>

      {/* Larger Responsive Google Drive Preview */}
      {selectedNotice.fileId && (
        <div className="w-full mb-6" style={{ height: '75vh', maxHeight: '75vh', minHeight: '400px' }}>
          <iframe
            src={`https://drive.google.com/file/d/${selectedNotice.fileId}/preview`}
            width="100%"
            height="100%"
            allow="autoplay"
            title="Google Drive File Preview"
            className="rounded border"
            style={{ border: '1px solid #ddd' }}
          />
        </div>
      )}

      <div className="flex flex-wrap gap-4 justify-end">
        <a
          href={selectedNotice.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-center font-semibold"
        >
          Download PDF
        </a>
        <button
          onClick={() => setSelectedNotice(null)}
          className="px-6 py-3 rounded bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

      </main>
    </div>
  )
}
