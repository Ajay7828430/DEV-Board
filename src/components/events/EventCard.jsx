import React, { useState } from 'react';
import { useFavourites } from '../../context/FavouritesContext.jsx';
import { formatShortDate, getDaysUntil } from '../../utils/calendar.js';
import { Bookmark, Users, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export const EventCard = ({ event, onSelectEvent }) => {
  const { isFavourite, toggleFavourite } = useFavourites();
  const [imageError, setImageError] = useState(false);
  const isFav = isFavourite(event.id);
  const daysUntil = getDaysUntil(event.date);

  const handleFavouriteClick = (e) => {
    e.stopPropagation();
    toggleFavourite(event);
  };

  return (
    <article
      onClick={() => onSelectEvent(event)}
      className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col h-full cursor-pointer hover:shadow-md"
    >
      {/* Card Header & Visual Media */}
      <div className="relative w-full aspect-16/9 overflow-hidden bg-slate-100 dark:bg-slate-800">
        {!imageError ? (
          <img
            src={event.image}
            alt={event.title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400">
            <span className="text-xs font-mono">{event.category}</span>
          </div>
        )}

        {/* Ambient Gradient Scrim for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Card Top Overlay: Time Status & Bookmark Action */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <div className="px-2.5 py-1 text-[11px] font-medium bg-slate-950/70 backdrop-blur-md text-white rounded-md tracking-tight tabular-nums">
            {daysUntil}
          </div>

          <button
            type="button"
            onClick={handleFavouriteClick}
            aria-label={isFav ? `Remove ${event.title} from favourites` : `Save ${event.title} to favourites`}
            className={`p-2.5 rounded-xl backdrop-blur-md transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center ${
              isFav
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-slate-950/60 text-white/90 hover:bg-slate-950/80 hover:text-white'
            }`}
          >
            <Bookmark className={`w-4 h-4 transition-transform ${isFav ? 'fill-current scale-105' : ''}`} />
          </button>
        </div>

        {/* Overlay Bottom Info: Format & Location */}
        <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs flex items-center justify-between z-10">
          <span className="font-medium text-[11px] flex items-center gap-1.5 opacity-90">
            {event.format === 'Virtual' ? (
              <Globe className="w-3.5 h-3.5 text-blue-300" />
            ) : (
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
            )}
            <span className="truncate max-w-[200px]">{event.location}</span>
          </span>
          <span className="text-[11px] font-mono tabular-nums opacity-80">
            {event.price === 'Free' ? 'Free' : event.priceDetail || 'Paid'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Unboxed Metadata */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium mb-2">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{event.category}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="tabular-nums">{formatShortDate(event.date)}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>{event.time}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
          {event.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {event.shortDescription}
        </p>

        {/* Organizer info */}
        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2.5">
          By <span className="font-medium text-slate-700 dark:text-slate-300">{event.organizer}</span>
        </div>

        {/* Clean Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
          {event.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
          {event.tags.length > 3 && (
            <span className="text-[10px] text-slate-400 dark:text-slate-500 self-center">
              +{event.tags.length - 3}
            </span>
          )}
        </div>

        {/* Card Footer: Attendees & Action */}
        <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5 tabular-nums">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {event.attendeesCount.toLocaleString()}
            </span>
            <span className="text-[11px]">attending</span>
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
};
