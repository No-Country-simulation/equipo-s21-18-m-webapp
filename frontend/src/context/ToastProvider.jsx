import { useState } from "react";
import ToastContext from "./ToastContext";

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const openToast = (component, timeout = 5000) => {
    const id = Date.now();
    setToasts((toasts) => [...toasts, { id, component }]);
    setTimeout(() => {
      closeToast(id);
    }, timeout);
    return id;
  };

  const closeToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      {children}
      <div className="absolute right-4 bottom-4 z-[99999] space-y-2">
        {toasts.map(({ id, component }) => (
          <div key={id} className="relative">
            <button
              type="button"
              className="absolute top-2 right-2 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none"
              onClick={() => closeToast(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-4 w-4"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              <span className="sr-only">Close</span>
            </button>
            {component}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
