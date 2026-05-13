# Around You

## Overview

**Around You** is a frontend demo project built with HTML, CSS, and JavaScript. It shows how to:
- detect the user's location with the Geolocation API
- display an interactive map using Leaflet
- fetch nearby places from OpenStreetMap/Nominatim
- render responsive cards and buttons
- save favorites locally using `localStorage`

## Project Structure

- `index.html` — page layout and sections
- `style.css` — responsive styling, hero section, card design, map layout
- `script.js` — geolocation, map initialization, place fetching, UI rendering

## How to Run

1. Open `index.html` in a browser.
2. Allow location access when prompted.
3. Scroll to the map and nearby places section.

> Tip: Use Chrome or Edge for best results and open Developer Tools if you want to inspect network calls.

## Demo Flow for Presentation

1. **Start screen**
   - Show the hero section with the title, description, and CTA button.
   - Mention the project goal: help users find nearby places quickly.

2. **Navigation**
   - Point out the navigation links: Home, Places, About.
   - Mention mobile menu support.

3. **Location and map**
   - Explain the Geolocation API and live location detection.
   - Show the Leaflet map loading at the user location or fallback location.

4. **Nearby places**
   - Demonstrate the place cards generated from OpenStreetMap/Nominatim.
   - Click `Open in Maps` to show external map integration.
   - Mention `Save` functionality stored in browser `localStorage`.

5. **About section**
   - Use the About section to highlight technical skills: responsive layout, JS DOM handling, API integration.

## Why this project is strong for hiring

- Clean UI and responsive design
- Real-world mapping and location features
- Modern JavaScript and DOM manipulation
- Practical use of third-party APIs and browser storage

## Notes for Improvement

If you want to extend the app later, consider adding:
- category filters (restaurants, cafes, parks)
- search input for any location or keyword
- saved favorites list with removal support
- improved error messages and loading states

---

**Ready for presentation:** Open `index.html`, then walk through the sections and explain how the app connects UI, location data, and map results together.