"use client";

import useLogin from "@/hooks/useLogin";
import { useState } from "react";

export default function LoginPage() {
  const { mutate: login } = useLogin();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    login(
      {
        email: form.email,
        password: form.password,
      },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
        },
      },
    );
  };
  return (
    <form className="grid gap-4 p-4">
      <input
        className="block w-full"
        name="user-email"
        type="email"
        value={`${form.email}`}
        placeholder="이메일을 입력해주세요."
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="block w-full"
        name="user-password"
        type="password"
        value={`${form.password}`}
        placeholder="비밀번호를 입력해주세요."
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="button" onClick={handleSubmit}>
        로그인
      </button>
    </form>
  );
}
