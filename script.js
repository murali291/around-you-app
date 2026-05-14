const DEFAULT_LOCATION = 'Indiranagar, Bangalore';
const STORAGE_FAVORITES = 'aroundYouFavorites';
const STORAGE_SEARCHES = 'aroundYouRecentSearches';
const STORAGE_THEME = 'aroundYouTheme';

const categories = [
  { id: 'restaurants', title: 'Restaurants', description: 'Top dining spots and local favorites.', icon: '🍽️' },
  { id: 'cafes', title: 'Cafes', description: 'Cozy coffee shops and brunch cafes.', icon: '☕' },
  { id: 'hospitals', title: 'Hospitals', description: 'Trusted healthcare and emergency services.', icon: '🏥' },
  { id: 'gyms', title: 'Gyms', description: 'Fitness centers and wellness studios.', icon: '🏋️' },
  { id: 'shopping', title: 'Shopping', description: 'Malls and local retail districts.', icon: '🛍️' },
  { id: 'attractions', title: 'Attractions', description: 'Tourist highlights and local landmarks.', icon: '🎡' },
  { id: 'petrol', title: 'Petrol bunks', description: 'Fuel stations for swift refuels.', icon: '⛽' },
  { id: 'transport', title: 'Transport', description: 'Bus and train hubs nearby.', icon: '🚉' },
  { id: 'hotels', title: 'Hotels', description: 'Boutique stays and modern rooms.', icon: '🏨' },
  { id: 'parks', title: 'Parks', description: 'Green spaces for running and relaxing.', icon: '🌳' }
];

const places = [
  {
    id: 'grain-bistro',
    name: 'Grain Bistro',
    category: 'restaurants',
    address: '12th Main, Indiranagar',
    description: 'Modern dining with biryani, kebabs and craft cocktails.',
    rating: 4.8,
    distance: '1.2 km',
    status: 'Open now',
    price: '₹300 - ₹800',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80',
    tag: 'Trending'
  },
  {
    id: 'fava-cafe',
    name: 'Fava Cafe',
    category: 'restaurants',
    address: '100 Feet Road, Indiranagar',
    description: 'Mediterranean kitchen with light brunch and sharable plates.',
    rating: 4.7,
    distance: '1.5 km',
    status: 'Open now',
    price: '₹250 - ₹650',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    tag: 'Popular'
  },
  {
    id: 'blue-tokai',
    name: 'Blue Tokai',
    category: 'cafes',
    address: 'Indiranagar 100 Feet Road',
    description: 'Specialty coffee, cold brew and seasonal tasting flights.',
    rating: 4.9,
    distance: '900 m',
    status: 'Open now',
    price: '₹150 - ₹320',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    tag: 'Top Rated'
  },
  {
    id: 'longstay-inn',
    name: 'Longstay Inn',
    category: 'hotels',
    address: 'Old Madras Road',
    description: 'Modern rooms, rooftop lounge and city views.',
    rating: 4.6,
    distance: '2.0 km',
    status: 'Check in available',
    price: '₹3,500 - ₹6,800',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Popular'
  },
  {
    id: 'cult-fit',
    name: 'Cult.fit',
    category: 'gyms',
    address: 'Brookefield',
    description: 'High-energy workouts, group classes and personal trainers.',
    rating: 4.5,
    distance: '1.0 km',
    status: 'Open now',
    price: '₹3,000 / mo',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    tag: 'Trending'
  },
  {
    id: 'apollo-cradle',
    name: 'Apollo Cradle',
    category: 'hospitals',
    address: 'Old Airport Road',
    description: '24/7 emergency care with maternity and specialty centers.',
    rating: 4.4,
    distance: '2.4 km',
    status: 'Open now',
    price: 'Premium',
    image: 'https://images.unsplash.com/photo-1580281657522-9b7b3c0c8f6d?auto=format&fit=crop&w=900&q=80',
    tag: 'Popular'
  },
  {
    id: 'milkyway-park',
    name: 'Milkyway Park',
    category: 'parks',
    address: '7th Block, Jayanagar',
    description: 'Wide lawns, jogging trails and outdoor seating.',
    rating: 4.7,
    distance: '1.3 km',
    status: 'Open until 7:00 PM',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    tag: 'Trending'
  },
  {
    id: 'mall-square',
    name: 'Mall Square',
    category: 'shopping',
    address: 'Forum Mall, Koramangala',
    description: 'Fashion, electronics, food court and cinema.',
    rating: 4.5,
    distance: '2.8 km',
    status: 'Open now',
    price: 'Varies',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    tag: 'Trending'
  },
  {
    id: 'city-eye',
    name: 'City Eye',
    category: 'attractions',
    address: 'Riverside Drive',
    description: 'Riverside attraction with skyline views and live events.',
    rating: 4.8,
    distance: '3.1 km',
    status: 'Open until 11:00 PM',
    price: '₹200 - ₹500',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=900&q=80',
    tag: 'Top Rated'
  },
  {
    id: 'shell-crossroad',
    name: 'Shell Crossroad',
    category: 'petrol',
    address: 'Indiranagar Cross',
    description: '24/7 fuel station with convenience store.',
    rating: 4.2,
    distance: '850 m',
    status: 'Open now',
    price: 'Petrol ₹107 / L',
    image: 'https://images.unsplash.com/photo-1512427691650-1d3e0443f8e4?auto=format&fit=crop&w=900&q=80',
    tag: 'Popular'
  },
  {
    id: 'metro-junction',
    name: 'Metro Junction',
    category: 'transport',
    address: 'Indiranagar Metro Station',
    description: 'Rapid transit access for the city’s busiest neighborhoods.',
    rating: 4.6,
    distance: '1.1 km',
    status: 'Running now',
    price: '₹30 - ₹50',
    image: 'https://images.unsplash.com/photo-1514619146873-ffb81762b267?auto=format&fit=crop&w=900&q=80',
    tag: 'Trending'
  },
  {
    id: 'central-station',
    name: 'Central Station',
    category: 'transport',
    address: 'Bangalore To',
    description: 'Main rail hub with long-distance and suburban trains.',
    rating: 4.4,
    distance: '4.5 km',
    status: 'Active',
    price: 'Varies',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    tag: 'Popular'
  }
];

