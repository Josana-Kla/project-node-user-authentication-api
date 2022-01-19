import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

// Application Settings - Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Settings
app.use(statusRoute);
app.use(usersRoute);

// Server Startup
app.listen(3000, () => {
  console.log('The application is running on port 3000!')
});