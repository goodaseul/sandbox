import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { usePostStore } from "../store/postStore";
import { twMerge } from "tailwind-merge";

export default function Pagination() {
  const currentPage = usePostStore((state) => state.currentPage);
  const totalPages = usePostStore((state) => state.getTotalPages());
  const setCurrentPages = usePostStore((state) => state.setCurrentPages);
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = startPage + maxPagesToShow - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    return pageNumbers;
  };
  const pageNumbers = getPageNumbers();
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow-sm">
      <div className="flex flex-1 justify-between sm:hidden">
        {/* 현재 페이지가 1페이지면 : text-gray-300 cursor-not-allowed  */}
        {/* 그게 아니라면(기본값): text-gray-700 hover:bg-gray-50 */}
        <button
          className={twMerge(
            `relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium`,
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-50"
          )}
          onClick={() => setCurrentPages(Math.max(1, currentPage - 1))}
        >
          Previous
        </button>
        {/* page === totalPage -> text-gray-300 cursor-not-allowed */}
        {/* text-gray-700 hover:bg-gray-50 */}
        <button
          className={twMerge(
            `relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium`,
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-50"
          )}
          onClick={() => setCurrentPages(Math.min(currentPage + 1, totalPages))}
        >
          Next
        </button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing page <span className="font-medium">1</span> of{" "}
            <span className="font-medium">1</span> pages
          </p>
        </div>

        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {/* 클릭하면 1 페이지로 */}
            {/* page === 1 -> cursor-not-allowed */}
            {/* hover:bg-gray-50 */}
            <button
              className={twMerge(
                `relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`,
                currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-50"
              )}
              onClick={() => setCurrentPages(1)}
            >
              <span className="sr-only">First page</span>
              <ChevronsLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* 클릭하면 1페이지 감소 */}
            {/* page === 1 -> cursor-not-allowed */}
            {/* hover:bg-gray-50 */}
            <button
              className={twMerge(
                `relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`,
                currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-50"
              )}
              onClick={() => setCurrentPages(Math.max(1, currentPage - 1))}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* 현재 페이지는 z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 */}
            {/* 그게아니라면(기본값) text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 */}
            {pageNumbers.map((page) => (
              <button
                key={page}
                className={twMerge(
                  `relative inline-flex items-center px-4 py-2 text-sm font-semibold`,
                  currentPage === page
                    ? "z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                )}
                onClick={() => setCurrentPages(page)}
              >
                {page}
              </button>
            ))}

            {/* 클릭하면 맨 1페이지 증가 */}
            {/* 현재 페이지가 총 페이지랑 같으면 : cursor-not-allowed */}
            {/* 그게 아니라면(기본값): hover:bg-gray-50 */}
            <button
              className={twMerge(
                `relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`,
                currentPage === totalPages
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-50"
              )}
              onClick={() =>
                setCurrentPages(Math.min(currentPage + 1, totalPages))
              }
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* 클릭하면 맨 마지막 페이지로 */}
            {/* 현재 페이지가 총 페이지랑 같으면 : cursor-not-allowed */}
            {/* 그게 아니라면(기본값): hover:bg-gray-50 */}
            <button
              className={twMerge(
                `relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:bg-gray-50`,
                currentPage === totalPages
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-50"
              )}
              onClick={() => setCurrentPages(totalPages)}
            >
              <span className="sr-only">Last page</span>
              <ChevronsRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
