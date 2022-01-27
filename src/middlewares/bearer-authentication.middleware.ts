import { Request, Response, NextFunction } from 'express';
import ForbiddenError from '../models/errors/forbidden.error.model';
import JWT from 'jsonwebtoken';
import userRepository from '../repositories/user.repository';

async function bearerAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
      const authorizationHeader = req.headers['authorization'];

      if (!authorizationHeader) {
        throw new ForbiddenError('Credentials not informed')
      }

      const [authenticationType, token] = authorizationHeader.split('');

      // To check if the token is valid
      if (authenticationType !== 'Bearer' || !token) {
        throw new ForbiddenError('Invalid authentication type');
      }

      // If valid, it will return the token payload, where is the uuid
      const tokenPayload = JWT.verify(token, 'my_secret_key');

      if (typeof tokenPayload !== 'object' || !tokenPayload.sub ) {
        throw new ForbiddenError('Invalid token');
      }

      const uuid = tokenPayload.sub;
      const user = { 
        uuid: tokenPayload.sub, 
        username: tokenPayload.username 
      };

      req.user = user;
      next();
  } catch (error) {
      next(error)
  }
}

export default bearerAuthenticationMiddleware;