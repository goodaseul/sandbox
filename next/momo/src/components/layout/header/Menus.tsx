import Link from "next/link";

export default function Menus() {
  return (
    <nav className="flex items-center gap-2 md:gap-6 text-xs md:text-sm whitespace-nowrap">
      <Link href="#" className="text-point font-medium">
        모임 찾기
      </Link>

      <Link
        href="#"
        className="flex items-center gap-1 text-text-muted hover:text-foreground"
      >
        찜한 모임
        <span className="flex items-center justify-center w-3 h-3 md:w-4 md:h-4 rounded-full bg-point text-white text-[10px] md:text-xs font-medium">
          5
        </span>
      </Link>

      <Link href="#" className="text-text-muted hover:text-foreground">
        모든 리뷰
      </Link>
    </nav>
  );
}
