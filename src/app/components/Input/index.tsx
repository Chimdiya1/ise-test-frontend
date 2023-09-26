import * as React from "react";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    return (
      <>
        <div className="relative">
          <input
            type={showPassword ? "text" : type}
            className="flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500  disabled:cursor-not-allowed disabled:opacity-50  "
            ref={ref}
            {...props}
          />
          {type === "password" && (
            <span
              className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? (
                <EyeOffIcon className="" size={16} />
              ) : (
                <EyeIcon size={16} />
              )}
            </span>
          )}
        </div>
        {!!error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
