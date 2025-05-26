
const event = { name: "Jazz Night", date: "2025-07-01" };
const { name, date } = event;

function createEvent(name = "Unnamed", category = "General") {
  return { name, category };
}

const eventsCopy = [...allEvents]; // Spread operator
