
function addEvent(name, category) {
  events.push({ name, category });
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event) event.seats--;
}

function filterEventsByCategory(category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}

// Closure for category registration count
function registrationCounter(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`${category} registrations: ${count}`);
  };
}

const musicCounter = registrationCounter("Music");
musicCounter(); // Music registrations: 1
