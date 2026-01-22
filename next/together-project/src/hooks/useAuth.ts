// hooks/useAuth.ts
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useGetUser from "./queries/user/useGetUser";

export function useAuth(requireAuth: boolean = false) {
  const router = useRouter();
  const { data: user, isLoading } = useGetUser();

  useEffect(() => {
    if (!requireAuth || isLoading) return;

    const hasToken = !!localStorage.getItem("token");

    if (!hasToken) {
      router.replace("/signin");
    }
  }, [requireAuth, isLoading, router]);

  return {
    user,
    isLoading,
    isAuthenticated: !!user && !!user,
  };
}