const MARKER_POSITIONS = [
  { top: '18%', left: '20%' },
  { top: '15%', left: '65%' },
  { top: '45%', left: '72%' },
  { top: '72%', left: '55%' },
  { top: '65%', left: '28%' },
  { top: '33%', left: '42%' },
  { top: '55%', left: '18%' },
  { top: '22%', left: '48%' },
  { top: '78%', left: '72%' },
  { top: '50%', left: '60%' }
];

const dom = {
  menuBtn: document.querySelector('.menu-btn'),
  navLinks: document.querySelector('.nav-links'),
  themeToggle: document.getElementById('themeToggle'),
  exploreBtn: document.getElementById('exploreBtn'),
  savedQuickBtn: document.getElementById('savedQuickBtn'),
  searchInput: document.getElementById('searchInput'),
  locationInput: document.getElementById('locationInput'),
  categoryGrid: document.getElementById('categoryGrid'),
  placesContainer: document.getElementById('placesContainer'),
  loadingSkeleton: document.getElementById('loadingSkeleton'),
  filterRow: document.getElementById('filterRow'),
  mapCanvas: document.getElementById('mapCanvas'),
  mapLocationText: document.getElementById('mapLocationText'),
  activeCategoryLabel: document.getElementById('activeCategory'),
  markerCountLabel: document.getElementById('markerCount'),
  refreshMapBtn: document.getElementById('refreshMapBtn'),
  toast: document.getElementById('toast'),
  savedGrid: document.getElementById('savedGrid'),
  trendingSlider: document.getElementById('trendingSlider'),
  backToTop: document.getElementById('backToTop'),
  quickFavBtn: document.getElementById('quickFavBtn'),
  searchPanel: document.getElementById('searchPanel'),
  searchSuggestions: document.getElementById('searchSuggestions'),
  clearRecent: document.getElementById('clearRecent'),
  newsletterForm: document.getElementById('newsletterForm'),
  newsletterEmail: document.getElementById('newsletterEmail'),
  faqAccordion: document.getElementById('faqAccordion'),
  heroTyping: document.getElementById('heroTyping')
};

