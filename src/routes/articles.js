import  Express  from "express";
import { deleteArticle, getArticle, postArticle } from "..\controllers\articles";

export const articlesRouter = Express.Router();

articlesRouter.post("./article/add", postArticle);
articlesRouter.get("./article/all", getArticle);
articlesRouter.get("./article/delete/:id", deleteArticle);

// Il n'est plus vraiment utile de placer le mot "article" dans l'url 
// car il a été paramétré dans app.use présent dans server.js. Il sera écrit automatiquement à la suite.
