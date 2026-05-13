const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");

const locationText =
  document.getElementById("locationText");

const placesContainer =
  document.getElementById("placesContainer");

const favoritesContainer =
  document.getElementById("favoritesContainer");

const clearFavoritesBtn =
  document.getElementById("clearFavoritesBtn");

const categoryCards =
  document.querySelectorAll(".categories .card");

const DEFAULT_LAT = 12.9719;
const DEFAULT_LON = 77.6408;
const CATEGORY_SEARCH_TERMS = {
  restaurants: "restaurants in Indiranagar Bangalore",
  cafes: "cafes in Indiranagar Bangalore",
  hospitals: "hospitals in Indiranagar Bangalore",
  gyms: "gyms in Indiranagar Bangalore",
  parks: "parks in Indiranagar Bangalore",
  pubs: "pubs in Indiranagar Bangalore"
};

const PLACE_DETAILS = {
  "#1 Grain": { price: "₹300-800", items: "Biryani, Kebabs, Breads", timings: "11 AM - 11 PM", category: "restaurants" },
  "Fava": { price: "₹200-600", items: "Wraps, Hummus, Mediterranean", timings: "12 PM - 10 PM", category: "restaurants" },
  "Little Italy": { price: "₹400-1000", items: "Pasta, Pizza, Risotto", timings: "11 AM - 11 PM", category: "restaurants" },
  "Blue Tokai": { price: "₹150-300", items: "Specialty Coffee, Cold Brew", timings: "7 AM - 10 PM", category: "cafes" },
  "DYU Art Cafe": { price: "₹100-250", items: "Coffee, Snacks, Pastries", timings: "7 AM - 9 PM", category: "cafes" },
  "Cafe Max": { price: "₹80-200", items: "Coffee, Tea, Breakfast", timings: "7 AM - 10 PM", category: "cafes" },
  "Apollo Cradle": { price: "Premium", items: "OBG, Pediatrics, ICU", timings: "24/7 Emergency", category: "hospitals" },
  "Narayana Multispeciality": { price: "Standard", items: "General, Cardiology, Surgery", timings: "24/7 Emergency", category: "hospitals" },
  "Cloudnine Hospital": { price: "Premium", items: "Maternity, Pediatrics, General", timings: "24/7 Emergency", category: "hospitals" },
  "Cult.fit": { price: "₹3000/month", items: "CrossFit, Yoga, Strength", timings: "5 AM - 10 PM", category: "gyms" },
  "Snap Fitness": { price: "₹2500/month", items: "Cardio, Weights, Classes", timings: "5 AM - 10 PM", category: "gyms" },
  "Gympik": { price: "₹2000/month", items: "Personal Training, Group Classes", timings: "6 AM - 10 PM", category: "gyms" },
  "Toit": { price: "₹500-1200", items: "Craft Beer, Burgers, Pizzas", timings: "11 AM - Midnight", category: "pubs" },
  "Arbor Brewing": { price: "₹400-1000", items: "Craft Beer, Appetizers", timings: "12 PM - 11 PM", category: "pubs" },
  "Smoke House Deli": { price: "₹600-1500", items: "Smoked Meat, Cocktails", timings: "12 PM - Midnight", category: "pubs" }
};

let currentSearch = CATEGORY_SEARCH_TERMS.restaurants;
let map;

if (clearFavoritesBtn) {
  clearFavoritesBtn.addEventListener("click", clearFavorites);
}

categoryCards.forEach((card) => {
  const category = card.dataset.category;
  if (!category) return;

  card.addEventListener("click", () => {
    selectCategory(category);
  });
});

// GET USER LOCATION

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        locationText.innerText =
          "Showing Indiranagar, Bangalore places.";

        initMap(DEFAULT_LAT, DEFAULT_LON, "Indiranagar, Bangalore");

        L.marker([position.coords.latitude, position.coords.longitude])
          .addTo(map)
          .bindPopup("You are here");

        fetchPlaces();
      },
      () => {
        locationText.innerText =
          "Showing Indiranagar, Bangalore places.";

        initMap(DEFAULT_LAT, DEFAULT_LON, "Indiranagar, Bangalore");
        fetchPlaces();
      }
    );
  } else {
    locationText.innerText =
      "Showing Indiranagar, Bangalore places.";

    initMap(DEFAULT_LAT, DEFAULT_LON, "Indiranagar, Bangalore");
    fetchPlaces();
  }
}

// INITIALIZE MAP

function initMap(lat, lon, title = "Location") {

  map = L.map("map").setView(
    [lat, lon],
    13
  );

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        "&copy; OpenStreetMap contributors",
    }
  ).addTo(map);

  L.marker([lat, lon])
    .addTo(map)
    .bindPopup(title)
    .openPopup();

}

// FETCH PLACES

