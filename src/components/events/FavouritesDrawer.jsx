import React, { useEffect } from 'react';
import { useFavourites } from '../../context/FavouritesContext.jsx';
import { formatShortDate } from '../../utils/calendar.js';
import { X, Trash2, ArrowRight, BookmarkX, MapPin, Globe } from 'lucide-react';

export const FavouritesDrawer = ({
  isOpen,
  onClose,
  onSelectEvent,
}) => {
  const { favouriteEvents, favouriteCount, removeFavourite, clearAllFavourites } = useFavourites();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="favourites-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <h2
                id="favourites-drawer-title"
                className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"
              >
                <span>Saved Events</span>
                <span className="text-xs font-mono bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full tabular-nums">
                  {favouriteCount}
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Manage your bookmarked tech events & hackathons
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close drawer"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {favouriteEvents.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400 mb-3">
                  <BookmarkX className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  No saved events
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
                  Click the bookmark icon on any event card to add it to your personal watchlist.
                </p>
              </div>
            ) : (
              favouriteEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-xl flex items-start gap-3 group hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover shrink-0 bg-slate-200"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        {event.category}
                      </span>
                      <span>·</span>
                      <span className="tabular-nums">{formatShortDate(event.date)}</span>
                    </div>

                    <h4
                      onClick={() => {
                        onClose();
                        onSelectEvent(event);
                      }}
                      className="text-xs font-semibold text-slate-900 dark:text-white line-clamp-1 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                    >
                      {event.title}
                    </h4>

                    <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 mt-1 truncate">
                      {event.format === 'Virtual' ? (
                        <Globe className="w-3 h-3 text-blue-400 shrink-0" />
                      ) : (
                        <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                      )}
                      <span className="truncate">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectEvent(event);
                        }}
                        className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => removeFavourite(event.id)}
                        className="text-[11px] font-medium text-red-500 hover:text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-0.5 cursor-pointer ml-auto"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {favouriteEvents.length > 0 && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
              <button
                onClick={clearAllFavourites}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:text-red-700 transition-colors cursor-pointer min-h-[40px]"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All ({favouriteCount})</span>
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors cursor-pointer min-h-[40px]"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
