import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;
const databasePath = process.argv[2];

// Middleware to parse JSON bodies
// app.use(express.json());

// Middleware to set databasePath for all routes
app.use((req, res, next) => {
  req.app.locals.databasePath = databasePath;
  next();
});

// Routes
app.use('/', routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

export default app
