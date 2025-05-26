
const events = [
  { name: "Yoga Workshop", date: "2025-06-10", seats: 10 },
  { name: "Tech Talk", date: "2024-12-01", seats: 0 }
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
