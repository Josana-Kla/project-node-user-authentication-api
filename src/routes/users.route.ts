// get / users - Search all users
// get / users / :uuid - Search for a specific user
// post / users - Create a user
// put / users / :uuid - Change a user
//delete / users / :uuid - Delete a user

import { Request, Response, NextFunction, Router, request } from "express";
import { StatusCodes } from 'http-status-codes';
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";
import userRepository from "../repositories/user.repository";

const usersRoute = Router(); 

//  Search all users
usersRoute.get('/users', jwtAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  const users = await userRepository.findAllUsers();
  res.status(StatusCodes.OK).send(users);
});

// Search for a specific user
usersRoute.get('users/:uuid', async (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
  try {
    const uuid = req.params.uuid;
    const user = await userRepository.findById(uuid);
    res.status(StatusCodes.OK).send({ uuid });
  } catch (error) {
      next(error);
  }
});

// Create a user
usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  const uuid = await userRepository.create(newUser);
  res.status(StatusCodes.CREATED).send(uuid);
});

// Change a user
usersRoute.put('users/:uuid', async (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;

  await userRepository.update(modifiedUser);

  res.status(StatusCodes.OK).send({ modifiedUser });
});

// Delete a user
usersRoute.delete('users/:uuid', async (req: Request <{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  await userRepository.remove(uuid);
  res.status(StatusCodes.OK);
});

export default usersRoute;