"use client";

import { Heart, User } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Button from "@/src/components/common/Button";
import Image from "next/image";

interface MeetupCardProps {
  title: string;
  imageUrl: string;
  currentParticipants: number;
  maxParticipants: number;
  location: string;
  date: string;
  time: string;
  isCompleted?: boolean;
}

export function MeetupCard({
  title,
  imageUrl,
  currentParticipants,
  maxParticipants,
  location,
  date,
  time,
  isCompleted,
}: MeetupCardProps) {
  return (
    <div className="border border-border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full h-48 md:w-44 md:h-auto shrink-0">
          <Image
            src={imageUrl || "https://picsum.photos/seed/meetup/400/300"}
            alt={title}
            fill
            className="object-cover"
          />

          <button className="absolute top-3 right-3 w-9 h-9 bg-background/80 backdrop-blur rounded-full flex items-center justify-center">
            <Heart
              className={twMerge(
                "w-4 h-4",
                true ? "fill-point text-point" : "text-text-muted",
              )}
            />
          </button>
        </div>

        <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <span
                className={twMerge("text-xs px-2 py-1 rounded-full border")}
              ></span>
            </div>

            <h3 className="font-semibold text-base md:text-lg mb-2 line-clamp-2">
              {title}
            </h3>

            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {currentParticipants}/{maxParticipants}
              </div>

              <span className="hidden md:block">|</span>

              <span className="truncate">
                {location} · {date} · {time}
              </span>
            </div>
          </div>

          {isCompleted && (
            <div className="mt-4 md:mt-0 md:flex md:justify-end">
              <Button
                type="button"
                variant={isCompleted ? "primary" : "outline"}
                className="w-full md:w-auto md:px-5 md:py-2"
              >
                {isCompleted ? "리뷰 작성하기" : "예약 취소하기"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
