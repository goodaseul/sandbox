import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <Link href="/">
      <Image
        width={42}
        height={42}
        sizes="(max-width: 748px) 34px, 34px"
        priority
        src="/layout/default-profile.png"
        alt="기본 프로필 이미지"
      />
    </Link>
  );
}
