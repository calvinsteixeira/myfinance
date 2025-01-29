import * as Icons from "@/components/icons/index";
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

type Props = {
  className?: string;
  size?: "default" | "sm" | "md" | "lg";
};

const logoVariants = cva(
  "text-3xl font-bold flex gap-1 items-center",
  {
    variants: {
      size: {
        default: "text-3xl",
        sm: "text-sm",
        md: "text-base",
        lg: "text-3xl",
      },
      colorVariant: {
        default: "text-primary",
        secondary: "text-secondary",
        tertiary: "text-tertiary",
      }
    },
    defaultVariants: {
      size: "default",
      colorVariant: "default",
    }
  }
)

const iconSizeMap = {
  default: "h-6 w-6",
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-6 w-6",
};

export default function Logo({ className, size = 'default' }: Props) {
  return (
    <span 
    className={cn(logoVariants({ size, className }))}>
      MyFinance <Icons.ChartNoAxesCombined className={cn(iconSizeMap[size])}/>
    </span>
  );
}