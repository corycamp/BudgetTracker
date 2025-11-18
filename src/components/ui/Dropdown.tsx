"use client";

import { useState, useRef, useEffect } from "react";

export default function Dropdown({
  label = "Select an option",
  options,
  onSelect,
}: {
  label?: string;
  options: string[];
  onSelect: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className="relative w-full" ref={ref}>
      {/* trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full bg-white border border-gray-300 px-4 py-2 rounded-lg flex justify-between items-center ${
          selected ? "text-black" : "text-gray-400"
        }`}
      >
        <span>{selected ?? label}</span>
        <span className="text-gray-500">▼</span>
      </button>

      {/* menu */}
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          {options?.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
