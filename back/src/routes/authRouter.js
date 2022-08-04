import { Router } from "express";
import { signInValidator,signUpValidator } from "../middlewares/authValidator.js";
import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/signup',signUpValidator,signUp);
authRouter.post('/signin',signInValidator,signIn);

export default authRouter;