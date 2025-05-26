
document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;
  if (!name.value || !email.value) {
    alert("All fields are required");
    return;
  }
  console.log(`Registered ${name.value} for ${event.value}`);
});
