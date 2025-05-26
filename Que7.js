
const container = document.querySelector("#events");

allEvents.forEach(event => {
  const card = document.createElement("div");
  card.innerText = event.name;
  container.appendChild(card);
});

function updateUIOnRegister(eventName) {
  alert(`Registered for ${eventName}`);
}
