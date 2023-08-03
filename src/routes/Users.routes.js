import {Router} from 'express';
import { getUsers , postUser, updateUser, deleteUser,getUser } from '../controllers/Users.controller.js';

export const UserRoutes = Router();

UserRoutes.get('/Users', getUsers);
UserRoutes.post('/Users', postUser),
UserRoutes.put('/Users/:idUser', updateUser);
UserRoutes.delete('/Users/:idUser', deleteUser);
UserRoutes.get('/Users/:idUser', getUser);

