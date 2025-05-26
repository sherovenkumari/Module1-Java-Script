
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const event1 = new Event("Cooking Class", "2025-07-01", 20);
console.log(Object.entries(event1)); // [[name, value], ...]
