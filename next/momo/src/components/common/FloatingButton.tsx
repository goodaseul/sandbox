"use client";

import { Plus } from "lucide-react";

export function FloatingButton() {
  return (
    <button className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-point text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
      <Plus className="w-5 h-5" />
      <span className="font-medium hidden sm:inline">모임 만들기</span>
    </button>
  );
}
