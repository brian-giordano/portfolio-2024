// components/Toast.tsx
import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  duration?: number; // Duration in milliseconds
  onClose: () => void; // Function to call when the toast should close
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [duration, onClose]);

  return (
    <div className="toast-component fixed bottom-4 right-4 bg-[#38a169] text-ivoryWhite p-4 rounded shadow-lg transition-opacity duration-300">
      {message}
    </div>
  );
};

export default Toast;
