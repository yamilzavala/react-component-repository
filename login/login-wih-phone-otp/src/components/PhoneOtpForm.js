import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handlePhoneSubmit(e) {
    e.preventDefault();

    //phone validations
    const regex = /[^0-9]g/;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("invalid format");
      return;
    }

    //backend call
    //show opt
    setShowOtpInput(true);
  }

  function onOtpSubmit(otp) {
    console.log(`Otp number: ${otp}`);
  }

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            placeholder="phone number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
