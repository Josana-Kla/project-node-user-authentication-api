// get / users - Search all users
// get / users / :uuid - Search for a specific user
// post / users - Create a user
// put / users / :uuid - Change a user
//delete / users / :uuid - Delete a user

import { Request, Response, NextFunction, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import userRepository from "../repositories/user.repository";

const usersRoute = Router(); 

//  Search all users
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  const users = await userRepository.findAllUsers();
  res.status(StatusCodes.OK).send(users);
});

// Search for a specific user
usersRoute.get('users/:uuid', (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({ uuid });
});


// Create a user
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;

  console.log(req.body);

  res.status(StatusCodes.CREATED).send(newUser);
});

// Change a user
usersRoute.put('users/:uuid', (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;
  modifiedUser.uuid = uuid;

  res.status(StatusCodes.OK).send({ modifiedUser });
});

// Delete a user
usersRoute.delete('users/:uuid', (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
  res.status(StatusCodes.OK);
});

export default usersRoute;