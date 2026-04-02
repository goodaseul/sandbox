interface NoticeProps {
  children: React.ReactNode;
}

export default function ErrorNotice({ children }: NoticeProps) {
  return <p className={`mt-3 text-sm text-left text-red-800`}>{children}</p>;
}
