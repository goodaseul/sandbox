type InputType = {
  type: "email" | "password" | "text";
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
}: InputType) {
  return (
    <input
      className="block w-full p-2 border rounded"
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
