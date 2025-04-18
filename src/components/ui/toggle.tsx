import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../../lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-orange-100 data-[state=on]:text-orange-600",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-gray-200 bg-transparent",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-8 px-2",
        lg: "h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof toggleVariants> {
  pressed?: boolean;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, pressed, ...props }, ref) => (
    <button
      ref={ref}
      data-state={pressed ? "on" : "off"}
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
)

Toggle.displayName = "Toggle"

export { Toggle, toggleVariants }
