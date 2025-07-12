import { Header } from "../components/Header";

export default function Messages() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center justify-center h-[calc(100vh-120px)]">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-4xl text-gray-400">💬</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Messages Page
          </h1>
          <p className="text-gray-600">Page Yet To Be Implemented</p>
        </div>
      </div>
    </div>
  );
}
