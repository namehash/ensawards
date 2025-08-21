import { shadcnButtonVariants } from "@/components/shadcn/shadcnButtonStyles.ts";
import { cn } from "@/lib/utils.ts";
import React from "react";

export interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "secondary" | "ghost" | "outline" | "destructive";
  size?: "sm" | "icon" | "lg" | "default";
  disabled?: boolean;
  padding?: string;
  loading?: boolean;
}

export const FormButton = React.forwardRef<HTMLButtonElement, FormButtonProps>(
  (
    {
      className,
      children,
      variant = "default",
      size = "default",
      padding,
      disabled,
      loading = false,
      ...props
    },
    ref,
  ) => {
    const combinedClassName = cn([
      shadcnButtonVariants({
        variant: variant,
        size: size,
        className: className,
      }),
      "relative",
    ]);

    const content = (
      <>
        <span className={loading ? "opacity-0" : undefined}>{children}</span>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </div>
        )}
      </>
    );

    return (
      <button ref={ref} className={combinedClassName} disabled={disabled} {...props}>
        {content}
      </button>
    );
  },
);

FormButton.displayName = "Button";

const Spinner = () => (
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
