import { useState, useMemo, useCallback } from 'react';
import { MOCK_EVENTS } from '../data/mockEvents.js';
import { useFavourites } from '../context/FavouritesContext.jsx';

export function useEvents(initialEvents = MOCK_EVENTS) {
  const { favouriteIds } = useFavourites();
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    searchQuery: '',
    category: 'All',
    format: 'All',
    price: 'All',
    sortBy: 'date-asc',
    onlyFavourites: false,
  });

  const setSearchQuery = useCallback((query) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const setCategory = useCallback((category) => {
    setFilters((prev) => ({ ...prev, category }));
  }, []);

  const setFormat = useCallback((format) => {
    setFilters((prev) => ({ ...prev, format }));
  }, []);

  const setPrice = useCallback((price) => {
    setFilters((prev) => ({ ...prev, price }));
  }, []);

  const setSortBy = useCallback((sortBy) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const setOnlyFavourites = useCallback((onlyFavourites) => {
    setFilters((prev) => ({ ...prev, onlyFavourites }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      searchQuery: '',
      category: 'All',
      format: 'All',
      price: 'All',
      sortBy: 'date-asc',
      onlyFavourites: false,
    });
  }, []);

  const refreshEvents = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  const filteredEvents = useMemo(() => {
    const query = filters.searchQuery.trim().toLowerCase();

    return initialEvents.filter((event) => {
      if (query) {
        const matchesTitle = event.title.toLowerCase().includes(query);
        const matchesShortDesc = event.shortDescription.toLowerCase().includes(query);
        const matchesDesc = event.description.toLowerCase().includes(query);
        const matchesOrganizer = event.organizer.toLowerCase().includes(query);
        const matchesLocation = event.location.toLowerCase().includes(query);
        const matchesTags = event.tags.some((tag) => tag.toLowerCase().includes(query));

        if (!matchesTitle && !matchesShortDesc && !matchesDesc && !matchesOrganizer && !matchesLocation && !matchesTags) {
          return false;
        }
      }

      if (filters.category !== 'All' && event.category !== filters.category) {
        return false;
      }

      if (filters.format !== 'All' && event.format !== filters.format) {
        return false;
      }

      if (filters.price !== 'All' && event.price !== filters.price) {
        return false;
      }

      if (filters.onlyFavourites && !favouriteIds.has(event.id)) {
        return false;
      }

      return true;
    });
  }, [initialEvents, filters, favouriteIds]);

  const sortedEvents = useMemo(() => {
    const list = [...filteredEvents];

    list.sort((a, b) => {
      switch (filters.sortBy) {
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'popular':
          return b.attendeesCount - a.attendeesCount;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return list;
  }, [filteredEvents, filters.sortBy]);

  const categoryCounts = useMemo(() => {
    const counts = { All: initialEvents.length };
    for (const evt of initialEvents) {
      counts[evt.category] = (counts[evt.category] || 0) + 1;
    }
    return counts;
  }, [initialEvents]);

  const hasActiveFilters = useMemo(() => {
    return (
      filters.searchQuery !== '' ||
      filters.category !== 'All' ||
      filters.format !== 'All' ||
      filters.price !== 'All' ||
      filters.onlyFavourites
    );
  }, [filters]);

  return {
    events: sortedEvents,
    rawEvents: initialEvents,
    totalCount: initialEvents.length,
    displayedCount: sortedEvents.length,
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
  };
}
