import React from "react";

export default function Divider() {
  return (
    <div aria-hidden="true" className="w-full flex justify-center my-2 px-6">
      <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600 opacity-60" />
    </div>
  );
}