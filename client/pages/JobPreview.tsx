import {
  MapPin,
  DollarSign,
  Users,
  MessageCircle,
  Eye,
  Trash2,
  Edit3,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "../components/Header";

export default function JobPreview() {
  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Header - Normal positioned */}
      <Header />

      {/* Main Content Container - Full Page Coverage */}
      <div className="w-full min-h-screen">
        {/* Two Column Layout - Full Width */}
        <div className="flex min-h-screen bg-gray-50">
          {/* Left Column - Main Content */}
          <div className="flex-1 p-4">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm min-h-full">
              {/* Header Section */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Senior Product Designer
                  </h1>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">
                      posted 2 days ago
                    </span>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 text-xs px-3 py-1">
                      Open
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Delaware, USA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-medium">$300k-$400k</span>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-4">
                {/* Job Details Grid - Enhanced styling to match image */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                  {/* Skills Required */}
                  <div className="sm:col-span-2 lg:col-span-1">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">
                      Skills Required
                    </h3>
                    <div className="space-y-3">
                      <div className="w-fit">
                        <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-full px-3 py-2 shadow-sm">
                          <div className="w-6 h-6 rounded-md flex items-center justify-center bg-white relative">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              {/* Figma logo structure */}
                              <rect x="6" y="3" width="4" height="6" rx="2" fill="#FF5722"/>
                              <rect x="14" y="3" width="4" height="6" rx="2" fill="#FF9800"/>
                              <rect x="6" y="9" width="4" height="6" rx="2" fill="#9C27B0"/>
                              <circle cx="16" cy="12" r="2" fill="#2196F3"/>
                              <circle cx="8" cy="18" r="2" fill="#4CAF50"/>
                            </svg>
                          </div>
                          <span className="text-sm text-gray-800 font-medium">Figma</span>
                        </div>
                      </div>
                      <div className="w-fit">
                        <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-full px-3 py-2 shadow-sm">
                          <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-red-900 rounded-md"></div>
                            <span className="relative text-orange-400 text-xs font-bold">Ai</span>
                          </div>
                          <span className="text-sm text-gray-800 font-medium">Adobe Illustrator</span>
                        </div>
                      </div>
                      <div className="w-fit">
                        <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-full px-3 py-2 shadow-sm">
                          <div className="w-6 h-6 bg-gradient-to-br from-purple-800 to-purple-900 rounded-md flex items-center justify-center relative overflow-hidden">
                            <span className="relative text-pink-400 text-xs font-bold">Xd</span>
                          </div>
                          <span className="text-sm text-gray-800 font-medium">Adobe XD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preferred Language */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">
                      Preferred Language
                    </h3>
                    <p className="text-sm text-gray-700 font-medium">English</p>
                  </div>

                  {/* Type */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">Type</h3>
                    <p className="text-sm text-gray-700 font-medium">Full time</p>
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">
                      Years of Experience
                    </h3>
                    <p className="text-sm text-gray-700 font-medium">3+ Years of Experience</p>
                  </div>
                </div>

                {/* Separator line between skills and about section */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* About the Job - Enhanced styling */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    About the job
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 ml-4 leading-relaxed">
                    <li>Handle the UI/UX research design</li>
                    <li>
                      Work on researching on latest web applications designs &
                      trends
                    </li>
                    <li>Work on conceptualizing and visualizing</li>
                    <li>
                      Work on creating graphics content and other graphic related
                      works
                    </li>
                  </ol>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    Benefits:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Health Insurance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Provident Fund</span>
                    </li>
                  </ul>
                </div>

                {/* Schedule */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    Schedule:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Day shift</span>
                    </li>
                  </ul>
                </div>

                {/* Supplemental pay types */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    Supplemental pay types:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Performance bonus</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Yearly bonus</span>
                    </li>
                  </ul>
                </div>

                {/* Work Location */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    Work Location: In person
                  </h3>
                </div>

                {/* Company Info Section - Enhanced styling */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">𐒰</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Atlassian</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-500 block mb-2 font-medium">Company size</span>
                      <p className="text-gray-800 font-semibold">1k - 2k Employees</p>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-2 font-medium">Sector</span>
                      <p className="text-gray-800 font-semibold">
                        Information Technology, Infrastructure
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-2 font-medium">Type</span>
                      <p className="text-gray-800 font-semibold">Private</p>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-2 font-medium">Funding</span>
                      <p className="text-gray-800 font-semibold">Bootstrapped</p>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-2 font-medium">Founded in</span>
                      <p className="text-gray-800 font-semibold">2019</p>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-2 font-medium">Founded by</span>
                      <p className="text-gray-800 font-semibold">
                        Scott Farquhar, Mike Cannon-Brookes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Statistics - Full Height */}
          <div className="w-80 p-4 bg-gray-50">
            {/* Action Buttons - Above Statistics */}
            <div className="flex space-x-4 mb-4">
              <Button
                variant="outline"
                className="flex items-center space-x-2 border-red-300 text-red-600 hover:bg-red-50 px-4 py-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete job</span>
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 flex items-center space-x-2 px-4 py-2">
                <Edit3 className="w-4 h-4" />
                <span>Edit job</span>
              </Button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sticky top-4">
              <div className="space-y-0">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Applicants</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">400</span>
                </div>
                
                <div className="border-t border-gray-200"></div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Matches</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">100</span>
                </div>
                
                <div className="border-t border-gray-200"></div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                    <span className="text-sm text-gray-600">Messages</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">147</span>
                </div>
                
                <div className="border-t border-gray-200"></div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Views</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
