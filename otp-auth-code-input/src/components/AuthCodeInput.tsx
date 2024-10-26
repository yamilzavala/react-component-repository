import React, { useState } from "react";
import InputDigit from "./InputDigit";

type Props = {
  onSubmit: (code: string) => void;
  length: number;
  isDisabled: boolean;
};

const singleNumRegex = /^\d$/;
const numRegex = /^\d+$/;

const AuthCodeInput = ({ onSubmit, length, isDisabled = false }: Props) => {
  const [code, setCode] = useState(Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(code.join(""));
  };

  const onFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const onReset = () => {
    setCode(Array(length).fill(""));
    setFocusedIndex(0);
  };

  const indexBoundery = (index: number) => {
    return index <= 0 ? 0 : index >= length ? length - 1 : index;
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    switch (e.key) {
      case "ArrowLeft":
        setFocusedIndex(indexBoundery(index - 1));
        break;
      case "ArrowRight":
        setFocusedIndex(indexBoundery(index + 1));
        break;
      case "Backspace":
        if (code[index]) {
          setCode((prev) =>
            prev.map((codeDigit, idx) => (idx === index ? "" : codeDigit))
          );
        } else if (index - 1 >= 0) {
          setCode((prev) =>
            prev.map((codeDigit, idx) => (index - 1 === idx ? "" : codeDigit))
          );
          setFocusedIndex(indexBoundery(index - 1));
        }
        break;
      default: {
        const value = e.key;
        if (!singleNumRegex.test(value)) {
          return;
        }
        setCode((prev) =>
          prev.map((codeDigit, idx) =>
            idx === index ? String(value) : codeDigit
          )
        );
        setFocusedIndex(indexBoundery(index + 1));
        break;
      }
    }
  };

  const onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteCode = e.clipboardData.getData("text");

    if (!numRegex.test(pasteCode)) {
      return;
    }

    setCode((prev) =>
      prev.map((codeDigit, idx) => pasteCode[idx] ?? codeDigit)
    );
    setFocusedIndex(pasteCode.length);
  };

  const isSubmitEnabled = code.every((c) => Boolean(c));
  const isResetEnabled = code.some((c) => Boolean(c));

  return (
    <div className="wrapper">
      <form className="container" onSubmit={handleSubmit}>
        <div className="flex-container">
          {code.map((codeDigit, idx) => {
            return (
              <InputDigit
                value={codeDigit}
                isFocused={focusedIndex === idx}
                disabled={isDisabled}
                onFocus={() => onFocus(idx)}
                onKeyDown={(e) => onKeyDown(e, idx)}
                onPaste={onPaste}
              />
            );
          })}
        </div>
        <div className="flex-container">
          <button
            type="reset"
            onClick={onReset}
            className="button button--secondary"
            disabled={!isResetEnabled || isDisabled}
          >
            Reset
          </button>
          <button
            type="submit"
            className="button button--primary"
            disabled={!isSubmitEnabled || isDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthCodeInput;
