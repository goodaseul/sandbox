type ButtonType = "submit" | "button";
type ButtonVariant = "primary" | "outline" | "ghost" | "muted";

interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  type = "button",
  disabled = false,
  variant = "primary",
  children,
  className,
  onClick,
}: ButtonProps) {
  const baseStyle =
    "w-full py-3 px-4 mt-4 rounded-xl font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-point text-point-foreground hover:opacity-90",

    outline: "border border-point text-point bg-transparent hover:bg-point/10",

    ghost: "text-foreground hover:bg-surface",

    muted: "bg-surface text-text-secondary hover:bg-border",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
