"use client";
import { useUser } from "@/src/hooks/queries/auth";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  const { data: user } = useUser();

  const imageSrc =
    user?.image && user.image.startsWith("http")
      ? user.image
      : "/layout/default-profile.png";

  return (
    <Link href={user ? "/mypage" : "/login"}>
      <Image
        width={42}
        height={42}
        sizes="(max-width: 748px) 34px, 34px"
        priority
        src={imageSrc}
        alt="기본 프로필 이미지"
      />
    </Link>
  );
}
