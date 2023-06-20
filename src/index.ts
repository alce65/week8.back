import http from 'http';
import { app } from './app.js';
import createDebug from 'debug';
import { dbConnect } from './db/db.connect.js';
const debug = createDebug('W6');

const PORT = process.env.PORT || 4444;

const server = http.createServer(app);

dbConnect()
  .then((mongoose) => {
    server.listen(PORT);
    debug('Connected to db:', mongoose.connection.db.databaseName);
  })
  .catch((error) => {
    server.emit('error', error);
  });

server.on('listening', () => {
  debug('Listening on port ' + PORT);
});

server.on('error', (error) => {
  console.log(error.message);
});
