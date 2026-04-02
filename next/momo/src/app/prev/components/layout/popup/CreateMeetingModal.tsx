"use client";

import { useState, useRef } from "react";
import { Calendar, X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Label from "../../common/Label";
import Input from "../../common/Input";
import { locationOptions } from "@/src/app/prev/types/gatherings";
import Button from "../../common/Button";
import Title from "../../common/Title";

interface CreateMeetingModalProps {
  open: boolean;
  onClick: (open: boolean) => void;
}

type ServiceType = "office-stretching" | "mindfulness" | "workation" | null;

interface FormData {
  service: ServiceType;
  name: string;
  location: string;
  image: File | null;
  meetingDate: string;
  deadlineDate: string;
  capacity: string;
}

const services = [
  {
    id: "office-stretching" as const,
    name: "달램핏",
    description: "오피스 스트레칭",
  },
  {
    id: "mindfulness" as const,
    name: "달램핏",
    description: "마인드 풀니스",
  },
  {
    id: "workation" as const,
    name: "워케이션",
    description: null,
  },
];

export function CreateMeetingModal({ open, onClick }: CreateMeetingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: null,
    name: "",
    location: "",
    image: null,
    meetingDate: "",
    deadlineDate: "",
    capacity: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      service: null,
      name: "",
      location: "",
      image: null,
      meetingDate: "",
      deadlineDate: "",
      capacity: "",
    });
    onClick(false);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    handleClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
  };

  const canProceedStep1 = formData.service !== null;
  const canProceedStep2 =
    formData.name.trim() !== "" && formData.location !== "";
  const canSubmit =
    formData.meetingDate !== "" &&
    formData.deadlineDate !== "" &&
    formData.capacity !== "";

  if (!open) return null;
  return (
    <div
      onClick={handleClose}
      className="fixed top-0 left-0 w-full h-full z-100 bg-black/80"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-lg gap-0 p-0 mx-auto overflow-hidden"
        // showCloseButton={false}
      >
        <div className="flex justify-between p-6 pb-4 border-b-0">
          <div className="gap-2">
            <p className="text-2xl font-semibold">모임 만들기</p>
            <p className="text-lg text-muted-foreground">
              <span className="font-medium text-foreground">{step}</span>/
              {totalSteps}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1 transition-colors rounded-full hover:bg-muted"
          >
            <X className="size-5 text-muted-foreground" />
            <span className="sr-only">닫기</span>
          </button>
        </div>

        <div className="px-6 pb-6">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-foreground">
                원하시는 서비스를 선택해주세요
              </p>
              <div className="space-y-3">
                {services.map((service) => (
                  <Button
                    key={service.id}
                    onClick={() =>
                      setFormData({ ...formData, service: service.id })
                    }
                    className={twMerge(
                      "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                      formData.service === service.id
                        ? "border-point bg-emerald-50/50"
                        : "border-border hover:border-muted-foreground/30",
                    )}
                  >
                    <div>
                      <p className="font-medium text-point">{service.name}</p>
                      {service.description && (
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Meeting Details */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">모임 이름</Label>
                <Input
                  id="name"
                  placeholder="모임 이름을 작성해주세요"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">장소</Label>
                <select
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-3 border rounded-md h-11"
                >
                  <option value="" disabled>
                    장소를 선택해주세요
                  </option>

                  {locationOptions.map((location) => (
                    <option key={location.id} value={location.label}>
                      {location.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">이미지</Label>
                <div className="flex items-center gap-3">
                  <Input
                    readOnly
                    placeholder="이미지를 첨부해주세요"
                    value={formData.image?.name || ""}
                    className="flex-1 cursor-default h-11"
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 h-11 border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    파일 찾기
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Date and Capacity */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="meetingDate">모임 날짜</Label>
                <div className="relative">
                  <Input
                    id="meetingDate"
                    type="date"
                    placeholder="모임 날짜를 입력해주세요"
                    value={formData.meetingDate}
                    onChange={(e) =>
                      setFormData({ ...formData, meetingDate: e.target.value })
                    }
                    className="pr-10 h-11"
                  />
                  <Calendar className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 size-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadlineDate">마감 날짜</Label>
                <div className="relative">
                  <Input
                    id="deadlineDate"
                    type="date"
                    placeholder="마감 날짜를 입력해주세요"
                    value={formData.deadlineDate}
                    onChange={(e) =>
                      setFormData({ ...formData, deadlineDate: e.target.value })
                    }
                    className="pr-10 h-11"
                  />
                  <Calendar className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 size-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacity">모임 정원</Label>
                <Input
                  id="capacity"
                  type="number"
                  placeholder="모집 정원을 입력해주세요"
                  value={formData.capacity}
                  onChange={(e) =>
                    setFormData({ ...formData, capacity: e.target.value })
                  }
                  className="h-11"
                  min="1"
                />
              </div>
            </div>
          )}

          {/* Footer Buttons */}
          <div className="flex gap-3 mt-8">
            {step === 1 ? (
              <>
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={handleClose}
                >
                  취소
                </Button>
                <Button
                  className="flex-1 h-12 text-white bg-emerald-500 hover:bg-emerald-600"
                  onClick={handleNext}
                  disabled={!canProceedStep1}
                >
                  다음
                </Button>
              </>
            ) : step === 2 ? (
              <>
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={handlePrev}
                >
                  이전
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={handleNext}
                  disabled={!canProceedStep2}
                >
                  다음
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={handlePrev}
                >
                  이전
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12"
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                >
                  모임 만들기
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
