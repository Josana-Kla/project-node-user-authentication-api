import { Request, Response, NextFunction, Router } from 'express';
import JWT from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import ForbiddenError from '../models/errors/forbidden.error.model';
import jwtAuthenticationMiddleware from '../middlewares/jwt-authentication.middleware';
import { SignOptions } from 'jsonwebtoken';

const authorizationRoute = Router();

// If the request arrives here it is because it is already validated, so we only pass the status 200
authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK);
})

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
      // JWT token information:
      // "iss" - the domain of the application generating the token
      // "sub" - is the subject of the token, but it is often used to store the user ID
      // "aud" - defines who can use the token
      // "exp" - token expiration date
      // "nbf" - defines a date for which the token cannot be accepted before it
      // "iat" - token creation date
      // "jti" - token id

      const user = req.user;

      if(!user) {
        throw new ForbiddenError('Uninformed user!');
      }
      const jwtPayload = { username: user.username };
      const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: '15m' };
      const secretKey = 'my_secret_key';

      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

      // To return a jwt token based on the user we took earlier in basic-authentication.middleware
      res.status(StatusCodes.OK).json({ token: jwt })
  } catch (error) {
      next(error);
  }
});

export default authorizationRoute;