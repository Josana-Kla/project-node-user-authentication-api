import { Request, Response, NextFunction, Router } from 'express';
import ForbiddenError from '../models/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';
import JWT from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const authorizationRoute = Router();

authorizationRoute.post('/token', async (req: Request, res: Response, next: NextFunction) => {

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

    // JWT token information:
    // "iss" - the domain of the application generating the token
    // "sub" - is the subject of the token, but it is often used to store the user ID
    // "aud" - defines who can use the token
    // "exp" - token expiration date
    // "nbf" - defines a date for which the token cannot be accepted before it
    // "iat" - token creation date
    // "jti" - token id

    if (!user) {
      throw new ForbiddenError('Invalid Username or Password');
    }

    const jwtPayload = { username: user.username };
    const jwtOptions = { subject: user?.uuid };
    const secretKey = 'my_secret_key';

    const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

    res.status(StatusCodes.OK).json({ token: jwt })
  } catch (error) {
    next(error);
  }
});

export default authorizationRoute;