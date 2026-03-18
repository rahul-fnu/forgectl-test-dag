const migrations = [
  { version: 1, name: "create_users", sql: "CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT UNIQUE)" },
  { version: 2, name: "add_sessions", sql: "CREATE TABLE sessions (id TEXT PRIMARY KEY, user_id INTEGER)" },
];
module.exports = { migrations };
