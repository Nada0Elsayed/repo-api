const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// استخدام بورت Railway
const PORT = process.env.PORT || 9000;

// الاستماع على البورت وعلى كل الشبكات (مهم لرفع السيرفر)
server.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});