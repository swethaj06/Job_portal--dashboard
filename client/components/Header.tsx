import { Bell, MessageCircle, DollarSign, Briefcase, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="w-full flex items-center justify-between px-6 py-4">
        {/* Left - Logo */}
        <Link to="/job-preview">
          <div className="bg-orange-100 px-4 py-2 rounded-lg text-sm font-medium text-orange-600 hover:bg-orange-200 transition-colors">
            Logo
          </div>
        </Link>

        {/* Center - Main Navigation */}
        <nav className="flex items-center bg-gray-50 rounded-full p-1 border-2 border-white shadow-lg">
          <Button
            variant="ghost"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-sm border border-white/20"
            asChild
          >
            <Link to="/job-preview">
              <Briefcase className="w-4 h-4" />
              <span>Jobs</span>
            </Link>
          </Button>
          <Link
            to="/messages"
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 text-sm px-4 py-2 rounded-full transition-colors hover:bg-white hover:shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Messages</span>
          </Link>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 text-sm px-4 py-2 rounded-full transition-colors hover:bg-white hover:shadow-sm">
            <DollarSign className="w-4 h-4" />
            <span>Payments</span>
          </button>
        </nav>

        {/* Right - Notifications & Profile */}
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-full px-2 py-1 transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              𐒰
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-gray-50 w-full">
        <div className="w-full">
          <nav className="flex px-6 space-x-8">
            <Link
              to="/job-preview"
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === "/job-preview"
                  ? "text-orange-500 border-orange-500"
                  : "text-gray-600 hover:text-gray-800 border-transparent"
              }`}
            >
              Job preview
            </Link>
            <Link
              to="/applicants"
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === "/applicants"
                  ? "text-orange-500 border-orange-500"
                  : "text-gray-600 hover:text-gray-800 border-transparent"
              }`}
            >
              Applicants
            </Link>
            <Link
              to="/match"
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === "/match"
                  ? "text-orange-500 border-orange-500"
                  : "text-gray-600 hover:text-gray-800 border-transparent"
              }`}
            >
              Match
            </Link>
            <Link
              to="/messages"
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                location.pathname === "/messages"
                  ? "text-orange-500 border-orange-500"
                  : "text-gray-600 hover:text-gray-800 border-transparent"
              }`}
            >
              Messages
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
