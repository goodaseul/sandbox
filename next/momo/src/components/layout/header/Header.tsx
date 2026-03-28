import Link from "next/link";
import Profile from "./Profile";
import Menus from "./Menus";

export default function Header() {
  return (
    <>
      <header
        className="sticky top-0 z-50 bg-background border-b border-border/40
            flex items-center justify-between 
            px-4 md:w-auto md:px-6 xl:w-7xl xl:m-auto
            h-12.5 md:h-22"
      >
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xl font-bold text-point bg-foreground px-2 py-1 rounded-lg"
          >
            MOMO
          </Link>

          <Menus />
        </div>
        <Profile />
      </header>
    </>
  );
}
