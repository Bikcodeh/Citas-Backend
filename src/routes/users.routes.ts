import express from "express";
import { container } from "../config/di/inversify.config";
import { UserController } from '../components/user/infraestructure/controller/user.controller';

const router = express.Router();

const userController = container.get<UserController>(UserController.NAME);

router.get('/', (req, res, next) => userController.getAll(req, res, next));
router.post('/', (req, res, next) => userController.create(req, res, next));

export default router;