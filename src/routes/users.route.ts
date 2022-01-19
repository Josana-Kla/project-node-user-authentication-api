// get / users
// get / users / :uuid
// post / users 
// put / users / :uuid
//delete / users / :uuid

import { Request, Response, NextFunction, Router } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router(); 

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'John'}];
  res.status(StatusCodes.OK).send(users);
});

usersRoute.get('users/:uuid', (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({ uuid });
});

export default usersRoute;