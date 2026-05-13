const DEFAULT_LAT = 12.9719;
const DEFAULT_LON = 77.6408;
const DEFAULT_LOCATION = 'Indiranagar, Bangalore';

const categories = [
  { id: 'restaurants', title: 'Restaurants', description: 'Top dining spots and local favorites.', icon: '🍽️' },
  { id: 'cafes', title: 'Cafes', description: 'Cozy coffee shops and brunch cafes.', icon: '☕' },
  { id: 'hotels', title: 'Hotels', description: 'Comfortable stays and boutique hotels.', icon: '🏨' },
  { id: 'gyms', title: 'Gyms', description: 'Fitness centers and wellness studios.', icon: '🏋️' },
  { id: 'hospitals', title: 'Hospitals', description: 'Trusted healthcare and emergency services.', icon: '🏥' },
  { id: 'parks', title: 'Parks', description: 'Green spaces and outdoor escapes.', icon: '🌳' },
  { id: 'shopping', title: 'Shopping', description: 'Malls and local shopping districts.', icon: '🛍️' },
  { id: 'attractions', title: 'Attractions', description: 'Landmarks and tourist highlights.', icon: '🎡' }
];

const places = [
  {
    id: 'grain-bistro',
    name: 'Grain Bistro',
    category: 'restaurants',
    description: 'Modern dining with biryani, kebabs and craft cocktails.',
    rating: 4.8,
    distance: '1.2 km',
    status: 'Open now',
    price: '₹300 - ₹800',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80',
    lat: 12.9725,
    lon: 77.6400
  },
  {
    id: 'fava-cafe',
    name: 'Fava',
    category: 'restaurants',
    description: 'Charming Mediterranean kitchen with salads and brunch.',
    rating: 4.7,
    distance: '1.5 km',
    status: 'Open now',
    price: '₹250 - ₹650',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    lat: 12.9689,
    lon: 77.6422
  },
  {
    id: 'blue-tokai',
    name: 'Blue Tokai',
    category: 'cafes',
    description: 'Specialty coffee, cold brew and light bites.',
    rating: 4.9,
    distance: '900 m',
    status: 'Open now',
    price: '₹150 - ₹300',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    lat: 12.9738,
    lon: 77.6465
  },
  {
    id: 'longstay-inn',
    name: 'Longstay Inn',
    category: 'hotels',
    description: 'Modern rooms, rooftop lounge and city views.',
    rating: 4.6,
    distance: '2.0 km',
    status: 'Check in available',
    price: '₹3500 - ₹6800',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    lat: 12.9755,
    lon: 77.6382
  },
  {
    id: 'cult-fit',
    name: 'Cult.fit',
    category: 'gyms',
    description: 'High-energy workouts, group classes and trainers.',
    rating: 4.5,
    distance: '1.0 km',
    status: 'Open now',
    price: '₹3000 / mo',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    lat: 12.9720,
    lon: 77.6374
  },
  {
    id: 'apollo-cradle',
    name: 'Apollo Cradle',
    category: 'hospitals',
    description: '24/7 emergency care with maternity and specialties.',
    rating: 4.4,
    distance: '2.4 km',
    status: 'Open now',
    price: 'Premium',
    image: 'https://images.unsplash.com/photo-1580281657522-9b7b3c0c8f6d?auto=format&fit=crop&w=900&q=80',
    lat: 12.9768,
    lon: 77.6419
  },
  {
    id: 'milkyway-park',
    name: 'Milkyway Park',
    category: 'parks',
    description: 'Wide lawns, jogging trails and outdoor seating.',
    rating: 4.7,
    distance: '1.3 km',
    status: 'Open until 7:00 PM',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    lat: 12.9710,
    lon: 77.6457
  },
  {
    id: 'mall-square',
    name: 'Mall Square',
    category: 'shopping',
    description: 'Fashion, electronics, food court and cinema.',
    rating: 4.5,
    distance: '2.8 km',
    status: 'Open now',
    price: 'Varies',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    lat: 12.9802,
    lon: 77.6430
  },
  {
    id: 'city-eye',
    name: 'City Eye',
    category: 'attractions',
    description: 'Riverside attraction with skyline views and live events.',
    rating: 4.8,
    distance: '3.1 km',
    status: 'Open until 11:00 PM',
    price: '₹200 - ₹500',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=900&q=80',
    lat: 12.9786,
    lon: 77.6364
  }
];

const dom = {
  menuBtn: document.querySelector('.menu-btn'),
  navLinks: document.querySelector('.nav-links'),
  themeToggle: document.getElementById('themeToggle'),
  exploreBtn: document.getElementById('exploreBtn'),
  searchInput: document.getElementById('searchInput'),
  locationInput: document.getElementById('locationInput'),
  categoryGrid: document.getElementById('categoryGrid'),
  placesContainer: document.getElementById('placesContainer'),
  loadingSkeleton: document.getElementById('loadingSkeleton'),
  filterRow: document.getElementById('filterRow'),
  mapLocationText: document.getElementById('mapLocationText'),
  activeCategoryLabel: document.getElementById('activeCategory'),
  markerCountLabel: document.getElementById('markerCount'),
  refreshMapBtn: document.getElementById('refreshMapBtn'),
  toast: document.getElementById('toast')
};

let map;
let markerLayer;
let activeCategory = 'all';
let searchQuery = '';
let favorites = [];
let prefersDark = false;

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

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add('show');
  window.clearTimeout(dom.toast.timeoutId);
  dom.toast.timeoutId = window.setTimeout(() => dom.toast.classList.remove('show'), 2800);
}

