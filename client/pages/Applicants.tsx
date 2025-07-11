import { Header } from "../components/Header";

export default function Applicants() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="flex items-center justify-center h-[calc(100vh-120px)]">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-slate-200 rounded-full flex items-center justify-center">
            <span className="text-4xl text-slate-400">📋</span>
          </div>
          <h1 className="text-2xl font-semibold text-slate-800 mb-2">
            Applicants Page
          </h1>
          <p className="text-slate-600">Page Yet To Be Implemented</p>
        </div>
      </div>
    </div>
  );
}
