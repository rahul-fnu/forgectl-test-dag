function greet(name) {
  const time = new Date().getHours();
  const greeting = time < 12 ? "Good morning" : "Good afternoon";
  return `${greeting}, ${name}!`;
}

module.exports = { greet };
