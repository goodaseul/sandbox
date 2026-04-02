type Variant = "white" | "dark";

interface TitleProps {
  children: React.ReactNode;
  variant?: Variant;
}

export default function Title({ children, variant = "dark" }: TitleProps) {
  return (
    <h2
      className={`
        text-2xl font-semibold mb-8
        ${variant === "dark" ? "text-black" : "text-white"}
      `}
    >
      {children}
    </h2>
  );
}
