

//quend je clique j'affiche le menu deroulant
(function () {
    let verif = false;

    const element = document.querySelector('.categorie');
    const subElements = document.querySelector('.cat-items');

    element.addEventListener('click', (e) => {
        if (e.target === element) {
            subElements.classList.toggle("cat-items-on");
            e.stopPropagation();
            verif = true;
        }
    });

    document.addEventListener('click', (e) => {
        if (!subElements.contains(e.target)) {      //la methode contains renvois true si subelement est parent "direct" de "e.target"
            if (verif) {
                subElements.classList.remove("cat-items-on");
                verif = false;
            }
        }
    });
})();//fin menu deroulant




// quand je clique sur les items du categorie, cela affiche une en detailles 
//ses sous itemes en dans la deuxieme article
xhr = new XMLHttpRequest();
xhr.open("get", "./json/data.json");
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const rep = JSON.parse(xhr.responseText);

        const lescatnav = document.querySelectorAll(".cat-items li"); //pour les items categorie du "nav"
        const lescat = document.querySelectorAll(".cat-items-all li");//pour les items categorie du "articleone"

        //pour les items categorie du "articleone"
        for (const li of lescat) {
            li.addEventListener("click", (e) => {
                const curT = e.currentTarget;
                document.querySelector(".article-two").innerHTML = "";//reinitialise articlesTwo avec "Aucun contenu"
                let coditem = "<ul class=\"cat-items-all \">";
                for (const arr in rep) {
                    if (arr === curT.innerHTML) {
                        for (const item in rep[arr]) {
                            //console.log(rep);
                            coditem = coditem.concat("<li><span class=\"namedonnee\">", item, "</span><span class=\"valeur\">", rep[arr][item], "</span></li>");
                        }
                        coditem += "</ul>";
                    }
                }
                document.querySelector(".article-two").innerHTML += coditem;
            });
        } // fin pour les items categorie du "articleone"

        // pour les items categorie du "nav"
        for (const li of lescatnav) {
            li.addEventListener("click", (e) => {
                const curT = e.currentTarget;
                document.querySelector(".article-two").innerHTML = "";//reinitialise articlesTwo avec "Aucun contenu"
                let coditem = "<ul class=\"cat-items-all \">";
                for (const arr in rep) {
                    if (arr === curT.innerHTML) {
                        for (const item in rep[arr]) {
                            //console.log(rep);
                            coditem = coditem.concat("<li><span class=\"namedonnee\">", item, "</span><span class=\"valeur\">", rep[arr][item], "</span></li>");
                        }
                        coditem += "</ul>";
                    }
                }
                document.querySelector(".article-two").innerHTML += coditem;
            });
        }//fin pour les items categorie du "nav"


        //quand je clique sur calcateur, je vais vers la page calculateur
        document.querySelector(".calculateur").addEventListener("click", () => {
            window.location.href = "pages/calculateur.html";
        });//fin quand je clique sur calcateur, je vais vers la page calculateur

        // Faire quelque chose avec la valeur de recherche
        const searchButton = document.querySelector(".button-search[type=submit]");
        searchButton.addEventListener("click", function (e) {
            e.preventDefault(); // Empêche l'envoi du formulaire
            const searchInput = document.querySelector("input[name=search]");
            const searchValue = searchInput.value;
            //alert(searchValue);

            //affiche la valeur rechercher dans la "articleTwo"
            for (const arr in rep) {
                for (const val in rep[arr]) {
                    if (val === searchValue) {
                        document.querySelector(".article-two").innerHTML = "";//reinitialise articlesTwo avec "Aucun contenu"
                        document.querySelector(".article-two").innerHTML += "<ul><li><span class=\"namedonnee\">" + val + "</span><span class=\"valeur\">" + rep[arr][val] + "</span></li></ul>";
                    }

                }
            }//fin affiche la valeur rechercher dans la "articleTwo"
            //fin Faire quelque chose avec la valeur de recherche
        });

    }
};
xhr.send();






