export default function LoadingState() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100 animate-pulse"
        >
          <div className="h-2 bg-gray-300"></div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4 g">
              <div className="h-7 bg-gray-300 rounded w-2/3"></div>
              <div className="flex items-center text-gray-500 font-medium text-sm">
                <div className="h-7 w-6 mr-1 bg-gray-300 rounded"></div>
                <div className="h-7 bg-gray-300 rounded w-4"></div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center h-5">
              <div className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-300 h-5 w-17"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
