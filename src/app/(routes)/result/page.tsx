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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                All Results ({allFilteredResults.length})
              </span>
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, allFilteredResults.length)} of {allFilteredResults.length}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Result Title</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Class</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Exam Type</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Date</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Statistics</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Pinned Results */}
                  {pinnedResults.map((result, index) => (
                    <tr
                      key={result._id}
                      className={`border-b border-green-200 bg-green-50 hover:bg-green-100 transition-colors ${index % 2 === 0 ? "" : "bg-green-75"}`}
                    >
                      <td className="py-4 px-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-green-800">{result.resultTitle}</h3>
                            {result.isNew && <Badge className="bg-blue-600 text-white text-xs">NEW</Badge>}
                          </div>
                          <p className="text-sm text-green-700 mt-1">{result?.descprition}</p>
                          <p className="text-xs text-green-600 mt-1">Session: {result.session}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getClassColor(result.class)}>
                          <GraduationCap className="h-3 w-3 mr-1" />
                          {result.class}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getExamTypeColor(result.examType)}>
                          <Tag className="h-3 w-3 mr-1" />
                          {result.examType}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(result.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Users className="h-3 w-3 mr-1 text-gray-500" />
                            <span className="text-gray-600">{result.totalStudents || 'N/A'} Students</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Trophy className="h-3 w-3 mr-1 text-gray-500" />
                            <span className={`font-semibold ${getPassPercentageColor(result.passPercentage || 0)}`}>
                              {result.passPercentage || 'N/A'}% Pass
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedResult(result)}
                            className="hover:bg-blue-50 hover:text-blue-700"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => window.open(result.link, '_blank')}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Regular Results */}
                  {regularResults.map((result, index) => (
                    <tr
                      key={result._id}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-25"}`}
                    >
                      <td className="py-4 px-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-gray-900">{result.resultTitle}</h3>
                            {result.isNew && <Badge className="bg-blue-600 text-white text-xs">NEW</Badge>}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{result.statistics}</p>
                          <p className="text-xs text-gray-500 mt-1">Session: {result.session}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getClassColor(result.class)}>
                          <GraduationCap className="h-3 w-3 mr-1" />
                          {result.class}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getExamTypeColor(result.examType)}>
                          <Tag className="h-3 w-3 mr-1" />
                          {result.examType}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(result.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Users className="h-3 w-3 mr-1 text-gray-500" />
                            <span className="text-gray-600">{result.totalStudents || 'N/A'} Students</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Trophy className="h-3 w-3 mr-1 text-gray-500" />
                            <span className={`font-semibold ${getPassPercentageColor(result.passPercentage || 0)}`}>
                              {result.passPercentage || 'N/A'}% Pass
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedResult(result)}
                            className="hover:bg-blue-50 hover:text-blue-700"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => window.open(result.link, '_blank')}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredResults.length === 0 && (
              <div className="text-center py-12">
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedResult.resultTitle}</h2>
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className={getClassColor(selectedResult.class)}>{selectedResult.class}</Badge>
                      <Badge className={getExamTypeColor(selectedResult.examType)}>{selectedResult.examType}</Badge>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(selectedResult.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>
                          Total Students: <strong>{selectedResult.totalStudents || 'N/A'}</strong>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-gray-500" />
                        <span className={getPassPercentageColor(selectedResult.passPercentage || 0)}>
                          Pass Percentage: <strong>{selectedResult.passPercentage || 'N/A'}%</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedResult(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6">{selectedResult.statistics}</p>

                {/* PDF Preview Placeholder */}
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Result PDF Document</h3>
                  <p className="text-gray-600 mb-4">
                    Click the button below to view or download the complete result sheet
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
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