async function fetchPlaces() {

  try {
    placesContainer.innerHTML = "<div style='text-align:center;padding:40px'><div class='loading-spinner'></div><p>Loading nearby places...</p></div>";
    
    const query = encodeURIComponent(currentSearch);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=6`
    );

    const data =
      await response.json();

    if (!data || data.length === 0) {
      placesContainer.innerHTML = "<div class='places-empty'><h3>No places found for this category.</h3><p>Try a different category or allow location access.</p></div>";
      return;
    }

    displayPlaces(data);

  } catch (error) {

    placesContainer.innerHTML =
      "<div class='places-empty'><h3>Error loading places</h3><p>Please try again later.</p></div>";

  }

  loadFavorites();
}

function selectCategory(category) {
  currentSearch = CATEGORY_SEARCH_TERMS[category] || currentSearch;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  locationText.innerText = `Browsing ${categoryName} in Indiranagar, Bangalore...`;
  fetchPlaces();
  setTimeout(() => {
    document.querySelector('#places').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// DISPLAY PLACES

function displayPlaces(places) {
  placesContainer.innerHTML = "";

  if (!places || places.length === 0) {
    placesContainer.innerHTML = "<h3>No places found.</h3>";
    return;
  }

  places.forEach((place) => {
    const card = document.createElement("div");
    card.classList.add("place-card");

    const placeName = place.display_name.split(",")[0];
    const placeDetails = PLACE_DETAILS[placeName] || {};

    const title = document.createElement("h3");
    title.textContent = placeName;

    const description = document.createElement("p");
    description.textContent = place.display_name;

    const detailsWrapper = document.createElement("div");
    detailsWrapper.style.marginTop = "12px";
    detailsWrapper.style.marginBottom = "12px";
    detailsWrapper.style.paddingBottom = "12px";
    detailsWrapper.style.borderBottom = "1px solid #334155";

    if (placeDetails.price) {
      const priceEl = document.createElement("p");
      priceEl.style.fontSize = "0.9rem";
      priceEl.style.color = "#0ea5e9";
      priceEl.style.margin = "5px 0";
      priceEl.textContent = `💰 ${placeDetails.price}`;
      detailsWrapper.appendChild(priceEl);
    }

    if (placeDetails.items) {
      const itemsEl = document.createElement("p");
      itemsEl.style.fontSize = "0.9rem";
      itemsEl.style.color = "#cbd5e1";
      itemsEl.style.margin = "5px 0";
      itemsEl.textContent = `🍽️ ${placeDetails.items}`;
      detailsWrapper.appendChild(itemsEl);
    }

    if (placeDetails.timings) {
      const timingsEl = document.createElement("p");
      timingsEl.style.fontSize = "0.9rem";
      timingsEl.style.color = "#cbd5e1";
      timingsEl.style.margin = "5px 0";
      timingsEl.textContent = `⏰ ${placeDetails.timings}`;
      detailsWrapper.appendChild(timingsEl);
    }

    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("card-buttons");

    const mapButton = document.createElement("button");
    mapButton.type = "button";
    mapButton.textContent = "Open in Maps";
    mapButton.addEventListener("click", () => {
      openMaps(place.lat, place.lon);
    });

    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.textContent = "❤️ Save";
    saveButton.addEventListener("click", () => {
      saveFavorite(place.display_name);
    });

    buttonWrapper.appendChild(mapButton);
    buttonWrapper.appendChild(saveButton);

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(detailsWrapper);
    card.appendChild(buttonWrapper);

    placesContainer.appendChild(card);

    if (map) {
      L.marker([place.lat, place.lon])
        .addTo(map)
        .bindPopup(place.display_name);
    }
  });
}

// OPEN GOOGLE MAPS

function openMaps(lat, lon) {

  window.open(
    `https://www.google.com/maps?q=${lat},${lon}`
  );

}

function displayFavorites(favorites) {
  if (!favorites || favorites.length === 0) {
    favoritesContainer.innerHTML = "<p>You don’t have any saved favorites yet.</p>";
    return;
  }

  favoritesContainer.innerHTML = "";

  favorites.forEach((place) => {
    const card = document.createElement("div");
    card.classList.add("favorite-card");

    const description = document.createElement("p");
    description.textContent = place;

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.textContent = "Open in Maps";
    openButton.addEventListener("click", () => {
      const query = encodeURIComponent(place);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`);
    });

    card.appendChild(description);
    card.appendChild(openButton);
    favoritesContainer.appendChild(card);
  });
}

function loadFavorites() {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];
  displayFavorites(favorites);
}

function clearFavorites() {
  localStorage.removeItem("favorites");
  loadFavorites();
}

// START APP

getLocation();
loadFavorites();
// SAVE FAVORITES

function saveFavorite(place) {

  let favorites =
    JSON.parse(
      localStorage.getItem("favorites")
    ) || [];

  if (favorites.includes(place)) {
    alert("This place is already in your favorites!");
    return;
  }

  favorites.push(place);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  alert("Place saved to favorites!");
  loadFavorites();

}
// MOBILE MENU

menuBtn.addEventListener(
  "click",
  () => {

    navLinks.classList.toggle(
      "active"
    );

  }
);