
console.log("Submitting form");
console.log("User data:", user);

debugger; // Set a breakpoint here in DevTools
fetch("https://mockapi.com/register", {
  method: "POST",
  body: JSON.stringify(user)
});
