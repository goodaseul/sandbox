import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-background placeholder:text-muted-foreground focus:outline-none focus:border-point transition-colors"
    />
  );
});

Input.displayName = "Input";

export default Input;
