import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from "fs";

const app = express();


//Middleware pour la donnée dans le body de la requête
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());


//Middleware pour le log des requêtes
// app.use(logger);
app.use(morgan("combined"));
//installer "morgan" avant son utilisation + plusieurs options selon les spécificités demandés.

//Middleware pour servir la front-end
app.use(express.static("public"));
// Lors de la lecture du code, la priorité sera de placé le contenu dans la partie index.html à l'affichage. 
// Si cette page n'est pas trouvée, alors la lecture continuera sur les autres "app.".

const port = 5000;

app.get("/", (req,res) => {
    res.end("<h1>Bonjour</h1>");
});

// app.get("/speak/dog", (req,res) => {
//     res.end("Le chien dit 'woof woof'");
// });

// app.get("/speak/cat", (req,res) => {
//     res.end("Le chat dit 'meow meow'");
// });

// app.get("/speak/cow", (req,res) => {
//     res.end("La vache dit 'Moooooo'");
// });

// Créer une route '/speak/:animal' qui reçoit en paramètre l'animal.

app.get("/speak/:animal", (req, rep) => {
    const {animal} = req.params;
    console.log(user.animal);
    rep.end(`Bonjour, je suis ${animal}`);
});

app.get("/repeat/:mot/:nombre", (req, rep) => {
    //mot: hello
    //nombre: 5
    //hello hello hello hello hello
    const { mot, nombre } = req.params;
    let phrase = "";
    for (let i = 0; i < nombre; i++) {
        phrase = phrase + " " + mot;
    }
    rep.end(phrase);
});

// app.get("/repeat/Word/3", (req,res) => {
//     res.end("Word Word Word");
// });

// app.get("/repeat/Teacher/5", (req,res) => {
//     res.end("Teacher Teacher Teacher Teacher Teacher");
// });


app.get("/user/:prenom", (req, rep) => {
    const user = req.params;
    console.log(user);
    rep.end("Salut");
});

//Exercice: 
// Créer une route : /addition/:num1/:num2
// retourner l'addtion des deux nombres

// app.get("/addition/:num1/:num2", (req,res) => {
//     const {num1, num2} = req.params;
//     console.log();
//     res.end(`${Number(num1) + Number(num2)} `);
// });

app.get("/addtion/:num1/:num2", (req, rep) => {
    const { num1, num2 } = req.params;
    rep.end(`${num1 + num2}`);
});

app.post("login", (req,res) => {
    const {email, password} = req.body;
    console.log(req.body);
    res.end("Connexion réussie !!" + email);
});

//Exercice:
// Créer une route POST: /article
// Cette route reçoit dans le body: title, content
// Retourner un h1 avec title et un p avec content



app.post("/article", (req,res) => {
    const {title, content} = req.body;
    //ou alors création d'une variable "vide" qui contiendra les futurs identifiants = const data = req.body;
    //console.log(data);
    console.log(req.body);
    res.end(`<h1>${title}</h1> <p>${content}</p>`);
    // rep.end(`<h1>${data.content}</h1><p>${data.content}</p>`)
});

    
app.post("/article/add", postArticle);

function postArticle(req, res) {
    const newArticle = req.body;
    fs.readFile('./articles/articles.json', (err, data) => {
        const articles = JSON.parse(data);
        articles.articles.push(newArticle);
        fs.writeFileSync("./articles/articles.json", JSON.stringify(articles));
        res.json(articles);
      });
    }


// function logger(req, rep, next) {
//     console.log(`URL: ${req.url} - method: ${req.method}`);
//     next();
// }

// Exercice :
// 1. Dans la backend: index.js
// 1.1. Créer une route GET: /article/all
// 1.2. Retourner tous les articles du fichier articles.json en json

// 2. Dans le front-end: script.js:
// 2.1. Utiliser fetch pour envoyer une requête vers /article/all
// 2.2 Afficher les articles reçu sur la page web

app.get("/article/all", articleAll);

function articleAll(req, res) {
    fs.readFile('./articles/articles.json', (err, data) => {
        const articlesall = JSON.parse(data);
        res.json(articlesall);
      });
    }

//Exercice:
//1. Dans la backend: index.js
// 1.1 Créer une route GET: /article/delete/:position
// 1.2 Supprimer depuis articles.json l'article a la position du paramètre
// 1.3 Retourner en json tous les articles
// 1.4 Tester les routes avec Postman

//2. Dans la front-end: script.js:
// 2.1 Ajouter un bouton pour chaque article
// 2.2 Dans l'event listener, envoyer un requete GET vers /article/delete/:position
// 2.3 Acualiser la liste des articles dans la page web

app.get("./article/delete/:position", );

function deleteArticle(req, res) {
    fs.readFile('./articles/articles.json', (err, data) => {
        const articlesdel = JSON.parse(data);
        res.json(articlesall);
      });
    }

//Première méthode: app.listen(5000, ()=>{console.log("Serveur lancé sur le port 5000 !");});
app.listen(port, ()=>{console.log(`Serveur lancé sur le port ${port}`);});