let activeCategory = 'all';
let searchQuery = '';
let favorites = [];
let recentSearches = [];
let prefersDark = false;
let searchDebounceTimer = null;
let typingIndex = 0;
let typingLetter = 0;
let typingForward = true;
const typingTerms = ['restaurants.', 'cafes.', 'gyms.', 'hospitals.', 'petrol bunks.', 'train stations.'];

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add('show');
  window.clearTimeout(dom.toast.timeoutId);
  dom.toast.timeoutId = window.setTimeout(() => dom.toast.classList.remove('show'), 3000);
}

function saveFavorites() {
  localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(favorites));
}

function loadFavorites() {
  favorites = JSON.parse(localStorage.getItem(STORAGE_FAVORITES)) || [];
}

function saveRecentSearches() {
  localStorage.setItem(STORAGE_SEARCHES, JSON.stringify(recentSearches));
}

function loadRecentSearches() {
  recentSearches = JSON.parse(localStorage.getItem(STORAGE_SEARCHES)) || [];
}

function updateStats() {
  document.getElementById('statPlaces').textContent = places.length;
  document.getElementById('statFavorites').textContent = favorites.length;
  document.getElementById('statSearches').textContent = recentSearches.length;
}

function getCategoryTitle(id) {
  return categories.find((item) => item.id === id)?.title || id;
}

function createSkeletonCards() {
  dom.loadingSkeleton.innerHTML = '';
  dom.loadingSkeleton.classList.remove('hidden');
  for (let i = 0; i < 6; i += 1) {
    const card = document.createElement('div');
    card.className = 'skeleton-card';
    card.innerHTML = '<div class="skeleton-row"></div><div class="skeleton-row"></div><div class="skeleton-row short"></div>';
    dom.loadingSkeleton.appendChild(card);
  }
}

function hideSkeleton() {
  dom.loadingSkeleton.innerHTML = '';
  dom.loadingSkeleton.classList.add('hidden');
}

