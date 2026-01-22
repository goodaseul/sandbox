"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../_components/Input";
import useSignUpMutation from "@/hooks/queries/auth/useSignUpMutation";
import Button from "@/components/Button";
import Form from "../_components/Form";

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
    <Form title={"회원가입"}>
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
        onChange={(e) => setForm({ ...form, passwordConfirm: e.target.value })}
      />

      <Input
        type="text"
        name="user-companyName"
        value={`${form.companyName}`}
        placeholder="회사이름을 적어주세요.."
        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
      />

      <div className="flex justify-between gap-2">
        <Button onClick={handlesignup}>가입하기</Button>
        <Button onClick={() => router.push("/login")}>로그인</Button>
      </div>
    </Form>
  );
}
