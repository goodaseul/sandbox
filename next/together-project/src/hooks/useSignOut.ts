"use client";

import { useRouter } from "next/navigation";
import useSignOutMutation from "./queries/auth/useSignOutMutation";

export function useSignOut() {
  const router = useRouter();
  const { mutateAsync: signOut } = useSignOutMutation();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/signin");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return handleSignOut;
}
