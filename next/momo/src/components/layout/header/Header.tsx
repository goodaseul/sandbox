import Link from "next/link";
import Menus from "./Menus";
import Profile from "./Profile";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/40">
      <div className="flex items-center justify-between h-14 md:h-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 md:gap-6 min-w-0">
          <Link
            href="/"
            className="text-base md:text-xl font-bold text-point border border-foreground rounded-lg px-2 py-1 shrink-0"
          >
            momo
          </Link>

          <Menus />
        </div>

        <Profile />
      </div>
    </header>
  );
}
