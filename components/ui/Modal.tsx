import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-silverMist bg-opacity-50 flex justify-center items-center">
      <div className="custom-scrollbar bg-charcoal p-4 rounded shadow-lg max-w-lg w-full max-h-[50vh] overflow-y-auto">
        <button onClick={onClose} className="text-silverMist mb-4 text-right">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
