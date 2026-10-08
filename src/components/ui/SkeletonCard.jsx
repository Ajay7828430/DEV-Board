import React from 'react';

export const SkeletonCard = () => {
  return (
    <div
      aria-hidden="true"
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs flex flex-col h-full animate-pulse"
    >
      {/* Image Skeleton */}
      <div className="w-full aspect-16/9 bg-slate-200 dark:bg-slate-800" />

      {/* Body Skeleton */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Unboxed Metadata row */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded-sm" />
          <div className="h-3 w-2 bg-slate-200 dark:bg-slate-800 rounded-sm" />
          <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded-sm" />
        </div>

        {/* Title */}
        <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-sm" />
        <div className="h-5 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-sm" />

        {/* Description lines */}
        <div className="space-y-1.5 mt-1">
          <div className="h-3.5 w-full bg-slate-200 dark:bg-slate-800 rounded-sm" />
          <div className="h-3.5 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-sm" />
        </div>

        {/* Tags */}
        <div className="flex gap-1.5 mt-2">
          <div className="h-5 w-16 bg-slate-100 dark:bg-slate-800/60 rounded-md" />
          <div className="h-5 w-14 bg-slate-100 dark:bg-slate-800/60 rounded-md" />
          <div className="h-5 w-20 bg-slate-100 dark:bg-slate-800/60 rounded-md" />
        </div>

        {/* Footer Skeleton */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded-sm" />
          <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded-md" />
        </div>
      </div>
    </div>
  );
};
