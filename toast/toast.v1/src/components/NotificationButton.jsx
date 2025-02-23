// components/NotificationButton.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToast } from "../store/toastSlice";

const NotificationButton = () => {
  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(
      addToast({ message: "Action completed successfully!", type: "success" })
    );
  };

  const handleError = () => {
    dispatch(addToast({ message: "Something went wrong.", type: "error" }));
  };

  const handleInfo = () => {
    dispatch(addToast({ message: "SInfo message.", type: "info" }));
  };

  const handleWarning = () => {
    dispatch(addToast({ message: "Warning message.", type: "warning" }));
  };

  return (
    <>
      <div>
        <button onClick={handleSuccess}>Show Success Toast</button>
        <button onClick={handleError}>Show Error Toast</button>
        <button onClick={handleInfo}>Show Info Toast</button>
        <button onClick={handleWarning}>Show Warning Toast</button>
      </div>
    </>
  );
};

export default NotificationButton;
