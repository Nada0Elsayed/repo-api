const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middlewares
server.use(middlewares);

// Health Check (مهم جدًا لRailway)
server.get("/", (req, res) => {
  res.status(200).send("✅ JSON Server is running on Railway!");
});

// Router
server.use(router);

// Listen on 0.0.0.0 and dynamic port
const PORT = process.env.PORT || 8080;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
