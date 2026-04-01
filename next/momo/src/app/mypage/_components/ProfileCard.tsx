import Avatar from "./Avatar";
import AvatarImage from "./AvatarImage";
// import Image from "next/image";

interface ProfileCardProps {
  name: string;
  company: string;
  email: string;
  avatarUrl?: string;
}

export function ProfileCard({
  name,
  company,
  email,
  avatarUrl,
}: ProfileCardProps) {
  return (
    <div className="bg-accent border-0 shadow-none">
      <div className="py-6">
        <div className="items-center gap-4">
          <div className="w-28 h-28 mx-auto border rounded-full">
            <Avatar>
              <AvatarImage src={avatarUrl} />
            </Avatar>
          </div>
          <div className="">
            <div className="gap-6">
              <span className="font-medium text-foreground">{name}</span>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">회사</span>
                <span className="text-foreground">{company}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">이메일</span>
                <span className="text-foreground">{email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
