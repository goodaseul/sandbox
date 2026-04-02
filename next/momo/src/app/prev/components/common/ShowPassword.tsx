import { Eye, EyeOff } from "lucide-react";

export default function ShowPassword({
  onClick,
  show,
}: {
  onClick: () => void;
  show: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-background"
    >
      {show ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
    </button>
  );
}
