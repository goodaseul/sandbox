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
import { toast } from "sonner";
import { useSignUpMutation } from "@/src/hooks/queries/auth";
import ErrorNotice from "@/src/components/common/ErrorNotice";

interface JoinInputs {
  name: string;
  email: string;
  company: string;
  password: string;
  passwordConfirm: string;
}

export default function JoinPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<JoinInputs>({
    mode: "onChange",
  });

  const { mutateAsync: signUp } = useSignUpMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");
  const onSubmit: SubmitHandler<JoinInputs> = async (data) => {
    const request = {
      name: data.name,
      email: data.email,
      password: data.password,
      companyName: data.company,
    };
    try {
      await signUp(request);
      toast.success("회원가입이 되었습니다.");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <main className="py-10">
      <section className="w-full max-w-md mx-auto rounded-3xl p-8 shadow-sm bg-foreground text-background backdrop:blur">
        <Title>회원가입</Title>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              type="text"
              id="name"
              placeholder="이름을 입력해주세요"
              {...register("name", {
                required: "이름은 필수입니다.",
              })}
            />
            <ErrorNotice>{errors.name?.message}</ErrorNotice>
          </div>

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
            <Label htmlFor="company">회사명</Label>
            <Input
              type="text"
              id="company"
              placeholder="회사명을 입력해주세요"
              {...register("company", {
                required: "회사명은 필수입니다.",
              })}
            />
            <ErrorNotice>{errors.company?.message}</ErrorNotice>
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

              <ShowPassword
                onClick={() => setShowPassword(!showPassword)}
                show={showPassword}
              />
            </div>
            <ErrorNotice>{errors.passwordConfirm?.message}</ErrorNotice>
          </div>

          <div className="space-y-2">
            <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                id="passwordConfirm"
                placeholder="비밀번호를 작성해주세요"
                {...register("passwordConfirm", {
                  required: "비밀번호를 다시 한번 작성해주세요.",
                  validate: (value) =>
                    value === password || "비밀번호가 일치하지 않습니다.",
                })}
              />
              <ShowPassword
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                show={showConfirmPassword}
              />
            </div>
            <ErrorNotice>{errors.passwordConfirm?.message}</ErrorNotice>
          </div>

          <Button type="submit" disabled={!isValid}>
            회원가입
          </Button>
        </form>

        <Notice variant="center">
          이미 회원이신가요?{" "}
          <Link href="/login" className="text-point underline">
            로그인
          </Link>
        </Notice>
      </section>
    </main>
  );
}
