
let allEvents = [
  { name: "Music Night", category: "Music" },
  { name: "Art Show", category: "Art" }
];

allEvents.push({ name: "Jazz Fest", category: "Music" });

const musicEvents = allEvents.filter(e => e.category === "Music");

const displayCards = allEvents.map(e => `Event: ${e.name}`);
console.log(displayCards);
