import { Router } from "express";
import { getRanking } from "../controllers/rankController.js";

const rankRouter = Router();

rankRouter.get('/ranking',getRanking);

export default rankRouter;