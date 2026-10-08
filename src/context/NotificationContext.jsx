import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

const NotificationContext = createContext(undefined);

export const NotificationProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const notify = useCallback(
    (message, type = 'success', duration = 3000) => {
      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newToast = { id, message, type, duration };
      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          dismiss(id);
        }, duration);
      }
    },
    [dismiss]
  );

  return (
    <NotificationContext.Provider value={{ notify, dismiss }}>
      {children}
      {/* Toast viewport */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isWarning = toast.type === 'warning';
          return (
            <div
              key={toast.id}
              role="status"
              className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-xl border shadow-lg text-sm transition-all duration-200 animate-in fade-in slide-in-from-bottom-2 ${
                isSuccess
                  ? 'bg-slate-900 text-white border-slate-800 dark:bg-white dark:text-slate-900 dark:border-slate-200'
                  : isWarning
                  ? 'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950 dark:text-amber-100 dark:border-amber-800'
                  : 'bg-slate-900 text-white border-slate-800 dark:bg-slate-800 dark:text-white dark:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isSuccess && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
                )}
                {isWarning && (
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                )}
                {!isSuccess && !isWarning && (
                  <Info className="w-4 h-4 text-blue-400 shrink-0" />
                )}
                <span className="font-medium text-xs sm:text-sm">{toast.message}</span>
              </div>
              <button
                onClick={() => dismiss(toast.id)}
                className="p-1 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors ml-3 cursor-pointer"
                aria-label="Dismiss notification"
              >
                <X className="w-3.5 h-3.5 opacity-70 hover:opacity-100" />
              </button>
            </div>
          );
        })}
      </div>
    </NotificationContext.Provider>
  );
};

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}
