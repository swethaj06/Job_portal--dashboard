import {
  Bell,
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
import { Card } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left - Logo */}
          <div className="flex items-center space-x-8">
            <div className="bg-slate-100 px-3 py-2 rounded text-sm font-medium text-slate-600">
              Logo
            </div>

            {/* Main Navigation */}
            <nav className="flex items-center space-x-6">
              <Button
                variant="ghost"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                Jobs
              </Button>
              <button className="flex items-center space-x-2 text-slate-500 hover:text-slate-700 text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>Messages</span>
              </button>
              <button className="flex items-center space-x-2 text-slate-500 hover:text-slate-700 text-sm">
                <DollarSign className="w-4 h-4" />
                <span>Payments</span>
              </button>
            </nav>
          </div>

          {/* Right - Notifications & Profile */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-slate-100 rounded-full">
              <Bell className="w-5 h-5 text-slate-600" />
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              A
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="border-t border-slate-200">
          <nav className="flex px-6">
            <button className="px-4 py-3 text-sm font-medium text-slate-900 border-b-2 border-slate-900">
              Job preview
            </button>
            <button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-700">
              Applicants
            </button>
            <button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-700">
              Match
            </button>
            <button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-700">
              Messages
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Area */}
        <div className="flex-1 p-4 lg:p-6">
          <Card className="p-6">
            {/* Job Title & Basic Info */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold text-slate-900">
                  Senior Product Designer
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-500">
                    Posted 2 days ago
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 hover:bg-green-100"
                  >
                    Open
                  </Badge>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Delaware, USA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm font-medium">$300k-$400k</span>
                </div>
              </div>
            </div>

            {/* Job Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Skills Required */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-3">
                  Skills Required
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked
                      className="rounded border-slate-300"
                    />
                    <span className="text-sm text-slate-700">Figma</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked
                      className="rounded border-slate-300 bg-slate-900"
                    />
                    <span className="text-sm text-slate-700">
                      Adobe Illustrator
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked
                      className="rounded border-slate-300 bg-slate-900"
                    />
                    <span className="text-sm text-slate-700">Auto-UI</span>
                  </label>
                </div>
              </div>

              {/* Preferred Language */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-3">
                  Preferred Language
                </h3>
                <p className="text-sm text-slate-700">English</p>
              </div>

              {/* Type */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-3">
                  Type
                </h3>
                <p className="text-sm text-slate-700">Full time</p>
              </div>

              {/* Years of Experience */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 mb-3">
                  Years of Experience
                </h3>
                <p className="text-sm text-slate-700">3+ Years of Experience</p>
              </div>
            </div>

            {/* About the Job */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-slate-900 mb-3">
                About the job
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700">
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
            <div className="mb-8">
              <h3 className="text-sm font-medium text-slate-900 mb-3">
                Benefits:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 ml-4">
                <li>Health Insurance</li>
                <li>Provident Fund</li>
              </ul>
            </div>

            {/* Schedule */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-slate-900 mb-3">
                Schedule:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 ml-4">
                <li>Day shift</li>
              </ul>
            </div>

            {/* Supplemental pay types */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-slate-900 mb-3">
                Supplemental pay types:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 ml-4">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
              </ul>
            </div>

            {/* Work Location */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-slate-900 mb-3">
                Work Location: in person
              </h3>
            </div>

            {/* Company Info */}
            <div className="border-t border-slate-200 pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-slate-900 mb-4">Atlassian</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Company size</span>
                      <p className="text-slate-700">1k - 5k Employees</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Type</span>
                      <p className="text-slate-700">Private</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Sector</span>
                      <p className="text-slate-700">
                        Information Technology, Infrastructure
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-500">Funding</span>
                      <p className="text-slate-700">Bootstrapped</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Founded in</span>
                      <p className="text-slate-700">2019</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Founded by</span>
                      <p className="text-slate-700">
                        Scott Farquhar, Mike Cannon-Brookes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-80 p-4 lg:p-6">
          <Card className="p-6">
            {/* Action Buttons */}
            <div className="flex space-x-3 mb-6">
              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center space-x-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete job</span>
              </Button>
              <Button className="flex-1 bg-red-500 hover:bg-red-600 flex items-center justify-center space-x-2">
                <Edit3 className="w-4 h-4" />
                <span>Edit job</span>
              </Button>
            </div>

            {/* Statistics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-slate-400" />
                  <span className="text-sm text-slate-700">Applicants</span>
                </div>
                <span className="font-semibold text-slate-900">400</span>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-slate-400" />
                  <span className="text-sm text-slate-700">Matches</span>
                </div>
                <span className="font-semibold text-slate-900">100</span>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-slate-400" />
                  <span className="text-sm text-slate-700">Messages</span>
                </div>
                <span className="font-semibold text-slate-900">147</span>
              </div>

              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-slate-400" />
                  <span className="text-sm text-slate-700">Views</span>
                </div>
                <span className="font-semibold text-slate-900">800</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
