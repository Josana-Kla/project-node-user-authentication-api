import { User } from '../models/user.model';

// Extending express library to call user request in authorization.route
declare module 'express-serve-static-core' {

  interface Request {
    user?: User
  }
}