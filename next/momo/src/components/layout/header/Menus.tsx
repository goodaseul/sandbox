import Link from "next/link";

export default function Menus() {
  return (
    <nav className="flex items-center gap-4 text-sm">
      <Link href="#" className="text-point font-medium">
        모임 찾기
      </Link>
      <Link
        href="#"
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
      >
        찜한 모임
        <span className="flex items-center justify-center w-3 h-3 -mt-4 rounded-full bg-point text-white text-xs font-medium">
          5
        </span>
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground">
        모든 리뷰
      </Link>
    </nav>
  );
}
