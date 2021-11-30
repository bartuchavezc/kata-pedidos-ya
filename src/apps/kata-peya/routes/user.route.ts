import { Router, Request, Response, NextFunction } from 'express';
import { UserController } from '../controller/UserController';
import container from '../dependenci-injection';

export const register = (router: Router) => {
  const UserController: UserController = container.get('Apps.kata-peya.controller.UserController');

  router.put('/user', (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = UserController.update(req.body?.user, req.body?.target);
      res.send(JSON.stringify(user));
    } catch (error) {
      next(error);
    }
  });

};
