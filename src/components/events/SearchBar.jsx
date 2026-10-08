import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({
  value,
  onChange,
  onClear,
  resultCount,
  totalCount,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        if (value) {
          onClear();
        } else {
          inputRef.current?.blur();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [value, onClear]);

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <label htmlFor="event-search-input" className="sr-only">
          Search events by title, keyword, or topic
        </label>
        <div className="absolute left-3.5 text-slate-400 dark:text-slate-500 pointer-events-none">
          <Search className="w-4 h-4" />
        </div>

        <input
          id="event-search-input"
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by title, tags (AI, React, Rust, Kubernetes)..."
          className="w-full pl-10 pr-20 sm:pr-24 py-3 sm:py-2.5 text-base sm:text-sm min-h-[46px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 transition-all shadow-xs"
        />

        <div className="absolute right-3 flex items-center gap-1.5">
          {value ? (
            <button
              type="button"
              onClick={onClear}
              aria-label="Clear search input"
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded select-none">
              /
            </kbd>
          )}

          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 tabular-nums pl-1.5 border-l border-slate-200 dark:border-slate-800 hidden md:inline">
            {resultCount}/{totalCount}
          </span>
        </div>
      </div>
    </div>
  );
};
