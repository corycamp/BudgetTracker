"use client";

import React, { useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  // lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      onClick={onClose} // click outside closes
    >
      <div
        className="bg-[#1C1E24] rounded-xl p-6 shadow-xl w-[90%] max-w-md"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
      >
        {children}
      </div>
    </div>
  );
}
