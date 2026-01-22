"use client";

import { useState } from "react";
import Input from "../_components/Input";
import Form from "../_components/Form";
import Button from "@/components/Button";
import useSignInMutation from "@/hooks/queries/auth/useSignInMutation";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { mutate: signIn } = useSignInMutation();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    signIn(
      { email: form.email, password: form.password },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: (error) => {
          alert("로그인 실패");
          console.error(error);
        },
      },
    );
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

      <Button type="submit" onClick={() => handleSignIn}>
        로그인
      </Button>
    </Form>
  );
}
