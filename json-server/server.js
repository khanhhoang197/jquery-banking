const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('banking.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(5697, () => {
  console.log('JSON Server is running');
});
