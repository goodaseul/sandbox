import { Suspense } from "react";
import ProtectedProviders from "./ProtectedProviders";
import Loading from "./loading";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <ProtectedProviders>{children}</ProtectedProviders>
    </Suspense>
  );
}
