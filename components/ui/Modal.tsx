"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-darkSlate border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="text-xl font-semibold text-ivoryWhite tracking-tight">
                {title || "Modal"}
              </h2>
              <button
                onClick={onClose}
                className="text-silverMist hover:text-ivoryWhite transition-colors text-2xl leading-none"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6 text-silverMist text-[15px] leading-relaxed">
              {children}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 text-sm font-medium text-ivoryWhite hover:text-gold transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
