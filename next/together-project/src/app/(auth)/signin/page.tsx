"use client";

import { useState } from "react";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import Button from "@/components/Button";
import useSignInMutation from "@/hooks/queries/auth/useSignInMutation";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { mutateAsync: signIn } = useSignInMutation();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signIn({ email: form.email, password: form.password });
      router.push("/gatherings");
    } catch {
      alert("로그인 실패");
    }
  };
  return (
    <Form title={"로그인"} onSubmit={handleSignIn}>
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

      <Button type="submit">로그인</Button>
    </Form>
  );
}
