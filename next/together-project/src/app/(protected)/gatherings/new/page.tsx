"use client";
import { createGatherings, uploadImage } from "@/api/gatherings";
import { GatheringsRequest } from "@/api/types/gatherings";
import { LOCATIONS, GATHERING_TYPES } from "@/constants/gatherings";
import Form from "@/components/Form";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as Slider from "@radix-ui/react-slider";
import FormSelect from "../_components/FormSelect";
import FormInput from "../_components/FormInput";
import FormNotice from "../_components/FormNotice";
import FormImageUpload from "../_components/FormImageUpload";
import FormDatePicker from "../_components/FormDatePicker";
import { validateForm } from "./validator";

const MAX_IMAGE_BYTES = 2 * 1024 * 1024;

export default function NewGatherginsPage() {
  const [form, setForm] = useState<GatheringsRequest>({
    location: LOCATIONS[0],
    type: GATHERING_TYPES[0],
    name: "",
    dateTime: "",
    registrationEnd: "",
    capacity: 5,
    image: undefined,
  });

  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [registrationEnd, setRegistrationEnd] = useState<Date | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const RANGE_LABEL_ID = "create-gathering-range-label";

  const toServerDateTime = (date: Date) => {
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate(),
    )}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds(),
    )}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateForm(form);
    if (error) {
      alert(error);
      return;
    }

    try {
      let imageUrl: string | undefined;

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      await createGatherings({
        ...form,
        image: imageUrl,
      });

      alert("생성 완료");
    } catch (e) {
      console.log(e);
      alert("생성 실패");
    }
  };

  return (
    <div className="p-5">
      <Form title="모임 생성" onSubmit={handleSubmit}>
        <FormSelect
          id="location"
          label="모임 지역"
          required
          value={form.location}
          options={LOCATIONS}
          helperText="모임이 진행될 지역을 선택해주세요."
          onChange={(value) => setForm({ ...form, location: value })}
        />

        <FormSelect
          id="type"
          label="모임 유형"
          required
          value={form.type}
          options={GATHERING_TYPES}
          onChange={(value) => setForm({ ...form, type: value })}
        />

        <FormInput
          id="create-gathering-name"
          label="모임 이름"
          required
          value={form.name}
          placeholder="모임의 이름을 입력해주세요."
          helperText="참여자에게 보여질 모임 이름입니다."
          onChange={(value) => setForm({ ...form, name: value })}
        />

        <FormDatePicker
          id="create-gathering-date"
          label="모임 날짜"
          required
          value={dateTime}
          placeholder="모임 날짜를 선택해주세요."
          onChange={(date) => {
            setDateTime(date);
            if (date) {
              setForm((prev) => ({
                ...prev,
                dateTime: toServerDateTime(date),
              }));
            }
          }}
        />

        <FormDatePicker
          id="create-gathering-registration-end"
          label="모집 마감 날짜"
          required
          value={registrationEnd}
          placeholder="모집 마감 날짜를 선택해주세요."
          onChange={(date) => {
            setRegistrationEnd(date);
            if (date) {
              setForm((prev) => ({
                ...prev,
                registrationEnd: toServerDateTime(date),
              }));
            }
          }}
        />

        <div>
          <span id={RANGE_LABEL_ID} className="mb-2 block text-sm font-medium">
            모임 정원 <span className="text-red-500"> *</span>
          </span>
          <Slider.Root
            aria-labelledby={RANGE_LABEL_ID}
            value={[form.capacity]}
            onValueChange={([value]) => setForm({ ...form, capacity: value })}
            min={5}
            max={20}
            step={1}
            className="relative flex items-center w-full h-5"
          >
            <Slider.Track className="bg-gray-200 relative grow h-1 rounded">
              <Slider.Range className="absolute bg-point h-full rounded" />
            </Slider.Track>
            <Slider.Thumb className="block w-4 h-4 bg-white border rounded-full shadow" />
          </Slider.Root>

          <FormNotice helperText={`참여 인원: ${form.capacity}명 (최소 5명)`} />
        </div>

        <FormImageUpload
          id="create-gathering-image"
          label="모임 이미지"
          value={imageFile}
          onChange={(file) => {
            if (!file) return;
            if (file.size > MAX_IMAGE_BYTES) {
              alert("이미지는 2MB 이하만 가능해.");
              return;
            }
            setImageFile(file);
          }}
        />

        <button type="submit">생성하기</button>
      </Form>
    </div>
  );
}
