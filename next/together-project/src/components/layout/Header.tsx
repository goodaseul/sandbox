"use client";
import useGetUser from "@/hooks/queries/user/useGetUser";
import Link from "next/link";
import Button from "../Button";
import { useSignOut } from "@/hooks/useSignOut";

export default function Header() {
  const { data: user } = useGetUser();

  const handleSignOut = useSignOut();
  return (
    <header className="flex items-center justify-between p-5">
      <h1 className="text-2xl font-bold text-point">
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
