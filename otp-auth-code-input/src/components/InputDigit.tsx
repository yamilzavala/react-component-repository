import { useRef, useEffect, InputHTMLAttributes } from "react";

type Props = {
  value: number;
  isFocused: boolean;
};
type Others = Omit<InputHTMLAttributes<HTMLInputElement>, "checked">;

const InputDigit = ({ value, isFocused, ...props }: Props & Others) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <input
      value={value}
      ref={inputRef}
      autoComplete="one-time-code"
      inputMode="numeric"
      maxLength={1}
      {...props}
      className="input-box"
      type="text"
    />
  );
};

export default InputDigit;
