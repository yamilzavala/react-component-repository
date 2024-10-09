import { useState, useEffect } from "react";

export const useDebounceText = (text, delay) => {
  const [value, setValue] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => setValue(text), delay);
    return () => clearTimeout(timeout);
  }, [delay, text]);

  return { value };
};
