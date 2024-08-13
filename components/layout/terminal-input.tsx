import React, { useEffect, useRef, useState } from "react";

export const TerminalInput: React.FC = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLDivElement>(null);

  const updateCaret = () => {
    if (!inputRef.current || !caretRef.current) return;
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const inputRect = inputRef.current.getBoundingClientRect();

      caretRef.current.style.left = `${rect.left - inputRect.left}px`;
      caretRef.current.style.top = `${rect.top - inputRect.top}px`;
    }
  };

  useEffect(() => {
    const handleUpdate = () => {
      updateCaret();
    };

    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.addEventListener("keyup", handleUpdate);
      inputElement.addEventListener("click", handleUpdate);
      inputElement.addEventListener("mousemove", handleUpdate);
      inputElement.addEventListener("keydown", handleUpdate);

      return () => {
        inputElement.removeEventListener("keyup", handleUpdate);
        inputElement.removeEventListener("click", handleUpdate);
        inputElement.removeEventListener("mousemove", handleUpdate);
        inputElement.removeEventListener("keydown", handleUpdate);
      };
    }
  }, []);

  return (
    <div className="relative h-auto w-full bg-inherit outline-none whitespace-pre-wrap caret-muted" contentEditable ref={inputRef} suppressContentEditableWarning>
      <div className="absolute border w-1.5 h-4 border-foreground transition-opacity" ref={caretRef}></div>
    </div>
  );
};
