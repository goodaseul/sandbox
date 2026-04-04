"use client";
import Link from "next/link";
import { useState } from "react";
import useSignInMutation from "./hook/auth/useSignInMutation";

export default function Home() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { mutate: singIn } = useSignInMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    singIn({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <div className="px-10 py-5">
      <section className="min-h-screen">
        <main className="">
          <h1>나눠서 적용해보기</h1>
          <form onSubmit={handleSubmit}>
            <input
              value={form.email}
              type="text"
              placeholder="이메일을 작성해주세요."
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              value={form.password}
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit">제출</button>
          </form>
          <p>
            <Link href="./getdata">GET data</Link>
          </p>
          <p>
            <Link href="./createdata">CREATE data</Link>
          </p>
        </main>
      </section>
    </div>
  );
}
