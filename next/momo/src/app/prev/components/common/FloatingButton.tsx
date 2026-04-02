"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateMeetingModal } from "../layout/popup/CreateMeetingModal";

export function FloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-point text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        <Plus className="w-5 h-5" />
        <span className="font-medium hidden sm:inline">모임 만들기</span>
      </button>

      <CreateMeetingModal open={isModalOpen} onClick={setIsModalOpen} />
    </>
  );
}
