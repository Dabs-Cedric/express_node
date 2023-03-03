import { article } from "../models/articles";



async function postArticle(req,res) {
    const newArticle = req.body;
//fonction "créer" une donnée
    await Article.create({ //await permet de s'arrêter sur la fonction sur la 1ère étape de la fonction
        // pour l'éxecuter et ensuite passr à l'étape suivante.
        title: newArticle.title,
        content: newArticle.content,
    });

// fonction " trouver et lire" une donnée
    const articles = await Article.find();
    res.json({articles: articles});
} // 2ème méthode simplifiée

async function getArticles(req,res) {
    res.json({articles: await Article.find()});
} // 3ème méthode plus simplifiée

//fonction effacer une donnée
async function deleteArticle(req,res) {
    // Récupérer les données de la requête
    const requestData = req.params;
    await Article.findByIdAndDelete(requestData.id);
    res.json({articles: await Article.find()});
}

