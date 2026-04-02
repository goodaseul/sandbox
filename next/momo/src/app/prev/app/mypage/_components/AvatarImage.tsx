import Image from "next/image";

export default function AvatarImage({ src }: { src?: string }) {
  return (
    <Image
      src={src || "/layout/default-profile.png"}
      alt="profile"
      width={110}
      height={110}
      className="rounded-full object-cover"
    />
  );
}
