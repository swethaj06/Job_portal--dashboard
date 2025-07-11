import { Bell, MessageCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        {/* Left - Logo */}
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link to="/job-preview">
            <div className="bg-gray-100 px-3 py-2 rounded text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors">
              Logo
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium"
              asChild
            >
              <Link to="/job-preview">Jobs</Link>
            </Button>
            <Link
              to="/messages"
              className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Messages</span>
            </Link>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Payments</span>
            </button>
          </nav>
        </div>

        {/* Right - Notifications & Profile */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="border-t border-gray-200">
        <nav className="flex px-4 lg:px-6">
          <Link
            to="/job-preview"
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              location.pathname === "/job-preview"
                ? "text-slate-900 border-slate-900"
                : "text-slate-500 hover:text-slate-700 border-transparent"
            }`}
          >
            Job preview
          </Link>
          <Link
            to="/applicants"
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              location.pathname === "/applicants"
                ? "text-slate-900 border-slate-900"
                : "text-slate-500 hover:text-slate-700 border-transparent"
            }`}
          >
            Applicants
          </Link>
          <Link
            to="/match"
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              location.pathname === "/match"
                ? "text-slate-900 border-slate-900"
                : "text-slate-500 hover:text-slate-700 border-transparent"
            }`}
          >
            Match
          </Link>
          <Link
            to="/messages"
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              location.pathname === "/messages"
                ? "text-slate-900 border-slate-900"
                : "text-slate-500 hover:text-slate-700 border-transparent"
            }`}
          >
            Messages
          </Link>
        </nav>
      </div>
    </header>
  );
}
