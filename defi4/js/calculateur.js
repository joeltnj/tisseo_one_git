

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



// recuperati;;on des entrees

let usage_numerique = [];
const options1 = document.querySelector('#options1');

let chaffage = [];
const options2 = document.querySelector('#options2');

let transport = [];
const options3 = document.querySelector('#options3');

let fruits = [];
const options4 = document.querySelector('#options4');

let numerique = [];
const options5 = document.querySelector('#options5');

let repas = [];
const options6 = document.querySelector('#options6');

let habillement = [];
const options7 = document.querySelector('#options7');

let mobilier = [];
const options8 = document.querySelector('#options8');

let electromenager = [];
const options9 = document.querySelector('#options9');

let boisson = [];
const options10 = document.querySelector('#options10');
// fin recuperation



xhr = new XMLHttpRequest();
xhr.open("get", "../json/data.json");
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const rep = JSON.parse(xhr.responseText);

        //pour usage numerique

        //parcourir pour inserer les items dans le tableau sport
        for (const arr in rep) {
            if (arr === "Usage numerique") {
                for (const itm in rep[arr]) {
                    usage_numerique.push(itm);
                }
            }
        }
        //je cree un element puis j'insers dans l'option
        usage_numerique.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options1.appendChild(option);
        });//fin usage numerique



        //pour le chaffage

        for (const arr in rep) {
            if (arr === "chauffage") {
                for (const itm in rep[arr]) {
                    chaffage.push(itm);
                }
            }
        }

        chaffage.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options2.appendChild(option);
        });//fin le chauffage



        //pour le transport

        for (const arr in rep) {
            if (arr === "transport") {
                for (const itm in rep[arr]) {
                    transport.push(itm);
                }
            }
        }

        transport.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options3.appendChild(option);
        });//fin pour le transport


        //pour les fruits et legumes

        for (const arr in rep) {
            if (arr === "fruit et legumes") {
                for (const itm in rep[arr]) {
                    fruits.push(itm);
                }
            }
        }

        fruits.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options4.appendChild(option);
        });//fin les fruits et legumes


        //pour le numerique

        for (const arr in rep) {
            if (arr === "numerique") {
                for (const itm in rep[arr]) {
                    numerique.push(itm);
                }
            }
        }

        numerique.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options5.appendChild(option);
        });//fin le numerique


        // pour le repas

        for (const arr in rep) {
            if (arr === "repas") {
                for (const itm in rep[arr]) {
                    repas.push(itm);
                }
            }
        }

        repas.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options6.appendChild(option);
        });//fin pour le repas


        // pour habillement

        for (const arr in rep) {
            if (arr === "habillement") {
                for (const itm in rep[arr]) {
                    habillement.push(itm);
                }
            }
        }

        habillement.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options7.appendChild(option);
        });//fin pour habillment



        // pour le mobilier

        for (const arr in rep) {
            if (arr === "mobilier") {
                for (const itm in rep[arr]) {
                    mobilier.push(itm);
                }
            }
        }

        mobilier.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options8.appendChild(option);
        });//fin pour le mobile



        // pour electromenager

        for (const arr in rep) {
            if (arr === "electromenager") {
                for (const itm in rep[arr]) {
                    electromenager.push(itm);
                }
            }
        }

        electromenager.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options9.appendChild(option);
        });
        //fin electromenager



        // pour le boisson

        for (const arr in rep) {
            if (arr === "boisson") {
                for (const itm in rep[arr]) {
                    boisson.push(itm);
                }
            }
        }

        boisson.forEach(elm => {
            const option = document.createElement('option');
            option.value = elm;
            options10.appendChild(option);
        });//fin le boisson





        //traiment des valeur en javascript

        const form = document.querySelector('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const search1Value = document.getElementById('search1').value;
            const number1Value = document.getElementById('number1').value;

            const search2Value = document.getElementById('search2').value;
            const number2Value = document.getElementById('number2').value;

            const search3Value = document.getElementById('search3').value;
            const number3Value = document.getElementById('number3').value;

            const search4Value = document.getElementById('search4').value;
            const number4Value = document.getElementById('number4').value;

            const search5Value = document.getElementById('search5').value;
            const number5Value = document.getElementById('number5').value;

            const search6Value = document.getElementById('search6').value;
            const number6Value = document.getElementById('number6').value;

            const search7Value = document.getElementById('search7').value;
            const number7Value = document.getElementById('number7').value;

            const search8Value = document.getElementById('search8').value;
            const number8Value = document.getElementById('number8').value;

            const search9Value = document.getElementById('search9').value;
            const number9Value = document.getElementById('number9').value;

            const search10Value = document.getElementById('search10').value;
            const number10Value = document.getElementById('number10').value;


            // Réinitialiser les champs du formulaire
            form.reset();


            // l'objet qui contiendra les data records
            let dataobjet = {
                [search1Value]: number1Value * rep["Usage numerique"][search1Value],
                [search2Value]: number2Value * rep["chauffage"][search2Value],
                [search3Value]: number3Value * rep["transport"][search3Value],
                [search4Value]: number4Value * rep["fruit et legumes"][search4Value],
                [search5Value]: number5Value * rep["numerique"][search5Value],
                [search6Value]: number6Value * rep["repas"][search6Value],
                [search7Value]: number7Value * rep["habillement"][search7Value],
                [search8Value]: number8Value * rep["mobilier"][search8Value],
                [search9Value]: number9Value * rep["electromenager"][search9Value],
                [search10Value]: number10Value * rep["boisson"][search10Value] * number10Value
            };

            // objet pour faire montrer le nombre usation choisit
            let dico = {
                [search1Value]: number1Value,
                [search2Value]: number2Value,
                [search3Value]: number3Value,
                [search4Value]: number4Value,
                [search5Value]: number5Value,
                [search6Value]: number6Value,
                [search7Value]: number7Value,
                [search8Value]: number8Value,
                [search9Value]: number9Value,
                [search10Value]: number10Value
            };

            // fonction teste one
            function testeone(obj) {
                let tab = {};
                for (let [key, value] of Object.entries(obj)) {
                    if (key && value) {
                        //return { key, value };
                        tab[key] = [value];
                    }
                    else if (key && !value) {
                        value = 1;
                        tab[key] = value;
                        //return { key, value };
                        //console.log(`${key} : ${value}`);
                    }

                    else if (!key) {
                        console.log("rien retourné");
                    }

                }
                return tab;

            }//fin fonction teste one


            // la fonctioin teste
            function teste(obj) {
                let tab = {};
                for (let [key, value] of Object.entries(obj)) {
                    if (key && value) {
                        //return { key, value };
                        tab[key] = [value];
                    }
                    else if (key && !value) {
                        value = 1;
                        tab[key] = value;
                        //return { key, value };
                        //console.log(`${key} : ${value}`);
                    }

                    else if (!key) {
                        console.log("rien retourné");
                    }
                    else { // supprime cette ligne car else if resout le probleme a sa place
                        //return { key, value };
                        console.log(`${key} : ${value}`);
                    }
                    //console.log(`${key} : ${value}`);
                }
                return tab;

            }//fin fonction teste

            // execution des dexux fonction et affectation de ces valeur aux deux objets
            let toi = testeone(dico);
            let moi = teste(dataobjet);
            let codli = "<ul>";
            let som = 0;

            // on parcour les deux objets en meme temps en faisant correspondre les clec des ce objets
            // afin de recuperer pour le 1er objet le "nombre entré" et ensuite pour le 2eme objet le "valeur carbone * nbre entré"
            for (let [key1, value1] of Object.entries(toi)) {
                for (let [key2, value2] of Object.entries(moi)) {
                    // Vérifier si les clés sont identiques
                    if (key1 === key2) {
                        //console.log(`Clé : ${key1}, Valeur 1 : ${value1}, Valeur 2 : ${value2}`);

                        som += parseFloat(moi[key1]);
                        codli = codli.concat("<li><span class=\"namedonnee\">", key1, "</span>      <span class=\"namedonnee\">pour un nombre : ", value1, "</span>        <span class=\"valeur\">", moi[key1], "</span></li>");
                    }
                }
            }//fin parcour des deux objets

            console.log(som);
            codli = codli.concat("<li><span class=\"namedonnee\">", "Ainsi votre total consomé est : ", "</span><span class=\"valeur\">", som, "</span></li>");
            codli += "</ul>";

            // insertion dans le deuxieme article html
            document.querySelector(".article-two").innerHTML = "";
            document.querySelector(".article-two").innerHTML += codli;


            // const usenum = rep["Usage numerique"][search1Value] * number1Value;
            // const chau = rep["chauffage"][search2Value] * number2Value;

            // Faites quelque chose avec les valeurs récupérées ici (ex: envoyer une requête AJAX)
        });
        // une fonction pour tester l'objet contenant les data records
    }
};
xhr.send();
