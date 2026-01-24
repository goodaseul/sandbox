"use client";
import useGetUser from "@/hooks/queries/user/useGetUser";
import Link from "next/link";
import Button from "../Button";
import useSignOutMutation from "@/hooks/queries/auth/useSignOutMutation";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: user } = useGetUser();
  const router = useRouter();
  const { mutateAsync: signOut } = useSignOutMutation();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/signin");
    } catch (error) {
      console.error("로그아웃 실패:", error instanceof Error);
    }
  };

  return (
    <header className="flex items-center justify-between p-5">
      <h1 className="text-2xl font-bold text-[#FF6F3C]">
        <Link href="/gatherings">Together</Link>
      </h1>

      <ul className="flex gap-2">
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <Button onClick={handleSignOut}>로그아웃</Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/signin">로그인</Link>
            </li>
            <li>
              <Link href="/signup">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
