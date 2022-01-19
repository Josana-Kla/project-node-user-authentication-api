import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';

const app = express();

// Application Settings - Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Settings
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'Success!'});
});

// Server Startup
app.listen(3000, () => {
  console.log('The application is running on port 3000!')
});