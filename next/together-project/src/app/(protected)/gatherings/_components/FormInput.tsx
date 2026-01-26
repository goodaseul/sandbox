"use client";

import Input from "@/components/Input";
import FormLabel from "./FormLabel";
import { InputType } from "@/constants/input";
import FormNotice from "./FormNotice";

type FormInputProps = {
  id: string;
  label: string;
  type?: InputType;
  value: string;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  onChange: (value: string) => void;
};

export default function FormInput({
  id,
  label,
  required,
  type = "text",
  value,
  placeholder,
  helperText,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <FormLabel id={id} label={label} required={required} />

      <Input
        id={id}
        type={type}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="focus:outline-none
          focus:ring-1
          focus:ring-point
          focus:border-point"
      />
      <FormNotice helperText={helperText} />
    </div>
  );
}
