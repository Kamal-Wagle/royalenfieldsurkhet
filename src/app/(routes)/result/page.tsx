"use client"

import { useState } from "react"
import {
  Search,
  Download,
  Eye,
  Calendar,
  Tag,
  Filter,
  FileText,
  Trophy,
  Clock,
  Users,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import $axios from "@/lib/axios.instance"
import { useQuery } from "@tanstack/react-query"

interface Result {
  _id: string
  resultTitle: string
  descprition:string
  examType: string
  class: string
  statistics: string
  session: string
  fileId: string
  link: string
  originalName: string
  mimeType: string
  createdAt: string
  updatedAt: string
  totalStudents?: number
  passPercentage?: number
  isNew?: boolean
  isPinned?: boolean
}

interface ApiResponse {
  message: string
  success: boolean
  results: Result[]
}

const classes = ["All", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]
const examTypes = ["All", "Final", "Board", "Mid-Term", "Annual", "Quarterly", "Unit Test"]

export default function ResultPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("All")
  const [selectedExamType, setSelectedExamType] = useState("All")
  const [selectedResult, setSelectedResult] = useState<Result | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5) // Show 5 results per page

  const { data: apiData, isLoading } = useQuery<ApiResponse>({
    queryKey: ["results"],
    queryFn: async () => {
      const response = await $axios.get("/api/result")
      return response.data
    },
  })

  const results = apiData?.results || []

  const allFilteredResults = results.filter((result) => {
    const matchesSearch =
      result.resultTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.statistics.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = selectedClass === "All" || result.class === selectedClass
    const matchesExamType = selectedExamType === "All" || result.examType === selectedExamType

    return matchesSearch && matchesClass && matchesExamType
  })

  const totalPages = Math.ceil(allFilteredResults.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const filteredResults = allFilteredResults.slice(startIndex, endIndex)

  const pinnedResults = filteredResults.filter((result) => result.isPinned)
  const regularResults = filteredResults.filter((result) => !result.isPinned)

  const getExamTypeColor = (examType: string) => {
    switch (examType) {
      case "Final":
        return "bg-red-100 text-red-800"
      case "Board":
        return "bg-purple-100 text-purple-800"
      case "Mid-Term":
        return "bg-blue-100 text-blue-800"
      case "Annual":
        return "bg-green-100 text-green-800"
      case "Quarterly":
        return "bg-orange-100 text-orange-800"
      case "Unit Test":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getClassColor = (className: string) => {
    const classNum = Number.parseInt(className.split(" ")[1])
    if (classNum >= 11) return "bg-indigo-100 text-indigo-800"
    if (classNum >= 9) return "bg-blue-100 text-blue-800"
    if (classNum >= 6) return "bg-green-100 text-green-800"
    return "bg-gray-100 text-gray-800"
  }

  const getPassPercentageColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600"
    if (percentage >= 80) return "text-blue-600"
    if (percentage >= 70) return "text-orange-600"
    return "text-red-600"
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading results...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-100 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Examination Results</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Access and download examination results for all classes</p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              <span>{results.length} Result Sets</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>All Classes</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>Updated Regularly</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Search & Filter Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search results..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1)
                  }}
                />
              </div>

              {/* Class Filter */}
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value)
                  setCurrentPage(1)
                }}
              >
                {classes.map((className) => (
                  <option key={className} value={className}>
                    {className}
                  </option>
                ))}
              </select>

              {/* Exam Type Filter */}
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedExamType}
                onChange={(e) => {
                  setSelectedExamType(e.target.value)
                  setCurrentPage(1)
                }}
              >
                {examTypes.map((examType) => (
                  <option key={examType} value={examType}>
                    {examType === "All" ? "All Exam Types" : examType}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

      
        {/* Results Table */}
        <Card className="shadow-lg">
          <CardHeader className="border-b border-gray-100 bg-gray-50/50">
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center text-xl">
                <FileText className="h-6 w-6 mr-3 text-green-600" />
                All Results ({allFilteredResults.length})
              </span>
              <div className="text-sm text-gray-600 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                Showing {startIndex + 1}-{Math.min(endIndex, allFilteredResults.length)} of {allFilteredResults.length}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider w-1/3">Result Title</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">Class</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">Exam Type</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">Date</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {/* Pinned Results */}
                  {pinnedResults.map((result) => (
                    <tr
                      key={result._id}
                      className="bg-green-50/50 hover:bg-green-100/50 transition-colors duration-150"
                    >
                      <td className="py-5 px-6">
                        <div className="min-w-[300px]">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-green-800 truncate">{result.resultTitle}</h3>
                            {result.isNew && <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full shrink-0">NEW</Badge>}
                            <Badge className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full shrink-0">PINNED</Badge>
                          </div>
                          <p className="text-sm text-green-700 mt-1.5 line-clamp-2">{result?.descprition}</p>
                          <p className="text-xs text-green-600 mt-1.5 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Session: {result.session}
                          </p>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <Badge className={`${getClassColor(result.class)} px-3 py-1.5 rounded-full`}>
                          <GraduationCap className="h-4 w-4 mr-1.5" />
                          {result.class}
                        </Badge>
                      </td>
                      <td className="py-5 px-6">
                        <Badge className={`${getExamTypeColor(result.examType)} px-3 py-1.5 rounded-full`}>
                          <Tag className="h-4 w-4 mr-1.5" />
                          {result.examType}
                        </Badge>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">{new Date(result.createdAt).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedResult(result)}
                            className="hover:bg-blue-50 hover:text-blue-700 border-gray-200"
                          >
                            <Eye className="h-4 w-4 mr-1.5" />
                            View
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Regular Results */}
                  {regularResults.map((result) => (
                    <tr
                      key={result._id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="py-5 px-6">
                        <div className="min-w-[300px]">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900 truncate">{result.resultTitle}</h3>
                            {result.isNew && <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full shrink-0">NEW</Badge>}
                          </div>
                          <p className="text-sm text-gray-600 mt-1.5 line-clamp-2">{result?.descprition}</p>
                          <p className="text-xs text-gray-500 mt-1.5 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Session: {result.session}
                          </p>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <Badge className={`${getClassColor(result.class)} px-3 py-1.5 rounded-full`}>
                          <GraduationCap className="h-4 w-4 mr-1.5" />
                          {result.class}
                        </Badge>
                      </td>
                      <td className="py-5 px-6">
                        <Badge className={`${getExamTypeColor(result.examType)} px-3 py-1.5 rounded-full`}>
                          <Tag className="h-4 w-4 mr-1.5" />
                          {result.examType}
                        </Badge>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="text-sm">{new Date(result.createdAt).toLocaleDateString()}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedResult(result)}
                            className="hover:bg-blue-50 hover:text-blue-700 border-gray-200"
                          >
                            <Eye className="h-4 w-4 mr-1.5" />
                            View
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredResults.length === 0 && (
              <div className="text-center py-16">
                <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>

              {/* Page numbers */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className={currentPage === pageNum ? "bg-green-600 text-white" : ""}
                    >
                      {pageNum}
                    </Button>
                  )
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Result Detail Modal */}
        {selectedResult && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl">
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex-shrink-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                     {/* Bottom Close Button */}
                <div className="mt-8 flex justify-end ">
                </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getClassColor(selectedResult.class)}>
                        <GraduationCap className="h-4 w-4 mr-1.5" />
                        {selectedResult.class}
                      </Badge>
                      <Badge className={getExamTypeColor(selectedResult.examType)}>
                        <Tag className="h-4 w-4 mr-1.5" />
                        {selectedResult.examType}
                      </Badge>
                      {selectedResult.isNew && (
                        <Badge className="bg-blue-600 text-white">NEW</Badge>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedResult.resultTitle}</h2>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(selectedResult.createdAt).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <span>Session: {selectedResult.session}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedResult(null)}
                    className="h-8 w-8 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="font-medium">Total Students</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">
                        {selectedResult.totalStudents || 'N/A'}
                      </span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-gray-600">
                        <Trophy className="h-5 w-5 mr-2" />
                        <span className="font-medium">Pass Percentage</span>
                      </div>
                      <span className={`text-2xl font-bold ${getPassPercentageColor(selectedResult.passPercentage || 0)}`}>
                        {selectedResult.passPercentage || 'N/A'}%
                      </span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${getPassPercentageColor(selectedResult.passPercentage || 0).replace('text', 'bg')}`}
                        style={{ width: `${selectedResult.passPercentage || 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {selectedResult.descprition && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedResult.descprition}</p>
                  </div>
                )}

                {/* PDF Preview */}
                <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 p-8 text-center">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Result PDF Document</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Click the button below to view or download the complete result sheet
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white shadow-sm"
                      onClick={() => window.open(selectedResult.link, '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View PDF
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(selectedResult.link, '_blank')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        )}
      </div>
     </div>
  )
}
