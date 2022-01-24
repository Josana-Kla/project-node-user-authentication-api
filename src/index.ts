import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error.handler.middleware';

const app = express();

// Application Settings - Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Settings
app.use(statusRoute);
app.use(usersRoute);

// Error Handler Configuration
app.use(errorHandler);

// Server Startup
app.listen(3000, () => {
  console.log('The application is running on port 3000!')
});