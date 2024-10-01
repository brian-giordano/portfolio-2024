// components/ToastContainer.tsx
import React, { useState, forwardRef, useImperativeHandle } from "react";
import Toast from "./Toast";

// Define the type for the ref
export interface ToastContainerRef {
  addToast: (message: string) => void;
}

const ToastContainer = forwardRef<
  ToastContainerRef,
  React.PropsWithChildren<unknown>
>((_, ref) => {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
  let toastId = 0; // Simple ID counter for toasts

  const addToast = (message: string) => {
    console.log("Toast added:", message); // Debugging line
    setToasts((prev) => [...prev, { id: toastId++, message }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Expose the addToast method to the parent component
  useImperativeHandle(ref, () => ({
    addToast,
  }));

  return (
    <div>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
});

ToastContainer.displayName = "ToastContainer";

export default ToastContainer;
