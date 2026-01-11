import { AlertTriangle } from "lucide-react";

export default function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">
          Something went wrong
        </h3>
        <p className="text-gray-600">에러가 발생했습니다.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Refresh page
        </button>
      </div>
    </div>
  );
}
