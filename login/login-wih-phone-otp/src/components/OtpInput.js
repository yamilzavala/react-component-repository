import { useState, useRef, useEffect } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  function handleOnChange(idx, e) {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    //allow only one input
    newOtp[idx] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combineOtp = newOtp.join("");
    if (combineOtp.length === length) onOtpSubmit(combineOtp);

    //submit nex input if current position is filled
    if (value && idx < length - 1 && inputRefs.current[idx + 1])
      inputRefs.current[idx + 1].focus();
  }

  function handleOnClick(idx) {
    inputRefs.current[idx].setSelectionRange(1, 1);
  }

  function handleOnKeyDown(idx, e) {
    //validation to delete - move before position
    if (!otp[idx] && e.code === "Backspace" && inputRefs.current[idx - 1]) {
      inputRefs.current[idx - 1].focus();
    }
  }

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div className="otp-container">
      {otp.map((currOtp, idx) => {
        return (
          <input
            ref={(input) => (inputRefs.current[idx] = input)}
            className="opt-input"
            key={idx}
            type="text"
            value={currOtp}
            onChange={(e) => handleOnChange(idx, e)}
            onClick={() => handleOnClick(idx)}
            onKeyDown={(e) => handleOnKeyDown(idx, e)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
