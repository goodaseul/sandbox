import { GatheringsRequest } from "@/api/types/gatherings";

export const validateForm = (data: GatheringsRequest) => {
  if (!data.name.trim()) return "모임 이름을 입력해줘.";
  if (!data.dateTime) return "모임 날짜를 선택해줘.";
  if (!data.registrationEnd) return "마감 날짜를 선택해줘.";

  const meeting = new Date(data.dateTime);
  const end = new Date(data.registrationEnd);

  if (!(end.getTime() < meeting.getTime())) {
    return "마감 날짜는 모임 날짜보다 이전이어야 해.";
  }

  return null;
};
