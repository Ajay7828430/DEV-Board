import React from 'react';
import { SearchX, BookmarkX, RotateCcw } from 'lucide-react';

export const EmptyState = ({
  type,
  searchQuery,
  onReset,
  onExplore,
}) => {
  if (type === 'no-favourites') {
    return (
      <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-500 dark:text-slate-400 mb-4">
          <BookmarkX className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          No saved events yet
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
          Save hackathons, workshops, and conferences you are interested in by clicking the bookmark or heart icon on any event card.
        </p>
        {onExplore && (
          <button
            type="button"
            onClick={onExplore}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-xs cursor-pointer min-h-[40px]"
          >
            Explore Available Events
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg mx-auto">
      <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-500 dark:text-slate-400 mb-4">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        No matching events found
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
        {searchQuery ? (
          <>
            No events match your search for <span className="font-medium text-slate-800 dark:text-slate-200">&ldquo;{searchQuery}&rdquo;</span> with current category filters.
          </>
        ) : (
          'There are no events matching your selected category and criteria.'
        )}
      </p>
      {onReset && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors shadow-xs cursor-pointer min-h-[40px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
