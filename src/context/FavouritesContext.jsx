import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { MOCK_EVENTS } from '../data/mockEvents.js';
import { useNotification } from './NotificationContext.jsx';

const FavouritesContext = createContext(undefined);

const STORAGE_KEY = 'devboard_favourite_event_ids';

export const FavouritesProvider = ({ children }) => {
  const { notify } = useNotification();
  const [favouriteIds, setFavouriteIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return new Set(parsed);
        }
      }
    } catch {
      // Fallback
    }
    return new Set(['evt-001', 'evt-003']);
  });

  useEffect(() => {
    try {
      const idsArray = Array.from(favouriteIds);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(idsArray));
    } catch {
      // ignore
    }
  }, [favouriteIds]);

  const isFavourite = useCallback(
    (id) => {
      return favouriteIds.has(id);
    },
    [favouriteIds]
  );

  const addFavourite = useCallback(
    (event) => {
      setFavouriteIds((prev) => {
        if (prev.has(event.id)) {
          return prev;
        }
        const next = new Set(prev);
        next.add(event.id);
        notify(`Added "${event.title}" to saved events`, 'success');
        return next;
      });
    },
    [notify]
  );

  const removeFavourite = useCallback(
    (id) => {
      setFavouriteIds((prev) => {
        if (!prev.has(id)) return prev;
        const next = new Set(prev);
        next.delete(id);
        const eventTitle = MOCK_EVENTS.find((e) => e.id === id)?.title || 'Event';
        notify(`Removed "${eventTitle}" from saved events`, 'info');
        return next;
      });
    },
    [notify]
  );

  const toggleFavourite = useCallback(
    (event) => {
      setFavouriteIds((prev) => {
        const next = new Set(prev);
        if (next.has(event.id)) {
          next.delete(event.id);
          notify(`Removed "${event.title}" from saved events`, 'info');
        } else {
          next.add(event.id);
          notify(`Saved "${event.title}" to your favourites`, 'success');
        }
        return next;
      });
    },
    [notify]
  );

  const clearAllFavourites = useCallback(() => {
    if (favouriteIds.size === 0) return;
    setFavouriteIds(new Set());
    notify('Cleared all saved events', 'info');
  }, [favouriteIds.size, notify]);

  const favouriteEvents = useMemo(() => {
    return MOCK_EVENTS.filter((e) => favouriteIds.has(e.id));
  }, [favouriteIds]);

  return (
    <FavouritesContext.Provider
      value={{
        favouriteIds,
        favouriteEvents,
        favouriteCount: favouriteIds.size,
        isFavourite,
        toggleFavourite,
        addFavourite,
        removeFavourite,
        clearAllFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
}
