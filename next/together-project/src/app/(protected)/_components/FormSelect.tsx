"use client";

import FormLabel from "./FormLabel";
import FormNotice from "./FormNotice";

type Option<T extends string> = {
  label: string;
  value: T;
};

type FormSelectProps<T extends string> = {
  id: string;
  label: string;
  required?: boolean;
  value: T;
  options: readonly T[];
  helperText?: string;
  onChange: (value: T) => void;
};

export default function FormSelect<T extends string>({
  id,
  label,
  required,
  value,
  options,
  helperText,
  onChange,
}: FormSelectProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <FormLabel id={id} label={label} required={required} />
      <div className="relative">
        <select
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
          className="
          w-full
          p-2
          pr-10
          border
          rounded-md
          text-sm
          appearance-none
          focus:outline-none
          focus:ring-1
          focus:ring-point
          focus:border-point
        "
        >
          <option value="" disabled>
            선택해주세요
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <svg
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <FormNotice helperText={helperText} />
    </div>
  );
}
