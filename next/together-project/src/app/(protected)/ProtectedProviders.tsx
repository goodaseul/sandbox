"use client";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth(true);

  if (isLoading) return null;
  if (!user) return null;

  return <>{children}</>;
}
