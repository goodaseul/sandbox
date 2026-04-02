"use client";

import Image from "next/image";
import { Heart, User, Clock } from "lucide-react";
import { twMerge } from "tailwind-merge";
interface MeetupCardProps {
  id: number;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  image: string;
}

export function MeetupCard({
  id,
  name,
  dateTime,
  registrationEnd,
  location,
  participantCount,
  capacity,
  image,
}: MeetupCardProps) {
  const participantPercentage = (participantCount / capacity) * 100;
  const isFull = participantCount >= capacity;

  const now = new Date();
  const regEnd = new Date(registrationEnd);
  const diffHours = (regEnd.getTime() - now.getTime()) / (1000 * 60 * 60);
  const deadlineType =
    diffHours <= 24 ? "urgent" : diffHours <= 72 ? "soon" : "normal";

  return (
    <div className="bg-card rounded-2xl sm:rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-48 lg:w-56 h-48 sm:h-auto sm:aspect-square shrink-0">
          <Image
            src={image ?? "https://via.placeholder.com/400x400"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                  {name}
                </h3>
                {/* {isConfirmed && (
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                    <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 text-primary-foreground"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    개설확정
                  </span>
                )} */}
              </div>
            </div>
            <button className="p-1 hover:bg-muted rounded-full transition-colors shrink-0">
              <Heart
                className={twMerge(
                  "w-5 h-5",
                  true ? "fill-red-500 text-red-500" : "text-muted-foreground",
                )}
              />
            </button>
          </div>

          {/* Location */}
          <p className="text-sm text-muted-foreground mb-3">
            위치 &nbsp;{location}
          </p>

          {/* Date & Time & Deadline */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-muted rounded-md text-sm text-foreground">
              {dateTime}
            </span>
            <span className="px-3 py-1 bg-muted rounded-md text-sm text-foreground">
              {registrationEnd}
            </span>
            <span
              className={twMerge(
                "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium",
                deadlineType === "urgent"
                  ? "bg-orange-100 text-orange-600"
                  : deadlineType === "soon"
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground",
              )}
            >
              <Clock className="w-3.5 h-3.5" />
              {registrationEnd}
            </span>
          </div>

          <div className="mt-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <User className="w-4 h-4 text-muted-foreground shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className={twMerge(
                      "h-full rounded-full transition-all",
                      isFull ? "bg-muted-foreground" : "bg-primary",
                    )}
                    style={{
                      width: `${Math.min(participantPercentage, 100)}%`,
                    }}
                  />
                </div>
              </div>
              <span className="text-sm text-muted-foreground shrink-0">
                <span
                  className={twMerge(
                    isFull
                      ? "text-muted-foreground"
                      : "text-primary font-medium",
                  )}
                >
                  {participantCount}
                </span>
                /{capacity}
              </span>
            </div>

            {/* Join Button */}
            <button
              disabled={isFull}
              className={twMerge(
                "px-4 py-2 rounded-xl text-sm font-medium transition-colors shrink-0",
                isFull
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
              )}
            >
              {isFull ? "마감" : "참여하기"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
