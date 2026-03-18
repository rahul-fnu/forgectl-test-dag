function authenticate(req) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new Error("No token");
  return { userId: 1, token };
}
module.exports = { authenticate };
