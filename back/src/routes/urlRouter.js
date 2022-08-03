import { Router } from 'express';
import { deleteUrlById, getUrlById, goToUrl, shortenUrl } from '../controllers/urlController.js';
import authentication from '../middlewares/authentication.js';
import urlSchema from '../schemas/urlSchema.js';

const urlRouter = Router();

urlRouter.post('/urls/shorten',authentication,urlSchema,shortenUrl);
urlRouter.get('/urls/:id',getUrlById);
urlRouter.get('/urls/open/:shortUrl',goToUrl);
urlRouter.delete('/urls/:id',authentication,deleteUrlById);

export default urlRouter;