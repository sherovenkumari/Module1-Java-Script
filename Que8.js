
function register(eventName) {
  console.log(`Registered for ${eventName}`);
}

function filterByCategory(category) {
  console.log(`Filtering by ${category}`);
}

function searchEvent(e) {
  if (e.key === "Enter") {
    console.log(`Searching: ${e.target.value}`);
  }
}