function filterPlaces() {
  const query = searchQuery.trim().toLowerCase();
  return places.filter((place) => {
    const matchesCategory = activeCategory === 'all' || place.category === activeCategory;
    const matchesSearch = !query || [place.name, place.category, place.address, place.description]
      .some((field) => field.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });
}

function renderPlaces() {
  createSkeletonCards();
  window.setTimeout(() => {
    const filteredPlaces = filterPlaces();
    if (filteredPlaces.length === 0) {
      dom.placesContainer.innerHTML = '<div class="places-empty"><strong>No places found.</strong><p>Try adjusting your keywords or category.</p></div>';
      hideSkeleton();
      return;
    }

    dom.placesContainer.innerHTML = filteredPlaces.map((place) => `
      <article class="place-card reveal">
        <img class="place-thumbnail" src="${place.image}" alt="${place.name}" loading="lazy" />
        <div class="place-content">
          <div class="place-meta">
            <span>⭐ ${place.rating}</span>
            <span>• ${place.distance}</span>
            <span>• ${place.status}</span>
          </div>
          <div>
            <h3 class="place-title">${place.name}</h3>
            <p class="place-description">${place.description}</p>
          </div>
          <div class="place-tags">
            <span class="place-pill">${place.price}</span>
            <span class="place-pill">${getCategoryTitle(place.category)}</span>
          </div>
          <div class="place-actions">
            <button class="btn-secondary" data-action="directions" data-id="${place.id}">Open in Maps</button>
            <button class="btn-primary" data-action="favorite" data-id="${place.id}">${favorites.includes(place.id) ? '★ Saved' : '☆ Save'}</button>
          </div>
        </div>
      </article>
    `).join('');

    hideSkeleton();
    attachPlaceHandlers();
    initRevealAnimations();
  }, 600);
}

function renderSavedPlaces() {
  if (favorites.length === 0) {
    dom.savedGrid.innerHTML = '<div class="places-empty"><strong>No saved places yet.</strong><p>Tap the save button on any card to keep favorites here.</p></div>';
    return;
  }

  const savedPlaces = places.filter((place) => favorites.includes(place.id));
  dom.savedGrid.innerHTML = savedPlaces.map((place) => `
    <article class="saved-card reveal">
      <img class="place-thumbnail" src="${place.image}" alt="${place.name}" loading="lazy" />
      <div class="saved-content">
        <div class="place-meta">
          <span>⭐ ${place.rating}</span>
          <span>• ${place.distance}</span>
          <span>• ${place.status}</span>
        </div>
        <h3 class="place-title">${place.name}</h3>
        <p class="place-description">${place.description}</p>
        <div class="saved-tags">
          <span class="saved-pill">${getCategoryTitle(place.category)}</span>
          <span class="saved-pill">${place.address}</span>
        </div>
        <div class="saved-actions">
          <button class="btn-secondary" data-action="directions" data-id="${place.id}">Open in Maps</button>
          <button class="btn-primary" data-action="remove" data-id="${place.id}">Remove</button>
        </div>
      </div>
    </article>
  `).join('');
  attachSavedHandlers();
}

function renderTrending() {
  const trendingPlaces = places
    .filter((place) => ['Trending', 'Popular', 'Top Rated'].includes(place.tag))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  dom.trendingSlider.innerHTML = trendingPlaces.map((place) => `
    <article class="trending-card reveal">
      <span class="trending-badge">${place.tag}</span>
      <h3>${place.name}</h3>
      <p>${place.description}</p>
      <div class="trending-meta">
        <span>⭐ ${place.rating}</span>
        <span>• ${place.distance}</span>
      </div>
    </article>
  `).join('');
}

function attachPlaceHandlers() {
  dom.placesContainer.querySelectorAll('[data-action="directions"]').forEach((button) => {
    button.addEventListener('click', () => {
      const place = places.find((item) => item.id === button.dataset.id);
      if (!place) return;
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' ' + place.address)}`);
      showToast(`Opening ${place.name} in Maps...`);
    });
  });

  dom.placesContainer.querySelectorAll('[data-action="favorite"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const index = favorites.indexOf(id);
      if (index === -1) {
        favorites.push(id);
        button.textContent = '★ Saved';
        showToast('Saved to favorites');
      } else {
        favorites.splice(index, 1);
        button.textContent = '☆ Save';
        showToast('Removed from favorites');
      }
      saveFavorites();
      updateStats();
      renderSavedPlaces();
    });
  });
}

function attachSavedHandlers() {
  dom.savedGrid.querySelectorAll('[data-action="directions"]').forEach((button) => {
    button.addEventListener('click', () => {
      const place = places.find((item) => item.id === button.dataset.id);
      if (!place) return;
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' ' + place.address)}`);
      showToast(`Opening ${place.name} in Maps...`);
    });
  });

  dom.savedGrid.querySelectorAll('[data-action="remove"]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      favorites = favorites.filter((favoriteId) => favoriteId !== id);
      saveFavorites();
      updateStats();
      renderSavedPlaces();
      renderPlaces();
    });
  });
}

function renderMapMarkers() {
  dom.mapCanvas.querySelectorAll('.map-marker').forEach((marker) => marker.remove());
  const filteredPlaces = filterPlaces();
  filteredPlaces.slice(0, MARKER_POSITIONS.length).forEach((place, index) => {
    const position = MARKER_POSITIONS[index];
    const marker = document.createElement('div');
    marker.className = 'map-marker reveal';
    marker.style.top = position.top;
    marker.style.left = position.left;
    marker.textContent = place.category === 'transport' ? '🚉' : place.category === 'petrol' ? '⛽' : '📍';
    marker.title = `${place.name} • ${place.distance}`;
    dom.mapCanvas.appendChild(marker);
  });
  dom.markerCountLabel.textContent = Math.min(filteredPlaces.length, MARKER_POSITIONS.length);
}

function updateMapDetails() {
  dom.activeCategoryLabel.textContent = activeCategory === 'all' ? 'All' : getCategoryTitle(activeCategory);
  dom.mapLocationText.textContent = dom.locationInput.value.trim() || DEFAULT_LOCATION;
}

