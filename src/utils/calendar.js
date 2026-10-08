export function formatEventDate(dateStr) {
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
    return dateStr;
  } catch {
    return dateStr;
  }
}

export function formatShortDate(dateStr) {
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    }
    return dateStr;
  } catch {
    return dateStr;
  }
}

export function getDaysUntil(dateStr) {
  try {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const eventDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      const diffTime = eventDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return 'Tomorrow';
      if (diffDays > 1) return `In ${diffDays} days`;
      if (diffDays === -1) return 'Yesterday';
      return `${Math.abs(diffDays)} days ago`;
    }
    return '';
  } catch {
    return '';
  }
}

export function generateGoogleCalendarUrl(event) {
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(`${event.shortDescription}\n\nOrganized by: ${event.organizer}\n${event.description}`);
  const location = encodeURIComponent(event.location + (event.venueAddress ? ` (${event.venueAddress})` : ''));
  
  const dateParts = event.date.split('-');
  const yyyy = dateParts[0];
  const mm = dateParts[1];
  const dd = dateParts[2];
  
  const startStr = `${yyyy}${mm}${dd}T140000Z`;
  const endStr = `${yyyy}${mm}${dd}T180000Z`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startStr}/${endStr}`;
}

export function downloadIcsFile(event) {
  const dateParts = event.date.split('-');
  const yyyy = dateParts[0];
  const mm = dateParts[1];
  const dd = dateParts[2];
  const dtStart = `${yyyy}${mm}${dd}T140000Z`;
  const dtEnd = `${yyyy}${mm}${dd}T180000Z`;
  const location = event.venueAddress || event.location;
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//DevBoard//Tech Events Discovery//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}-${Date.now()}@devboard.app`,
    `DTSTAMP:${dtStart}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${event.title.replace(/,/g, '\\,')}`,
    `DESCRIPTION:${event.shortDescription.replace(/\n/g, '\\n')}`,
    `LOCATION:${location.replace(/,/g, '\\,')}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${event.slug}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
