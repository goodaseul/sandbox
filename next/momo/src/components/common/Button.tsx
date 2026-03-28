type ButtonType = "submit" | "button";
interface ButtonProps {
  type: ButtonType;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  type = "button",
  disabled,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={!disabled}
      className="w-full py-3 px-4 mt-4 bg-muted text-muted-foreground rounded-xl font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed hover:bg-point hover:text-white disabled:hover:bg-muted disabled:hover:text-muted-foreground"
    >
      {children}
    </button>
  );
}
