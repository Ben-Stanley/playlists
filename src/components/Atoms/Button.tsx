import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = cva(
  "button font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary/80 focus:ring-primary/50",
        secondary:
          "border border-gray-500 bg-secondary text-white hover:bg-secondary-lighter focus:ring-secondary/50",
        ghost: "bg-transparent hover:bg-white/10 text-white focus:ring-white/50",
      },
      size: {
        small: "px-4 py-1 text-sm",
        medium: "px-4 py-3 text-base",
        large: "px-4 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "medium",
    },
  }
);

function Button({className, variant, size, ...props}: ButtonProps & VariantProps<typeof buttonVariants>) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;