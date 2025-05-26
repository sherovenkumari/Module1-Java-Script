
// Using .then/.catch
fetch("https://mockapi.com/events")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

// Using async/await
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
