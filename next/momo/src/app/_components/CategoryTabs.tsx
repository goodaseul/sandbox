"use client";

import { twMerge } from "tailwind-merge";

const categories = [
  { id: "dalramfit", label: "달램핏" },
  { id: "workation", label: "워케이션" },
];

interface CategoryTabsProps {
  active: string;
  onChange: (category: string) => void;
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex border-b border-border">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={twMerge(
            "flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors relative",
            active === category.id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <span>{category.label}</span>
          {active === category.id && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
          )}
        </button>
      ))}
    </div>
  );
}
