
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
  }, 2000); // simulate delay
}
