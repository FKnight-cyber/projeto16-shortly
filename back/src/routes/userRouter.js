import { Router } from "express";
import { getUserInfo } from "../controllers/userController.js";
import authentication from "../middlewares/authentication.js";

const userRouter = Router();

userRouter.get('/users/me',authentication,getUserInfo);

export default userRouter;