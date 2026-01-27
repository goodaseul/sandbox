type ButtonProps = {
  children: React.ReactNode;
  variant?: "tab";
  type?: "button" | "submit";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  variant,
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  const tabStyles =
    variant === "tab" && "rounded-md py-1 hover:bg-point transition-all";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex-1 ${className} ${tabStyles}`}
    >
      {children}
    </button>
  );
}
