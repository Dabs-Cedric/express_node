// Exercice :
// 1. Ajouter un evenListener au bouton
// 2. Récupérer les données des inputs
// 3. Envoyer une requête POST vers le backend avec Fetch

let myBtn = getElementById("addArticle").addEventListener("click", (e) => {
    e.preventDefault();

    let myTitle = document.getElementById("title");
    let myContent = document.getElementById("content");

    let myUrl = fetch('/article/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({title: myTitle, content: myContent}),
      });
    
});

// Exercice :
// 1. Dans la backend: index.js
// 1.1. Créer une route GET: /article/all
// 1.2. Retourner tous les articles du fichier articles.json en json

// 2. Dans le front-end: script.js:
// 2.1. Utiliser fetch pour envoyer une requête vers /article/all
// 2.2 Afficher les articles reçu sur la page web

fetch("/article/all").then((response) => {
    response.json().then((data) => {
        afficheArticles(data.articles);
    });
});



  fetch("/article/all").then((response) => {
    response.json().then((data) => {
        //Selectionner la div qui va recevoir les articles
        let divArticles = document.getElementById("articles");

        //Pour vider la page web
        divArticles.innerHTML = "";

        //Boucler sur le tableau pour ajouter les article dans la div
        data.articles.forEach((article) => {
            const title = document.createElement("h2");
            title.textContent = article.title;

            const content = document.createElement("p");
            content.textContent = article.content;

            divArticles.append(title, content);
        });
    });
});

//Exercice:
//1. Dans la backend: index.js
// 1.1 Créer une route GET: /article/delete/:position
// 1.2 Supprimer depuis articles.json l'article a la position du paramètre
// 2.2 Retourner en json tous les articles

//2. Dans la front-end: script.js:
// 2.1 Ajouter un bouton pour chaque article
// 2.2 Dans l'event listener, envoyer une requete GET vers /article/delete/:position
// 2.3 Acualiser la liste des articles dans la page web

// let articleBtn = getElementById("addArticle").addEventListener("click", (e) => {
//     e.preventDefault();

//     let myTitle = document.getElementById("title");
//     let myContent = document.getElementById("content");

//     let myUrl = fetch('/article/delete/:position', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//         },
//         body: JSON.stringify({title: myTitle, content: myContent}),
//       });
    
// });//à corriger

//Bonne version : 
// function afficheArticles(articles) {
//     //Selectionner la div qui va recevoir les articles
//     let divArticles = document.getElementById("articles");

//     divArticles.innerHTML = "";

//     //Boucler sur le tableau pour ajouter les articles dans la div
//     articles.forEach((article, position) => {
//         const title = document.createElement("h2");
//         title.textContent = article.title;

//         const content = document.createElement("p");
//         content.textContent = article.content;

//         const button = document.createElement("button");
//         button.textContent = "Supprimer";
//         button.addEventListener("click", () => {
//             fetch("/article/delete/" + position).then((reponse) => {
//                 reponse.json().then((data) => {
//                     afficheArticles(data.articles);
//                 });
//             });
//         });

//         divArticles.append(title, content, button);
//     });
// }

//Avec mongoDB :
function afficheArticles(articles) {
    //Selectionner la div qui va recevoir les articles
    let divArticles = document.getElementById("articles");

    divArticles.innerHTML = "";

    //Boucler sur le tableau pour ajouter les articles dans la div
    articles.forEach((article, position) => {
        const title = document.createElement("h2");
        title.textContent = article.title;

        const content = document.createElement("p");
        content.textContent = article.content;

        const button = document.createElement("button");
        button.textContent = "Supprimer";
        button.addEventListener("click", () => {
            fetch("/article/delete/" + article._id).then((reponse) => {
                //"position" à été remplacé par "article._id" à cause de la requête 
                //"await Article.findByIdAndDelete(requestData.id) dans la partie server.js".
                reponse.json().then((data) => {
                    afficheArticles(data.articles);
                });
            });
        });

        divArticles.append(title, content, button);
    });
}


// fonction callback (information supplémentaire)
function myForEach(tableau, callback) {
    for (let i = 0; i < tableau.length; i++) {
        callback(tableau[i], i, tableau);
    }
}

myForEach(["PHP", "JS", "CSS"], (element, position, tab) => {
    console.log(element, " ", position);
});

let divArticles = document.getElementById("articles");
myForEach(["PHP", "JS", "CSS"], (element) => {
    let p = document.createElement("p");
    p.textContent = element;
    divArticles.append(p);
});