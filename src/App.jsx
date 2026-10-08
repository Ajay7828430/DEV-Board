import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import { NotificationProvider } from './context/NotificationContext.jsx';
import { FavouritesProvider, useFavourites } from './context/FavouritesContext.jsx';
import { useEvents } from './hooks/useEvents.js';
import { Container } from './components/layout/Container.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { StatBar } from './components/common/StatBar.jsx';
import { SearchBar } from './components/events/SearchBar.jsx';
import { FilterBar } from './components/events/FilterBar.jsx';
import { EventList } from './components/events/EventList.jsx';
import { EventDetailModal } from './components/events/EventDetailModal.jsx';
import { FavouritesDrawer } from './components/events/FavouritesDrawer.jsx';
import {
  Compass,
  Bookmark,
  Sun,
  Moon,
  RefreshCw,
} from 'lucide-react';

const DevBoardApp = () => {
  const { theme, toggleTheme } = useTheme();
  const { favouriteCount } = useFavourites();

  const {
    events,
    rawEvents,
    totalCount,
    displayedCount,
    filters,
    isLoading,
    hasActiveFilters,
    categoryCounts,
    setSearchQuery,
    setCategory,
    setFormat,
    setPrice,
    setSortBy,
    setOnlyFavourites,
    resetFilters,
    refreshEvents,
  } = useEvents();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFavouritesDrawerOpen, setIsFavouritesDrawerOpen] = useState(false);

  const freeEventsCount = rawEvents.filter((e) => e.price === 'Free').length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Top Header - Mobile and Desktop Optimized */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <Container className="py-3 sm:py-3.5">
          <div className="flex items-center justify-between gap-3">
            {/* Brand Title */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white shadow-xs">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                  DevBoard
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium ml-2 hidden sm:inline">
                  Tech Events & Hackathons
                </span>
              </div>
            </div>

            {/* Quick Actions: Refresh, Saved Events, and Dark/Light Mode */}
            <div className="flex items-center gap-2">
              {/* Refresh Simulator */}
              <button
                type="button"
                onClick={refreshEvents}
                disabled={isLoading}
                title="Refresh events list"
                aria-label="Refresh events list"
                className="p-2 sm:p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>

              {/* Saved Favourites Button */}
              <button
                type="button"
                onClick={() => setIsFavouritesDrawerOpen(true)}
                aria-label={`View ${favouriteCount} saved events`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xs cursor-pointer min-h-[40px]"
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                <span className="hidden xs:inline sm:inline">Saved</span>
                <span className="font-mono text-[11px] tabular-nums bg-white/20 dark:bg-slate-900/20 px-1.5 py-0.5 rounded-md">
                  {favouriteCount}
                </span>
              </button>

              {/* Dark / Light Mode Switcher */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 sm:p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 shadow-xs cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Viewport */}
      <main className="flex-1">
        <Container className="pt-6 sm:pt-8 pb-16">
          {/* Hero Section */}
          <div className="mb-6 sm:mb-8">
            <div className="pb-5 sm:pb-6 border-b border-slate-200/80 dark:border-slate-800">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Discover Upcoming Tech Events, Workshops & Hackathons
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
                Find curated developer summits, hands-on masterclasses, and global hackathons. Search and filter across formats, categories, and dates.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <StatBar
              totalCount={totalCount}
              freeCount={freeEventsCount}
              favouriteCount={favouriteCount}
              activeCategory={filters.category === 'All' ? 'All Categories' : filters.category}
              onViewFavourites={() => setIsFavouritesDrawerOpen(true)}
            />
          </div>

          {/* Search Bar & Dropdown Filters */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <SearchBar
              value={filters.searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              resultCount={displayedCount}
              totalCount={totalCount}
            />

            {/* Dropdown-based FilterBar */}
            <FilterBar
              selectedCategory={filters.category}
              onSelectCategory={setCategory}
              selectedFormat={filters.format}
              onSelectFormat={setFormat}
              selectedPrice={filters.price}
              onSelectPrice={setPrice}
              sortBy={filters.sortBy}
              onSortChange={setSortBy}
              onlyFavourites={filters.onlyFavourites}
              onToggleOnlyFavourites={setOnlyFavourites}
              categoryCounts={categoryCounts}
              favouriteCount={favouriteCount}
              hasActiveFilters={hasActiveFilters}
              onResetFilters={resetFilters}
            />
          </div>

          {/* Filter Status Subheader */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400 border-b border-slate-200/60 dark:border-slate-800/80">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {filters.onlyFavourites ? 'Saved Events' : `${filters.category === 'All' ? 'All' : filters.category} Events`}
              </span>
              <span>·</span>
              <span className="tabular-nums font-mono">
                {displayedCount} {displayedCount === 1 ? 'event found' : 'events found'}
              </span>
              {filters.searchQuery && (
                <>
                  <span>·</span>
                  <span className="truncate max-w-[200px] text-slate-700 dark:text-slate-300">
                    &ldquo;{filters.searchQuery}&rdquo;
                  </span>
                </>
              )}
            </div>

            <div className="text-[11px] text-slate-400 dark:text-slate-500">
              Tap any event for full schedule & calendar sync
            </div>
          </div>

          {/* Event Cards Grid */}
          <EventList
            events={events}
            isLoading={isLoading}
            searchQuery={filters.searchQuery}
            isFavouritesOnly={filters.onlyFavourites}
            onSelectEvent={(evt) => setSelectedEvent(evt)}
            onResetFilters={resetFilters}
            onExploreEvents={() => {
              setOnlyFavourites(false);
              resetFilters();
            }}
          />
        </Container>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Full Event Details Dialog Modal */}
      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* Dedicated Favourites Drawer */}
      <FavouritesDrawer
        isOpen={isFavouritesDrawerOpen}
        onClose={() => setIsFavouritesDrawerOpen(false)}
        onSelectEvent={(evt) => setSelectedEvent(evt)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <FavouritesProvider>
          <DevBoardApp />
        </FavouritesProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}
