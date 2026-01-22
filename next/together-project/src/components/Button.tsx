type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick: () => void;
};

export default function Button({
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className="w-full">
      {children}
    </button>
  );
}
