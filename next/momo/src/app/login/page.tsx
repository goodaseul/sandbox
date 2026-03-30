"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/src/components/common/Input";
import Label from "@/src/components/common/Label";
import ShowPassword from "@/src/components/common/ShowPassword";
import Title from "@/src/components/common/Title";
import Notice from "@/src/components/common/Notice";
import Button from "@/src/components/common/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignInMutation } from "@/src/hooks/queries/auth";
import { toast } from "sonner";
import ErrorNotice from "@/src/components/common/ErrorNotice";

interface LoginInputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInputs>({
    mode: "onChange",
  });
  const { mutateAsync: signIn } = useSignInMutation();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const { token } = await signIn({
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("accessToken", token);
      toast.success("로그인이 되었습니다.");
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  return (
    <main className="py-10">
      <section className="w-full max-w-md mx-auto rounded-3xl p-8 shadow-sm bg-foreground text-background backdrop:blur">
        <Title>로그인</Title>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-background"
        >
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              type="text"
              id="email"
              placeholder="이메일을 입력해주세요"
              {...register("email", {
                required: "이메일은 필수입니다.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "이메일 형식이 아닙니다.",
                },
              })}
            />
            <ErrorNotice>{errors.email?.message}</ErrorNotice>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="비밀번호를 작성해주세요"
                {...register("password", {
                  required: "비밀번호는 필수입니다.",
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
                    message: "비밀번호 형식이 올바르지 않습니다.",
                  },
                })}
              />
              <ErrorNotice>{errors.password?.message}</ErrorNotice>
              <ShowPassword
                onClick={() => setShowPassword(!showPassword)}
                show={showPassword}
              />
            </div>
          </div>

          <Button type="submit" disabled={!isValid}>
            로그인
          </Button>
        </form>
        <Notice variant="center">
          모모가 처음이신가요?{" "}
          <Link href="/join" className="text-point underline">
            회원가입
          </Link>
        </Notice>
      </section>
    </main>
  );
}