function handleCategorySelect(category) {
  activeCategory = category;
  dom.filterRow.querySelector('.filter-pill.selected')?.classList.remove('selected');
  dom.filterRow.querySelector(`[data-filter="${category}"]`)?.classList.add('selected');
  dom.categoryGrid.querySelectorAll('.category-card').forEach((card) => {
    card.classList.toggle('selected', card.dataset.category === category);
  });
  updateMapDetails();
  renderPlaces();
  renderTrending();
  renderMapMarkers();
  showToast(`${getCategoryTitle(category)} filter applied`);
}

function initCategoryCards() {
  dom.categoryGrid.innerHTML = categories.map((category) => `
    <article class="category-card" data-category="${category.id}">
      <div class="category-card-icon">${category.icon}</div>
      <div>
        <h3>${category.title}</h3>
        <p>${category.description}</p>
      </div>
    </article>
  `).join('');

  dom.categoryGrid.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('click', () => handleCategorySelect(card.dataset.category));
  });
}

function initFilterPills() {
  const pills = ['all', ...categories.map((item) => item.id)];
  dom.filterRow.innerHTML = pills.map((pill) => `
    <div class="filter-pill ${pill === 'all' ? 'selected' : ''}" data-filter="${pill}">${pill === 'all' ? 'All' : getCategoryTitle(pill)}</div>
  `).join('');

  dom.filterRow.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => handleCategorySelect(pill.dataset.filter));
  });
}

function toggleMenu() {
  dom.navLinks.classList.toggle('active');
}

function openSearchPanel() {
  dom.searchPanel.classList.remove('hidden');
}

function closeSearchPanel() {
  dom.searchPanel.classList.add('hidden');
}

function buildSearchSuggestions(query) {
  const normalized = query.trim().toLowerCase();
  const suggestions = [];
  if (normalized) {
    const categoryMatches = categories
      .filter((category) => category.title.toLowerCase().includes(normalized))
      .map((category) => category.title);
    const placeMatches = places
      .filter((place) => place.name.toLowerCase().includes(normalized) || place.address.toLowerCase().includes(normalized))
      .slice(0, 4)
      .map((place) => place.name);
    suggestions.push(...categoryMatches, ...placeMatches);
  }

  suggestions.push(...recentSearches.slice(0, 5));
  return Array.from(new Set(suggestions)).slice(0, 8);
}

function populateSearchPanel(query) {
  const suggestions = buildSearchSuggestions(query);
  if (suggestions.length === 0) {
    dom.searchSuggestions.innerHTML = '<li>No recent or matching searches yet.</li>';
    return;
  }
  dom.searchSuggestions.innerHTML = suggestions.map((item) => `<li>${item}</li>`).join('');
  dom.searchSuggestions.querySelectorAll('li').forEach((item) => item.addEventListener('click', () => {
    dom.searchInput.value = item.textContent;
    searchQuery = item.textContent.toLowerCase();
    addRecentSearch(item.textContent);
    renderPlaces();
    renderMapMarkers();
    closeSearchPanel();
  }));
}

function addRecentSearch(term) {
  const trimmed = term.trim();
  if (!trimmed) return;
  recentSearches = [trimmed, ...recentSearches.filter((item) => item.toLowerCase() !== trimmed.toLowerCase())].slice(0, 8);
  saveRecentSearches();
  updateStats();
}

function initSearchListeners() {
  dom.searchInput.addEventListener('input', (event) => {
    searchQuery = event.target.value.toLowerCase();
    openSearchPanel();
    populateSearchPanel(event.target.value);
    window.clearTimeout(searchDebounceTimer);
    searchDebounceTimer = window.setTimeout(() => {
      renderPlaces();
      renderMapMarkers();
    }, 240);
  });

  dom.searchInput.addEventListener('focus', () => {
    populateSearchPanel(dom.searchInput.value);
    openSearchPanel();
  });

  dom.searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addRecentSearch(dom.searchInput.value);
      renderPlaces();
      renderMapMarkers();
      closeSearchPanel();
    }
  });

  dom.clearRecent.addEventListener('click', () => {
    recentSearches = [];
    saveRecentSearches();
    populateSearchPanel(dom.searchInput.value);
    updateStats();
    showToast('Recent searches cleared');
  });
}

