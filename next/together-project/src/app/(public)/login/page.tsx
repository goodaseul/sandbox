"use client";

import { useState } from "react";
import Input from "../_components/Input";
import { useRouter } from "next/navigation";
import usesigninMutation from "@/hooks/auth/useSignInMutation";

export default function LoginPage() {
  const { mutate: signin } = usesigninMutation();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handlesignin = () => {
    signin(
      {
        email: form.email,
        password: form.password,
      },
      {
        onSuccess: () => {
          router.push("https://www.naver.com/");
        },
      },
    );
  };
  return (
    <form className="grid gap-4 p-4">
      <Input
        name="user-email"
        type="email"
        value={`${form.email}`}
        placeholder="이메일을 입력해주세요."
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <Input
        name="user-password"
        type="password"
        value={`${form.password}`}
        placeholder="비밀번호를 입력해주세요."
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="button" onClick={handlesignin}>
        로그인
      </button>
    </form>
  );
}
