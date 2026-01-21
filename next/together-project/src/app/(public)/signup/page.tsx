"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../_components/Input";
import useSignUpMutation from "@/hooks/auth/useSignUpMutation";

export default function SignUpPage() {
  const { mutate: signup } = useSignUpMutation();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    companyName: "",
  });

  const handlesignup = () => {
    if (form.password !== form.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    signup(
      {
        email: form.email,
        password: form.password,
        name: form.name,
        companyName: form.companyName,
      },
      {
        onSuccess: () => {
          // Todo: toast 적용
          alert("회원가입 완료!");
          router.push("/login");
        },
        onError: (error) => {
          if (error instanceof Error) {
            console.error(error.message);
            // Todo: toast 적용
            alert(error.message);
          } else {
            alert("회원가입 실패!");
          }
        },
      },
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">회원가입</h1>

        <Input
          type="email"
          name="user-email"
          value={`${form.email}`}
          placeholder="이메일을 적어주세요."
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Input
          type="text"
          name="user-name"
          value={`${form.name}`}
          placeholder="닉네임을 적어주세요."
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <Input
          type="password"
          name="user-password"
          value={`${form.password}`}
          placeholder="비밀번호를 적어주세요."
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Input
          type="password"
          name="user-passwordConfirm"
          value={`${form.passwordConfirm}`}
          placeholder="비밀번호를 다시 적어주세요.."
          onChange={(e) =>
            setForm({ ...form, passwordConfirm: e.target.value })
          }
        />

        <Input
          type="text"
          name="user-companyName"
          value={`${form.companyName}`}
          placeholder="회사이름을 적어주세요.."
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        />

        <button
          type="button"
          onClick={handlesignup}
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
