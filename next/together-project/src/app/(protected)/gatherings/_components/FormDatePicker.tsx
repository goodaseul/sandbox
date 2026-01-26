"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormLabel from "./FormLabel";

type FormDatePickerProps = {
  id: string;
  label: string;
  value: Date | null;
  required?: boolean;
  placeholder?: string;
  onChange: (date: Date | null) => void;
};

export default function FormDatePicker({
  id,
  label,
  value,
  required,
  placeholder = "날짜를 선택해주세요",
  onChange,
}: FormDatePickerProps) {
  return (
    <div className="flex flex-col gap-1">
      <FormLabel id={id} label={label} required={required} />

      <DatePicker
        id={id}
        selected={value}
        onChange={onChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText={placeholder}
        className="w-full p-2 border rounded-md focus:outline-none
          focus:ring-1
          focus:ring-point
          focus:border-point"
        wrapperClassName="w-full"
      />
    </div>
  );
}
