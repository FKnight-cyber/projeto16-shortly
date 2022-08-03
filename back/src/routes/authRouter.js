import { Router } from "express";
import { authSchemaSignIn,authSchemaSignUp } from "../schemas/authSchema.js"
import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/signup',authSchemaSignUp,signUp);
authRouter.post('/signin',authSchemaSignIn,signIn);

export default authRouter;