import { InputType } from "@/constants/input";

type InputProps = {
  id: string;
  type: InputType;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function Input({
  id,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  className,
}: InputProps) {
  return (
    <input
      id={id}
      className={`block w-full p-2 border rounded ${className}`}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
