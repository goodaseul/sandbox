import { Eye } from "lucide-react";

export default function PostCard({ id, title, views }: Posts) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100">
      <div className="h-2 bg-gradient-to-r from-indigo-500 to-teal-500"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {title}
          </h2>
          <div className="flex items-center text-gray-500 font-medium text-sm">
            <Eye className="h-4 w-4 mr-1" />
            <span>{views}</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
            ID: {id}
          </span>
        </div>
      </div>
    </div>
  );
}
