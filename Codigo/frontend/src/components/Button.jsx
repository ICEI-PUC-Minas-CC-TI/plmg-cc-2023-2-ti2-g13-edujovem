import React from 'react';
import { cva } from 'class-variance-authority'

const ButtonVariants = cva(
  "h-fit uppercase tracking-normal transition-colors duration-150",
  {
    variants: {
      intent: {
        basic: "text-white",
        outline:
          "text-white border-solid border border-white border-2 hover:bg-black hover:border-transparent",
        emphasis1:
          "bg-[#FF8400] text-white border border-[#FF8400] hover:bg-[#D66F00] hover:border-[#D66F00]",
        emphasis2: 'bg-[#A2A2A2] hover:bg-[#D66F00 text-white font-bold hover:bg-[#D66F00]',
        default:
          "bg-gray-500 hover:bg-gray-600",
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
        oneOfThree: ["text-base", "py-2", "px-4", "w-[32%]"],
        one: ["text-base", "py-2", "px-4", "w-full"],
        large: ["text-lg", "py-4", "px-8"],
      },
      roundness: {
        square: "rounded-none",
        round: "rounded-md",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "medium",
      roundness: "round"
    },
  }
);


export default function Button({ intent, size, roundness, onClick, children }) {
  return (
    <button onClick={onClick} className={ButtonVariants({ intent, size, roundness })}>{children}</button>
  )
}