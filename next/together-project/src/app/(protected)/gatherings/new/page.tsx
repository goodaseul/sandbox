"use client";
import { GatheringsRequest } from "@/api/gatherings";
import { LOCATIONS, GATHERING_TYPES } from "@/constants/gatherings";
import Form from "@/components/Form";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as Slider from "@radix-ui/react-slider";
import FormSelect from "../../_components/FormSelect";
import FormInput from "../../_components/FormInput";
import FormNotice from "../../_components/FormNotice";
import FormImageUpload from "../../_components/FormImageUpload";
import FormDatePicker from "../../_components/FormDatePicker";

export default function NewGatherginsPage() {
  const [form, setForm] = useState<GatheringsRequest>({
    location: LOCATIONS[0],
    type: GATHERING_TYPES[0],
    name: "",
    dateTime: "",
    capacity: 5,
    image: null,
    registrationEnd: "",
  });
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const RANGE_LABEL_ID = "create-gathering-range-label";

  return (
    <div className="p-5">
      <Form title="모임 생성" onSubmit={() => console.log("?")}>
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
          onChange={setDateTime}
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
          value={form.image}
          onChange={(file) => setForm({ ...form, image: file })}
        />
      </Form>
    </div>
  );
}
