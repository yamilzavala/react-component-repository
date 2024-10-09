// components/ToastManager.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToast } from "../store/toastSlice";
import "./ToastManager.css";
import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

const ToastManager = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state) => state.toasts);

  useEffect(() => {
    const timers = toasts.map(
      (toast) =>
        setTimeout(() => {
          dispatch(removeToast({ id: toast.id }));
        }, 3000) // Tiempo de vida del toast: 3 segundos
    );

    return () => timers.forEach((timer) => clearTimeout(timer)); // Limpiar timers cuando el componente se desmonta
  }, [toasts, dispatch]);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          {icons[toast.type]}
          <p>{toast.message}</p>
          <button onClick={() => dispatch(removeToast({ id: toast.id }))}>
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastManager;
