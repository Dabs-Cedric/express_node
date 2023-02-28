import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

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
    console.log(req.body);
    res.end("Connexion réussie !!");
});



//Première méthode: app.listen(5000, ()=>{console.log("Serveur lancé sur le port 5000 !");});
app.listen(port, ()=>{console.log(`Serveur lancé sur le port ${port}`);});




