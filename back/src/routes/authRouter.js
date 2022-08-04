import { Router } from "express";
import { authValidator } from "../middlewares/authValidator.js";
import { signIn, signUp } from "../controllers/authController.js";
import { signUpSchema,signInSchema } from "../schemas/authSchema.js";


const authRouter = Router();

authRouter.post('/signup',authValidator(signUpSchema),signUp);
authRouter.post('/signin',authValidator(signInSchema),signIn);

export default authRouter;