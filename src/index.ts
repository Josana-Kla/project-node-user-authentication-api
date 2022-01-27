import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error.handler.middleware';
import authorizationRoute from './routes/authorization.route';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';

const app = express();

// Application Settings - Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Settings
app.use(statusRoute);
app.use(authorizationRoute);

app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);

// Error Handler Configuration
app.use(errorHandler);

// Server Startup
app.listen(3000, () => {
  console.log('The application is running on port 3000!')
});