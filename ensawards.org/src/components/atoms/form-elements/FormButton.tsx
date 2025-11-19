import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
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
        {loading && (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}
        <span>{children}</span>
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="animate-spin"
  >
    <path
      d="M12.6641 6.66533C12.664 7.93239 12.2628 9.16691 11.518 10.1919C10.7732 11.217 9.72304 11.9799 8.51798 12.3714C7.31292 12.7629 6.01486 12.7629 4.80982 12.3713C3.60479 11.9798 2.55465 11.2168 1.80991 10.1917C1.06516 9.16659 0.664053 7.93205 0.664063 6.665C0.664072 5.39794 1.0652 4.16341 1.80996 3.13833C2.55471 2.11326 3.60487 1.35027 4.80991 0.958718C6.01495 0.567164 7.31301 0.567146 8.51806 0.958667"
      stroke="currentColor"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
