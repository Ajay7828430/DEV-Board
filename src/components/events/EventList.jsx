import React from 'react';
import { EventCard } from './EventCard.jsx';
import { SkeletonCard } from '../ui/SkeletonCard.jsx';
import { EmptyState } from '../common/EmptyState.jsx';

export const EventList = ({
  events,
  isLoading,
  searchQuery,
  isFavouritesOnly,
  onSelectEvent,
  onResetFilters,
  onExploreEvents,
}) => {
  if (isLoading) {
    return (
      <div
        aria-busy="true"
        aria-label="Loading events"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    if (isFavouritesOnly) {
      return (
        <EmptyState
          type="no-favourites"
          onExplore={onExploreEvents}
        />
      );
    }

    return (
      <EmptyState
        type="no-results"
        searchQuery={searchQuery}
        onReset={onResetFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSelectEvent={onSelectEvent}
        />
      ))}
    </div>
  );
};
