import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDown, Check, X } from "lucide-react";

import type { DropdownProps } from "./types";

export const Dropdown = ({
  value,
  options,
  placeholder = "Select...",
  className,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  return (
    <div ref={ref} className={twMerge("relative min-w-70", className)}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={twMerge(
          "w-full bg-white h-full  border-gray-300 border pl-6 pr-3 py-3 sm:py-3.5 rounded-xl flex items-center justify-between hover:bg-gray-50 hover:border-blue-500 transition-colors cursor-pointer",
          open && "border-blue-500 border",
        )}
      >
        <span className="text-gray-800 text-sm sm:text-base">
          {selectedLabel ?? placeholder}
        </span>
        {value ? (
          <X
            className={twMerge("h-5 w-5 text-gray-500 cursor-pointer")}
            onClick={() => onChange("")}
          />
        ) : (
          <ChevronDown
            className={twMerge(
              "h-5 w-5 text-gray-400 transition-transform",
              open && "rotate-180",
            )}
          />
        )}
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 mt-2 z-20 bg-white border border-gray-200 
                     rounded-xl shadow-lg py-1"
        >
          {options.map((opt) => {
            const active = opt.value === value;

            return (
              <button
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={twMerge(
                  "w-full flex items-center justify-between px-4 py-2 text-left cursor-pointer",
                  "hover:bg-gray-100 transition",
                  active && "bg-gray-100 font-medium",
                )}
              >
                {opt.label}
                {active && <Check className="h-4 w-4 text-blue-500" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
