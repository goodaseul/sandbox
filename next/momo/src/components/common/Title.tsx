export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-left text-background mb-8">
      {children}
    </h2>
  );
}
