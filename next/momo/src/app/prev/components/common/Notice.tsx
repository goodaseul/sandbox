type Variant = "left" | "center";

interface NoticeProps {
  children: React.ReactNode;
  variant?: Variant;
}

export default function Notice({ children, variant = "left" }: NoticeProps) {
  const isVariant = variant === "left" ? "text-left" : "text-center";
  return <p className={`mt-3 text-sm ${isVariant}`}>{children}</p>;
}
