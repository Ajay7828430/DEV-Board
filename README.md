# DevBoard — Tech Events, Workshops & Hackathons Discovery

> A responsive, high-performance web application designed for developers to discover upcoming tech conferences, hands-on workshops, and global hackathons with dynamic search, multi-criteria filtering, and reactive favourites management.

---

## 🌟 Live Application
- **Live URL:** [https://ais-pre-jjdy4x7sg6v3ajyj36sb3g-924322689984.asia-east1.run.app](https://ais-pre-jjdy4x7sg6v3ajyj36sb3g-924322689984.asia-east1.run.app)
- **Tech Stack:** React 19, JavaScript (ES2022 / JSX), Tailwind CSS v4, Vite, Lucide Icons

---

## 📋 Features Overview

### 1. Event Discovery & Browsing
- Curated catalog of developer events across 5 primary categories: **Hackathons**, **Workshops**, **Conferences**, **Meetups**, and **Webinars**.
- Unboxed typographic metadata with clean visual separators (`·`) adhering to modern frontend design principles.
- Real-time days-until badges (`Today`, `In 10 days`) and attendance metrics.

### 2. Multi-Criteria Dropdown Filtering & Search
- **Case-Insensitive Search:** Instant filtering across event title, short summary, full description, tags, organizer, and location.
- **Category Dropdown:** Dynamic counts displayed for each category in real-time.
- **Format Filter:** Switch between `In-Person`, `Virtual / Online`, and `Hybrid`.
- **Pricing Filter:** Filter by `Free Admission` or `Paid / Ticketed`.
- **Sort Ordering:** Sort dynamically by:
  - Date (Soonest first / Furthest first)
  - Popularity (Attendee count)
  - Alphabetical (A–Z)
- **Reset Filters:** Instant one-click action to restore default state.

### 3. Favourites & Personal Watchlist
- **$O(1)$ Duplicate Prevention:** Backed by JavaScript `Set` and synced with `localStorage`.
- **Reactive Toast Notifications:** Instant visual feedback when saving or removing events.
- **Dedicated Saved Drawer:** Slide-out management panel to review bookmarked events, open details, or clear all saved events.

### 4. Detailed Event Specifications Modal
- Complete schedule with date, time, and end time.
- Physical venue address with Google Maps link or direct virtual stream portal URL.
- Full multi-day agenda timeline with exact hours.
- Featured keynote speakers and instructor bios with affiliations.
- Prerequisites and preparation checklist.
- Direct **Add to Google Calendar** link generator.
- Native RFC-compliant **`.ics` file download** for Apple Calendar & Outlook.
- Instant link sharing with clipboard feedback.
- Interactive **RSVP simulation** with confirmed state.

### 5. Mobile & Touch Compatibility
- Strict $\ge 44\text{px}$ touch target compliance on all interactive elements.
- Viewport auto-zoom prevention on iOS (`min-h-[46px]`, `text-base sm:text-sm` search input).
- Adaptive grid layout (1 column on mobile, 2 columns on tablets, 3–4 columns on desktop).

### 6. Dark / Light Mode Support
- Persistent theme toggle between light and dark modes.
- Powered by Tailwind CSS v4 class-based variant (`@variant dark (&:where(.dark, .dark *));`).
- Automatically honors system `prefers-color-scheme` on first visit.

---

## 🏗️ Modular Architecture & Component Hierarchy

The project strictly adheres to modular component organization:

```text
src/
├── data/
│   └── mockEvents.js            # Curated event dataset with agendas, speakers, tags, images
├── utils/
│   └── calendar.js              # RFC-compliant .ics generator & Google Calendar URL builder
├── context/
│   ├── ThemeContext.jsx         # Dark/Light theme provider with localStorage sync
│   ├── NotificationContext.jsx  # Toast notification stack & dispatch system
│   └── FavouritesContext.jsx    # Set-backed favorites manager with localStorage persistence
├── hooks/
│   └── useEvents.js             # Unified useMemo search, filter, and sorting pipeline
├── components/
│   ├── layout/
│   │   ├── Container.jsx        # Responsive max-w-7xl layout container
│   │   └── Footer.jsx           # Quiet semantic footer with repository links
│   ├── common/
│   │   ├── StatBar.jsx          # Tabular numbers summary banner
│   │   └── EmptyState.jsx       # Zero-results and empty watchlist states
│   ├── ui/
│   │   └── SkeletonCard.jsx     # Pulse shimmer loading placeholder
│   └── events/
│       ├── SearchBar.jsx        # Keyboard-accessible search input ('/' shortcut)
│       ├── FilterBar.jsx        # Mobile-friendly dropdown selectors (Category, Format, Price, Sort)
│       ├── EventCard.jsx        # Responsive event card with unboxed metadata
│       ├── EventList.jsx        # Responsive event grid with loading & empty states
│       ├── EventDetailModal.jsx # Full-page modal dialog with calendar export & RSVP
│       └── FavouritesDrawer.jsx # Slide-out watchlist drawer with batch clear
├── App.jsx                      # Main application view with header actions
├── main.jsx                     # Vite React entry point
└── index.css                    # Tailwind CSS v4 styles with dark variant configuration
```

---

## 💡 Key Technical Decisions

1. **JavaScript + React 19 (Pure JSX):**
   - Implemented in clean, modern JavaScript without TypeScript compilation overhead for quick local execution across any Node environment.

2. **Single-Pass Memoized Filter Pipeline (`useEvents.js`):**
   - Search query, category selection, format constraints, pricing tiers, and sorting logic execute in a unified `useMemo` pipeline, preventing cascading re-renders and guaranteeing $O(N)$ execution speed.

3. **Robust Duplicate Prevention (`FavouritesContext.jsx`):**
   - Utilizes `Set<string>` internally. Checking if an event is already saved is an $O(1)$ constant-time lookup, preventing duplicate entries regardless of race conditions.

4. **Zero-Broken-Image Resilience:**
   - Image containers include gradient overlays and `onError` fallback handlers so that broken URLs or offline assets never produce empty, broken image boxes.

5. **Client-Side Calendar Export (`calendar.js`):**
   - Dynamically constructs Blob-based `.ics` file downloads without needing backend endpoints.

---

## 💻 Local Setup & Execution Guide

### Prerequisites
- **Node.js** (v18.x or v20.x+)
- **npm** (v9.x or v10.x+)

### Installation
```bash
# 1. Clone the repository
git clone <REPOSITORY_URL>
cd devboard

# 2. Install dependencies (use --legacy-peer-deps if npm encounters peer warnings)
npm install --legacy-peer-deps

# 3. Start local development server
npm run dev
```

Open **`http://localhost:3000`** in your browser.

---

## 📹 Video Walkthrough Outline

For your submission video walkthrough, use this 3-minute structure:

1. **Introduction (0:00 - 0:30):**
   - Introduce DevBoard: A responsive discovery web application for developer events, workshops, and hackathons.
   - Mention the tech stack: React 19, JavaScript, Tailwind CSS v4, Vite.
2. **Core Features Walkthrough (0:30 - 1:30):**
   - Demo case-insensitive search (e.g. search "React" or "Rust").
   - Demo category dropdown (Hackathons, Workshops, etc.) and format dropdowns.
   - Show how search and dropdown filters work seamlessly together.
   - Demo saving/removing favourites with immediate toast feedback and counter updates.
3. **Event Details & Bonus Features (1:30 - 2:30):**
   - Open an event modal: demonstrate agenda, speakers, Google Calendar sync, and `.ics` file download.
   - Open the dedicated Saved drawer: demonstrate quick removal and clear-all action.
   - Demonstrate the dark/light mode toggle.
   - Show responsiveness by resizing the browser down to mobile viewport (375px).
4. **Technical Decisions & Challenges (2:30 - 3:00):**
   - Highlight the modular component architecture.
   - Mention $O(1)$ Set-backed deduplication and single-pass memoized filter pipeline.
   - Disclose AI usage transparently.

---

## 🤖 AI Usage Declaration

Assisted by Google AI Studio agent tooling for:
- Initial architectural blueprint and component layout scaffolding.
- Generating high-resolution domain visual banners for tech categories.
- Edge-case testing (e.g. mobile touch targets, zero-results states, and peer dependency resolution).
- All application code, state logic, styling, and JavaScript conversions were thoroughly reviewed and verified.