function saveFavorites() {
  localStorage.setItem('aroundYouFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
  favorites = JSON.parse(localStorage.getItem('aroundYouFavorites')) || [];
}

function updateTheme() {
  document.documentElement.classList.toggle('dark', prefersDark);
  dom.themeToggle.textContent = prefersDark ? '☀️' : '🌙';
  localStorage.setItem('aroundYouTheme', prefersDark ? 'dark' : 'light');
}

function initTheme() {
  const storedTheme = localStorage.getItem('aroundYouTheme');
  if (storedTheme) {
    prefersDark = storedTheme === 'dark';
  } else {
    prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  updateTheme();
}

function toggleMenu() {
  dom.navLinks.classList.toggle('active');
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
    card.addEventListener('click', () => {
      const selected = card.dataset.category;
      handleCategorySelect(selected);
    });
  });
}

function initFilterPills() {
  const pills = ['all', ...categories.map((item) => item.id)];
  dom.filterRow.innerHTML = pills.map((pill) => `
    <div class="filter-pill ${pill === 'all' ? 'selected' : ''}" data-filter="${pill}">${pill === 'all' ? 'All' : pill.charAt(0).toUpperCase() + pill.slice(1)}</div>
  `).join('');
  dom.filterRow.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      dom.filterRow.querySelector('.filter-pill.selected')?.classList.remove('selected');
      pill.classList.add('selected');
      handleCategorySelect(pill.dataset.filter);
    });
  });
}

function handleCategorySelect(category) {
  activeCategory = category;
  dom.activeCategoryLabel.textContent = category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1);
  renderPlaces();
  updateMapMarkers();
  showToast(`${dom.activeCategoryLabel.textContent} filter applied`);
}

function filterPlaces() {
  return places.filter((place) => {
    const matchesCategory = activeCategory === 'all' || place.category === activeCategory;
    const matchesSearch = place.name.toLowerCase().includes(searchQuery) || place.category.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });
}

function renderPlaces() {
  createSkeletonCards();
  window.setTimeout(() => {
    const filteredPlaces = filterPlaces();
    dom.placesContainer.innerHTML = filteredPlaces.map((place) => `
      <article class="place-card">
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
            <span class="place-pill">${place.category}</span>
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

    if (filteredPlaces.length === 0) {
      dom.placesContainer.innerHTML = '<p class="empty-state">No places matched your search. Try a different category or search term.</p>';
    }
  }, 700);
}

function attachPlaceHandlers() {
  dom.placesContainer.querySelectorAll('button[data-action="directions"]').forEach((button) => {
    button.addEventListener('click', () => {
      const place = places.find((item) => item.id === button.dataset.id);
      if (place) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name)}`);
      }
    });
  });
  dom.placesContainer.querySelectorAll('button[data-action="favorite"]').forEach((button) => {
    button.addEventListener('click', () => {
      const place = places.find((item) => item.id === button.dataset.id);
      if (!place) return;
      const index = favorites.indexOf(place.id);
      if (index === -1) {
        favorites.push(place.id);
        button.textContent = '★ Saved';
        showToast(`${place.name} added to favorites`);
      } else {
        favorites.splice(index, 1);
        button.textContent = '☆ Save';
        showToast(`${place.name} removed from favorites`);
      }
      saveFavorites();
    });
  });
}

function initMap(lat = DEFAULT_LAT, lon = DEFAULT_LON) {
  map = L.map('map', { zoomControl: false }).setView([lat, lon], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  L.marker([lat, lon]).addTo(markerLayer).bindPopup('You are here').openPopup();
  updateMapMarkers();
}

function updateMapMarkers() {
  if (!map || !markerLayer) return;
  markerLayer.clearLayers();
  L.marker([DEFAULT_LAT, DEFAULT_LON]).addTo(markerLayer).bindPopup(DEFAULT_LOCATION);
  const filteredPlaces = filterPlaces();
  filteredPlaces.forEach((place) => {
    L.marker([place.lat, place.lon])
      .addTo(markerLayer)
      .bindPopup(`<strong>${place.name}</strong><br>${place.distance}`);
  });
  dom.markerCountLabel.textContent = filteredPlaces.length + 1;
}

function refreshMarkers() {
  updateMapMarkers();
  showToast('Map markers refreshed');
}

function initListeners() {
  dom.menuBtn.addEventListener('click', toggleMenu);
  dom.themeToggle.addEventListener('click', () => {
    prefersDark = !prefersDark;
    updateTheme();
  });
  dom.exploreBtn.addEventListener('click', () => {
    document.getElementById('places').scrollIntoView({ behavior: 'smooth' });
  });
  dom.searchInput.addEventListener('input', (event) => {
    searchQuery = event.target.value.trim().toLowerCase();
    renderPlaces();
    updateMapMarkers();
  });
  dom.locationInput.addEventListener('change', (event) => {
    dom.mapLocationText.textContent = event.target.value || DEFAULT_LOCATION;
    showToast(`Searching around ${dom.mapLocationText.textContent}`);
  });
  dom.refreshMapBtn.addEventListener('click', refreshMarkers);
  window.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-links') && !event.target.closest('.menu-btn')) {
      dom.navLinks.classList.remove('active');
    }
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
  document.querySelectorAll('.category-card, .place-card, .testimonial-card, .map-card, .overview-card').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}

function init() {
  initTheme();
  loadFavorites();
  initCategoryCards();
  initFilterPills();
  renderPlaces();
  initMap();
  initListeners();
  initRevealAnimations();
}

init();