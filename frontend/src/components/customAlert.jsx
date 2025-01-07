import React, { useEffect } from "react";

const CustomAlert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 1500); // Display the alert for 1.5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className={`p-6 w-11/12 max-w-sm text-center border rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 animate-slide-in-up ${alertStyles[type]}`}
      >
        <div className="flex justify-center mb-2">
          {type === "success" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-6a1 1 0 102 0v-4a1 1 0 10-2 0v4zM10 13a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <p className="text-lg font-bold">
          {type === "success" ? "Success" : "Error"}
        </p>
        <p className="mt-2 text-sm text-gray-800">{message}</p>
        
      </div>
    </div>
  );
};

export default CustomAlert;
