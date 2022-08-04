import { Router } from 'express';
import { deleteUrlById, getUrlById, goToUrl, shortenUrl } from '../controllers/urlController.js';
import authentication from '../middlewares/authentication.js';
import urlValidator from '../middlewares/urlValidator.js';

const urlRouter = Router();

urlRouter.post('/urls/shorten',authentication,urlValidator,shortenUrl);
urlRouter.get('/urls/:id',getUrlById);
urlRouter.get('/urls/open/:shortUrl',goToUrl);
urlRouter.delete('/urls/:id',authentication,deleteUrlById);

export default urlRouter;