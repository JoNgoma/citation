import * as React from "react";

import { cn } from "@/src/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

function Input({ className, type = "text", id, label, ...props }: InputProps) {
  return (
    <div>
      <label className="text-slate-700 pb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-4 py-2 text-lg shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "h-auto",
          "focus-visible:border-teal-700 focus-visible:ring-teal-700/20 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
