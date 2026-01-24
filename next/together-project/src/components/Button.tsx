type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`w-full ${className}`}>
      {children}
    </button>
  );
}
