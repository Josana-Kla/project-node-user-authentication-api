import { NextFunction, Request, Response } from 'express';
import ForbiddenError from '../models/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';

async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
      //To get the header authorization content and check if it exists
      const authorizationHeader = req.headers['authorization'];

      if (!authorizationHeader) {
        throw new ForbiddenError('Credentials not informed');
      }

      // Reference string: Basic YWRtaW46YWRtaW4=
      // In the reference string, the first position is the authentication type and the second position is the token.

      const [authenticationType, token] = authorizationHeader.split('');

      if (authenticationType !== 'Basic' || !token) {
        throw new ForbiddenError('Invalid authentication type');
      }

      // Converting Base64 to string
      const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

      // tokenContent has username and password by default, so I separated them
      const [username, password] = tokenContent.split(':');

      if (!username || !password) {
        throw new ForbiddenError('Unfilled credentials');
      }

      // To fetch username and password in user.repository:
      const user = await userRepository.findByUsernameAndPassword(username, password);
      console.log(user);

      if (!user) {
        throw new ForbiddenError('Invalid Username or Password');
      }

      req.user = user;
      // We call next for the request to continue and go through the middleware and routes
      next();
  } catch (error) {
     next(error);
  }
}

export default basicAuthenticationMiddleware;