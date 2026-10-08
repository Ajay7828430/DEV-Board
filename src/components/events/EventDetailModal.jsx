import React, { useEffect, useState } from 'react';
import { useFavourites } from '../../context/FavouritesContext.jsx';
import { useNotification } from '../../context/NotificationContext.jsx';
import { formatEventDate, generateGoogleCalendarUrl, downloadIcsFile } from '../../utils/calendar.js';
import {
  X,
  Bookmark,
  Calendar,
  Clock,
  MapPin,
  Globe,
  Share2,
  Download,
  ExternalLink,
  Users,
  CheckCircle2,
  Building,
  User,
  ListOrdered,
  FileText
} from 'lucide-react';

export const EventDetailModal = ({ event, onClose }) => {
  const { isFavourite, toggleFavourite } = useFavourites();
  const { notify } = useNotification();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (!event) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [event, onClose]);

  useEffect(() => {
    if (event) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [event]);

  if (!event) return null;

  const isFav = isFavourite(event.id);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      notify('Event link copied to clipboard!', 'success');
    } else {
      notify('Link copied to clipboard', 'info');
    }
  };

  const handleRegister = () => {
    if (isRegistered) {
      setIsRegistered(false);
      notify(`Cancelled registration for "${event.title}"`, 'info');
    } else {
      setIsRegistered(true);
      notify(`Successfully registered for "${event.title}"! We sent a confirmation to your email.`, 'success');
    }
  };

  const handleDownloadIcs = () => {
    downloadIcsFile(event);
    notify('Calendar file (.ics) downloaded', 'success');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-event-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Banner */}
        <div className="relative w-full aspect-21/9 sm:aspect-3/1 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
          <img
            src={event.image}
            alt={event.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-black/20 pointer-events-none" />

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => toggleFavourite(event)}
              aria-label={isFav ? 'Remove from saved' : 'Save event'}
              className={`p-2.5 rounded-xl backdrop-blur-md transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center ${
                isFav
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-slate-900/60 text-white hover:bg-slate-900/80'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-md transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Banner bottom info */}
          <div className="absolute bottom-4 left-6 right-6 text-white flex flex-wrap items-center justify-between gap-2 z-10">
            <div className="flex items-center gap-2 text-xs font-medium">
              <span className="bg-indigo-600 px-2.5 py-0.5 rounded-md text-white font-semibold">
                {event.category}
              </span>
              <span className="opacity-90">{event.format}</span>
              <span aria-hidden="true" className="opacity-60">·</span>
              <span className="opacity-90">{event.price === 'Free' ? 'Free Admission' : event.priceDetail || 'Paid'}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono tabular-nums opacity-90">
              <Users className="w-3.5 h-3.5" />
              <span>{event.attendeesCount.toLocaleString()} Registered</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 dark:text-slate-200">
          <div>
            <h2
              id="modal-event-title"
              className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight"
            >
              {event.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2">
              <Building className="w-3.5 h-3.5" />
              <span>Organized by <strong className="font-semibold text-slate-700 dark:text-slate-300">{event.organizer}</strong></span>
              {event.organizerUrl && (
                <a
                  href={event.organizerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-0.5"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/70 dark:border-slate-800 text-xs">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Date & Duration</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {formatEventDate(event.date)}
                  {event.endDate && ` – ${formatEventDate(event.endDate)}`}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Time Schedule</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {event.time} {event.endTime ? `– ${event.endTime}` : ''}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              {event.format === 'Virtual' ? (
                <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              ) : (
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              )}
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Location / Access</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {event.location}
                  {event.venueAddress && ` · ${event.venueAddress}`}
                </span>
                {event.virtualUrl && (
                  <div className="mt-1">
                    <a
                      href={event.virtualUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 font-mono text-[11px]"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Stream Link / Portal
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              About This Event
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>

          {event.speakers && event.speakers.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                Featured Speakers & Instructors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.speakers.map((spk, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">
                      {spk.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                        {spk.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {spk.role} · {spk.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.agenda && event.agenda.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                <ListOrdered className="w-3.5 h-3.5" />
                Event Agenda
              </h3>
              <div className="space-y-2 border-l-2 border-slate-200 dark:border-slate-800 ml-2 pl-4">
                {event.agenda.map((item, idx) => (
                  <div key={idx} className="relative pb-2 last:pb-0">
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold block tabular-nums">
                      {item.time}
                    </span>
                    <span className="text-xs font-medium text-slate-900 dark:text-white">
                      {item.title}
                    </span>
                    {item.description && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.requirements && event.requirements.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Prerequisites & Preparation
              </h3>
              <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
                {event.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <a
              href={generateGoogleCalendarUrl(event)}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors min-h-[40px]"
            >
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              <span>Google Cal</span>
            </a>

            <button
              onClick={handleDownloadIcs}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer min-h-[40px]"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>.ICS File</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2.5 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
              aria-label="Share event link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center w-full sm:w-auto">
            <button
              onClick={handleRegister}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all shadow-xs cursor-pointer min-h-[42px] ${
                isRegistered
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
              }`}
            >
              {isRegistered ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RSVP Confirmed</span>
                </>
              ) : (
                <span>Register for Event · Free</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
