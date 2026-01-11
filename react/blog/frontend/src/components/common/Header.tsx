import { useState } from "react";
import { Search, PenSquare, LogIn } from "lucide-react";
import { Link } from "react-router";
import AuthProfile from "./AuthProfile";
import { useAuthStore } from "../../store/authStore";

export default function Header() {
  const isLogin = useAuthStore((state) => state.isLogin);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="px-4 py-5 text-white bg-slate-900 md:px-8">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link to="/" className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 mr-2 bg-blue-500 rounded-full">
            <span className="font-bold text-white">S</span>
          </div>
          <span className="text-xl font-bold">SEUL-LOG</span>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className={`bg-slate-800 text-white rounded-full py-1.5 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                isSearchOpen
                  ? "w-40 md:w-60 opacity-100"
                  : "w-0 opacity-0 md:w-40 md:opacity-100"
              }`}
            />
            <Search
              className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 cursor-pointer left-3 top-1/2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>
          <Link
            to="/create-post"
            className="p-1.5 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
          >
            <PenSquare className="w-4 h-4" />
          </Link>
          {!isLogin && (
            <Link
              to="/auth/login"
              className="p-1.5 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
            >
              <LogIn className="w-4 h-4" />
            </Link>
          )}

          {isLogin && <AuthProfile />}
        </div>
      </div>
    </header>
  );
}