function initNewsletter() {
  dom.newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = dom.newsletterEmail.value.trim();
    if (!email) {
      showToast('Enter an email to subscribe.');
      return;
    }
    dom.newsletterEmail.value = '';
    showToast('Thanks! You’re subscribed.');
  });
}

function initFAQAccordion() {
  dom.faqAccordion.querySelectorAll('.accordion-item').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.answer;
      const body = document.getElementById(targetId);
      const isActive = button.classList.contains('active');
      dom.faqAccordion.querySelectorAll('.accordion-item').forEach((item) => item.classList.remove('active'));
      dom.faqAccordion.querySelectorAll('.accordion-body').forEach((item) => item.classList.remove('show'));
      if (!isActive) {
        button.classList.add('active');
        body.classList.add('show');
      }
    });
  });
}

function initTypingAnimation() {
  if (!dom.heroTyping) return;
  const updateTyping = () => {
    const currentTerm = typingTerms[typingIndex];
    if (typingForward) {
      typingLetter += 1;
      if (typingLetter > currentTerm.length) {
        typingForward = false;
        window.setTimeout(updateTyping, 1200);
        return;
      }
    } else {
      typingLetter -= 1;
      if (typingLetter < 0) {
        typingForward = true;
        typingIndex = (typingIndex + 1) % typingTerms.length;
      }
    }
    dom.heroTyping.textContent = currentTerm.slice(0, Math.max(typingLetter, 0));
    window.setTimeout(updateTyping, typingForward ? 120 : 60);
  };
  updateTyping();
}

function handleScroll() {
  const shouldShow = window.scrollY > 420;
  dom.backToTop.classList.toggle('show', shouldShow);
  dom.quickFavBtn.classList.toggle('show', shouldShow);
}

function initListeners() {
  dom.menuBtn.addEventListener('click', toggleMenu);
  dom.themeToggle.addEventListener('click', () => {
    prefersDark = !prefersDark;
    updateTheme();
  });
  dom.exploreBtn.addEventListener('click', () => {
    document.getElementById('places').scrollIntoView({ behavior: 'smooth' });
    showToast('Let’s explore nearby places.');
  });
  dom.savedQuickBtn.addEventListener('click', () => {
    document.getElementById('savedPlaces').scrollIntoView({ behavior: 'smooth' });
  });
  dom.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  dom.quickFavBtn.addEventListener('click', () => document.getElementById('savedPlaces').scrollIntoView({ behavior: 'smooth' }));
  dom.refreshMapBtn.addEventListener('click', () => {
    renderMapMarkers();
    showToast('Map markers refreshed');
  });

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', (event) => {
    if (!event.target.closest('.search-panel') && !event.target.closest('#searchInput')) {
      closeSearchPanel();
    }
    if (!event.target.closest('.nav-links') && !event.target.closest('.menu-btn')) {
      dom.navLinks.classList.remove('active');
    }
  });

  dom.locationInput.addEventListener('change', () => {
    updateMapDetails();
    showToast(`Searching around ${dom.locationInput.value || DEFAULT_LOCATION}`);
  });
}

function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function updateTheme() {
  document.documentElement.classList.toggle('dark', prefersDark);
  dom.themeToggle.textContent = prefersDark ? '☀️' : '🌙';
  localStorage.setItem(STORAGE_THEME, prefersDark ? 'dark' : 'light');
}

function initTheme() {
  const storedTheme = localStorage.getItem(STORAGE_THEME);
  prefersDark = storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  updateTheme();
}

function init() {
  initTheme();
  loadFavorites();
  loadRecentSearches();
  updateStats();
  initCategoryCards();
  initFilterPills();
  initSearchListeners();
  initNewsletter();
  initFAQAccordion();
  renderPlaces();
  renderSavedPlaces();
  renderTrending();
  renderMapMarkers();
  updateMapDetails();
  initListeners();
  initRevealAnimations();
  initTypingAnimation();
  showToast('🎉 Welcome to Around You — discover nearby now!');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
