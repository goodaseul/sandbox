import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/header/Header";
import Provders from "./provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "momo",
  description:
    "친구, 스터디, 취미 모임까지. momo에서 빠르게 만들고, 쉽게 참여하세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>
        <Provders>
          <Toaster position="top-center" />
          <Header />
          {children}
        </Provders>
      </body>
    </html>
  );
}
