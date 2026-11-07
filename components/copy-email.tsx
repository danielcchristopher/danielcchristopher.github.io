"use client";
import { useState } from "react";
export function CopyEmail() {
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText("dccchidera@gmail.com");
      setMessage("Email copied");
    } catch {
      setMessage(
        "Copy unavailable. Select the email address or use the email link.",
      );
    }
  }
  return (
    <div className="copy-email-wrap">
      <button
        className="button copy-email"
        type="button"
        aria-label="Copy email address"
        onClick={copy}
      >
        <svg
          aria-hidden="true"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <rect x="8" y="8" width="12" height="13" rx="2" />
          <path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4" />
        </svg>
        Copy email
      </button>
      <span role="status">{message}</span>
    </div>
  );
}
