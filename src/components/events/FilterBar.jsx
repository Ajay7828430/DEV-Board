import React from 'react';
import { CATEGORIES } from '../../data/mockEvents.js';
import {
  Bookmark,
  RotateCcw,
  Layers,
  MapPin,
  Tag,
  ArrowUpDown,
  Filter
} from 'lucide-react';

export const FilterBar = ({
  selectedCategory,
  onSelectCategory,
  selectedFormat,
  onSelectFormat,
  selectedPrice,
  onSelectPrice,
  sortBy,
  onSortChange,
  onlyFavourites,
  onToggleOnlyFavourites,
  categoryCounts,
  favouriteCount,
  hasActiveFilters,
  onResetFilters,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 sm:p-5 shadow-xs transition-colors">
      {/* Dropdown Filters Grid - 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Category Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="category-dropdown"
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span>Category</span>
          </label>
          <div className="relative">
            <select
              id="category-dropdown"
              value={selectedCategory}
              onChange={(e) => onSelectCategory(e.target.value)}
              className="w-full text-sm sm:text-xs py-2.5 pl-3.5 pr-9 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors cursor-pointer appearance-none min-h-[44px]"
            >
              {CATEGORIES.map((cat) => {
                const count = categoryCounts[cat];
                return (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Categories' : cat} {typeof count === 'number' ? `(${count})` : ''}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Format Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="format-dropdown"
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Format</span>
          </label>
          <div className="relative">
            <select
              id="format-dropdown"
              value={selectedFormat}
              onChange={(e) => onSelectFormat(e.target.value)}
              className="w-full text-sm sm:text-xs py-2.5 pl-3.5 pr-9 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors cursor-pointer appearance-none min-h-[44px]"
            >
              <option value="All">All Formats</option>
              <option value="In-Person">In-Person Only</option>
              <option value="Virtual">Virtual / Online Only</option>
              <option value="Hybrid">Hybrid (Both)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="pricing-dropdown"
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
          >
            <Tag className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Pricing</span>
          </label>
          <div className="relative">
            <select
              id="pricing-dropdown"
              value={selectedPrice}
              onChange={(e) => onSelectPrice(e.target.value)}
              className="w-full text-sm sm:text-xs py-2.5 pl-3.5 pr-9 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors cursor-pointer appearance-none min-h-[44px]"
            >
              <option value="All">All Pricing Options</option>
              <option value="Free">Free Admission</option>
              <option value="Paid">Paid / Ticketed</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="sort-dropdown"
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>Sort By</span>
          </label>
          <div className="relative">
            <select
              id="sort-dropdown"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full text-sm sm:text-xs py-2.5 pl-3.5 pr-9 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors cursor-pointer appearance-none min-h-[44px]"
            >
              <option value="date-asc">Date: Soonest First</option>
              <option value="date-desc">Date: Furthest First</option>
              <option value="popular">Most Popular (Attendees)</option>
              <option value="name-asc">Alphabetical (A–Z)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* FilterBar Footer: Saved filter toggle & Reset */}
      <div className="mt-3.5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleOnlyFavourites(!onlyFavourites)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer min-h-[40px] ${
              onlyFavourites
                ? 'bg-amber-500/15 border-amber-500/50 text-amber-700 dark:text-amber-400 font-semibold'
                : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${onlyFavourites ? 'fill-current' : ''}`} />
            <span>Saved Events Only</span>
            <span className="font-mono tabular-nums text-[11px] bg-slate-200/60 dark:bg-slate-800 px-1.5 py-0.5 rounded">
              {favouriteCount}
            </span>
          </button>

          {hasActiveFilters && (
            <span className="text-[11px] text-slate-400 dark:text-slate-500 hidden sm:inline-flex items-center gap-1 font-medium">
              <Filter className="w-3 h-3 text-indigo-500" />
              Filters active
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors cursor-pointer min-h-[40px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    </div>
  );
};
