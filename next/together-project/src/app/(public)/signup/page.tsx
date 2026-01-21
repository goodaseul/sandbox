"use client";

import { signUp } from "@/api/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    companyName: "",
  });

  const handleSubmit = async () => {
    if (form.password !== form.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await signUp({
        email: form.email,
        password: form.password,
        name: form.name,
        companyName: form.companyName,
      });
      alert("회원가입 완료!");
      router.push("/login");
    } catch (error) {
      alert("회원가입 실패!");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">회원가입</h1>

        <input
          className="block w-full p-2 border rounded"
          type="email"
          value={form.email}
          placeholder="이메일"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="block w-full p-2 border rounded"
          type="text"
          value={form.name}
          placeholder="닉네임"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="block w-full p-2 border rounded"
          type="password"
          value={form.password}
          placeholder="비밀번호"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          className="block w-full p-2 border rounded"
          type="password"
          value={form.passwordConfirm}
          placeholder="비밀번호 확인"
          onChange={(e) =>
            setForm({ ...form, passwordConfirm: e.target.value })
          }
        />

        <input
          className="block w-full p-2 border rounded"
          type="text"
          value={form.companyName}
          placeholder="회사"
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          가입하기
        </button>

        <button
          type="button"
          onClick={() => router.push("/login")}
          className="w-full p-2 border rounded hover:bg-gray-100"
        >
          로그인하러 가기
        </button>
      </div>
    </div>
  );
}
