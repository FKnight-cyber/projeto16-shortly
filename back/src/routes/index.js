import { Router } from "express";
import authRouter from "./authRouter.js";
import urlRouter from "./urlRouter.js";
import userRouter from "./userRouter.js";
import rankRouter from "./rankRouter.js";

const router = Router();

router.use(authRouter);
router.use(urlRouter);
router.use(userRouter);
router.use(rankRouter);

export default router;