import React, { useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;

  // Optional settings
  type?: "default" | "success" | "danger";
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  type = "default",
  showCloseButton = true,
  closeOnOverlayClick = true,
}) => {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal when Escape is pressed
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Icon/background styles based on modal type
  const iconStyles = {
    default: "bg-orange-100 text-orange-500",
    success: "bg-green-100 text-green-500",
    danger: "bg-red-100 text-red-500",
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors duration-300 hover:bg-orange-50 hover:text-orange-500"
          >
            <FiX className="text-xl" />
          </button>
        )}

        {/* Success / Status Icon */}
        {type !== "default" && (
          <div className="mb-5 flex justify-center">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${iconStyles[type]}`}
            >
              {type === "success" && <FiCheck className="text-3xl" />}

              {type === "danger" && <FiX className="text-3xl" />}
            </div>
          </div>
        )}

        {/* Title */}
        <h2
          id="modal-title"
          className="text-center text-xl font-bold text-gray-900 md:text-2xl"
        >
          {title}
        </h2>

        {/* Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
