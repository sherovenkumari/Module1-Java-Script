
// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");

window.onload = function () {
  alert("The page is fully loaded");
};

// 2. Syntax, Data Types, and Operators
const eventName = "Music Fest";
const eventDate = "2025-06-15";
let availableSeats = 50;
console.log(`${eventName} is on ${eventDate}. Seats available: ${availableSeats}`);
availableSeats--;

// 3. Conditionals, Loops, and Error Handling
const events = [
  { name: "Yoga Workshop", date: "2025-06-10", seats: 10, category: "Health" },
  { name: "Tech Talk", date: "2024-12-01", seats: 0, category: "Tech" },
  { name: "Jazz Fest", date: "2025-07-01", seats: 15, category: "Music" }
];

const today = new Date("2025-05-26");

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming Event: ${event.name}`);
  } else {
    console.log(`Event hidden: ${event.name}`);
  }
});

function registerUser(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log("Registered successfully");
  } catch (err) {
    console.error(err.message);
  }
}

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

function filterEventsByCategory(category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}

function registrationCounter(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`${category} registrations: ${count}`);
  };
}

const musicCounter = registrationCounter("Music");
musicCounter();

// 5. Objects and Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};
const event1 = new Event("Cooking Class", "2025-07-01", 20);
console.log(Object.entries(event1));

// 6. Arrays and Methods
let allEvents = [
  { name: "Music Night", category: "Music" },
  { name: "Art Show", category: "Art" }
];
allEvents.push({ name: "Jazz Fest", category: "Music" });
const musicEvents = allEvents.filter(e => e.category === "Music");
const displayCards = allEvents.map(e => `Event: ${e.name}`);
console.log(displayCards);

// 7. DOM Manipulation
const container = document.querySelector("#events");
allEvents.forEach(event => {
  const card = document.createElement("div");
  card.className = "eventCard";
  card.innerText = event.name;
  container.appendChild(card);
});
function updateUIOnRegister(eventName) {
  alert(`Registered for ${eventName}`);
}

// 8. Event Handling
function register(eventName) {
  alert(`Registered for ${eventName}`);
}
function filterByCategory(category) {
  console.log(`Filtering by ${category}`);
}
function searchEvent(e) {
  if (e.key === "Enter") {
    console.log(`Searching: ${e.target.value}`);
  }
}

// 9. Async JS, Promises, Async/Await
function fetchEvents() {
  fetch("https://mockapi.com/events")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));
}

async function loadEvents() {
  document.body.classList.add("loading");
  try {
    const res = await fetch("https://mockapi.com/events");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    document.body.classList.remove("loading");
  }
}

// 10. Modern JavaScript Features
const event = { name: "Jazz Night", date: "2025-07-01" };
const { name, date } = event;

function createEvent(name = "Unnamed", category = "General") {
  return { name, category };
}
const eventsCopy = [...allEvents];

// 11. Working with Forms
document.getElementById("regForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;
  if (!name.value || !email.value) {
    alert("All fields are required");
    return;
  }
  console.log(`Registered ${name.value} for ${event.value}`);
});

// 12. AJAX & Fetch API
function submitRegistration(user) {
  setTimeout(() => {
    fetch("https://mockapi.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(() => alert("Registered successfully!"))
      .catch(() => alert("Failed to register."));
  }, 2000);
}

// 13. Debugging and Testing
function debugRegistration(user) {
  console.log("Submitting form");
  console.log("User data:", user);
  debugger;
  fetch("https://mockapi.com/register", {
    method: "POST",
    body: JSON.stringify(user)
  });
}

// 14. jQuery and JS Frameworks
$(document).ready(() => {
  $('#registerBtn').click(() => alert('Registered!'));
  $('.eventCard').fadeIn();
  $('.eventCard').fadeOut();
});
// Benefit of React/Vue: Better modularity and reactive UI components.
