"use client";

import Button from "@/components/Button";
import FormLabel from "./FormLabel";

type FormImageUploadProps = {
  id: string;
  label: string;
  value: File | null;
  required?: boolean;
  onChange: (file: File | null) => void;
};

export default function FormImageUpload({
  id,
  label,
  value,
  required,
  onChange,
}: FormImageUploadProps) {
  return (
    <div className="flex flex-col gap-2">
      <FormLabel id={id} label={label} required={required} />

      <label className="block cursor-pointer w-fit">
        <input
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            onChange(file);
          }}
        />

        <div className="px-4 py-2 border rounded-md text-sm text-white hover:bg-point hover:border-point transition-all">
          이미지 선택
        </div>
      </label>

      {value && (
        <div className="relative w-40 h-40">
          <img
            src={URL.createObjectURL(value)}
            alt="미리보기"
            className="object-cover rounded"
          />
          <button
            type="button"
            onClick={() => onChange(null)}
            className="
              absolute
              top-1
              right-1
              rounded-full
              bg-black/60
              text-white
              text-xl
              flex
              items-center
              justify-center
              hover:bg-point
              transition-all
              px-2 
            "
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
