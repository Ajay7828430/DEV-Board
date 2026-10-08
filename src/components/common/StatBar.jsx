import React from 'react';
import { Calendar, Tag, Bookmark, CheckCircle2 } from 'lucide-react';

export const StatBar = ({
  totalCount,
  freeCount,
  favouriteCount,
  activeCategory,
  onViewFavourites,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
          <Calendar className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[11px] text-slate-400 dark:text-slate-500">Upcoming</div>
          <div className="font-semibold text-slate-900 dark:text-white tabular-nums">
            {totalCount} Events
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
          <Tag className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[11px] text-slate-400 dark:text-slate-500">Free Registration</div>
          <div className="font-semibold text-slate-900 dark:text-white tabular-nums">
            {freeCount} Available
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
          <Bookmark className="w-3.5 h-3.5" />
        </div>
        <div className="flex-1">
          <div className="text-[11px] text-slate-400 dark:text-slate-500">My Saved</div>
          <button
            type="button"
            onClick={onViewFavourites}
            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline tabular-nums text-left block cursor-pointer"
          >
            {favouriteCount} Events
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
        </div>
        <div>
          <div className="text-[11px] text-slate-400 dark:text-slate-500">Category View</div>
          <div className="font-semibold text-slate-900 dark:text-white truncate max-w-[120px]">
            {activeCategory}
          </div>
        </div>
      </div>
    </div>
  );
};
