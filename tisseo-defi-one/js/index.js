
/************************************defi 1.2 get line************************************************* */
const xhr = new XMLHttpRequest();
xhr.open("get", "https://api.tisseo.fr/v2/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb");
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const rep = JSON.parse(xhr.responseText);
        let cod = "";

        //<li><span class="tag-line">29</span><span class="name-line">Aucam ville/Grand rong</span></li>

        for (let arr of rep.lines.line) {
            cod = cod.concat("<li>   <a href=\"#haut\">    <span class=\"tag-line\" >", arr.shortName, "</span><span class=\"name-line\">", arr.name, "</span></a></li>");
        }
        //cod += "</ul>";
        document.querySelector("#bus").addEventListener("click", (e) => {
            document.querySelector(".u-l").insertAdjacentHTML("afterbegin",cod)
            /***************************************defi 1.3 get stop_point ou arret******************************************* */
            let currentLine = "";
            let lesLine = document.querySelectorAll(".u-l li"); //get all "li"
            for (const li of lesLine) {
                li.addEventListener("click", (a) => {


                    //add
                    //document.body.innerHTML = maChaîne.anchor("ancre_contenu");
                    //a.currentTarget= a.currentTarget.anchor("ancre_contenu");
                    document.querySelector(".l-s").classList.add("line-stop");
                    document.querySelector(".u-l").classList.add("ul-line-after");
                    //fin
                    currentLine = a.currentTarget;
                    let currentLines = a.currentTarget;

                    for (const arr of rep.lines.line) { //loop la premiere requette pour faire la comp. avec le "currentLine"
                        //console.log(currentLine);

                        if ((currentLines.querySelector(".tag-line").innerHTML) === arr.shortName) { //on compare avec la currenLine
                            //ensuite on conserve cet elt du array  que l'on est entrain de loop et ensuite on obtient juste son "id" que l'on insere a la fin du "url"
                            console.log("oui");

                            const req = new XMLHttpRequest();
                            req.open("get", "https://api.tisseo.fr/v2/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId=" + arr.id);
                            req.onreadystatechange = () => {
                                if (req.readyState === 4 && req.status === 200) {
                                    const repT = JSON.parse(req.responseText);
                                    let codB = "<div class=\"stop-title\"> <p>les stops</p> </div><ul>";//ul delete  a la fin


                                    for (const arr of repT.physicalStops.physicalStop) {
                                        codB = codB.concat("<li>", arr.stopArea.name, "</li>");
                                    }
                                    codB += "</ul>";
                                    document.querySelector(".l-s > ul").innerHTML = "";
                                    //document.querySelector(".l-s > stop-title").innerHTML = "";
                                    document.querySelector(".l-s").insertAdjacentHTML("afterbegin", codB);

                                    /******remove */                                    /*****************************************defi 1.4 get all next passages*********************************** */

                                    document.querySelector(".r-s").addEventListener("click", () => {
                                        document.querySelector(".l-s").classList.remove("line-stop");

                                        document.querySelector(".s-h").classList.remove("stop-hours");

                                        document.querySelector(".u-l").classList.remove("ul-line-after");
                                        //document.querySelector(".s-h").classList.remove("stop-hours");

                                    });
                                    let currentArret = "";
                                    /*****la */
                                    let lesArret = document.querySelectorAll(".line-stop li"); //get all "li"
                                    for (const arr of lesArret) {
                                        arr.addEventListener("click", (b) => {
                                            currentArret = b.currentTarget.innerHTML; //get le contenu de l'elt qui vient d'etre cliquer
                                            document.querySelector(".s-h").classList.add("stop-hours");
                                            for (const arr of repT.physicalStops.physicalStop) {//loop la premiere requette pour faire la comp. avec le "currentArret"
                                                if (arr.stopArea.name === currentArret) { //on compare avec la currenArret
                                                    //ensuite on conserve cet elt du array que l'on est entrain de loop et ensuite on obtient juste son "id" que l'on insere a la fin du "url"
                                                    const reqPD = new XMLHttpRequest();
                                                    reqPD.open("get", "https://api.tisseo.fr/v2/stops_schedules.json?key=a3732a1074e2403ce364ad6e71eb998cb&stopPointId=" + arr.id);
                                                    reqPD.onreadystatechange = () => {
                                                        if (reqPD.readyState === 4 && reqPD.status === 200) {
                                                            const repPD = JSON.parse(reqPD.responseText);
                                                            let codPD = "<ul>";
                                                            for (const arr of repPD.departures.departure) {
                                                                //realTime or no
                                                                codPD = codPD.concat("<li>", arr.dateTime, "</li>");
                                                                if (arr.realTime === "ydes") {
                                                                    codPD = codPD.concat("<li>", arr.dateTime, "</li>");
                                                                    //console.log(arr.dateTime);
                                                                }
                                                            }
                                                            codPD += "</ul>";

                                                            //document.querySelector(".s-h > ul").innerHTML="";
                                                            document.querySelector(".s-h").insertAdjacentHTML("afterbegin", codPD);

                                                            document.querySelector(".r-h").addEventListener("click", () => {
                                                                document.querySelector(".s-h").classList.remove("stop-hours");
                                                                //document.querySelector(".s-h").classList.remove("stop-hours");
                                                            });
                                                        }
                                                    };
                                                    reqPD.send();
                                                }
                                            }
                                        });
                                    }
                                }
                            };
                            req.send();
                        }
                    }
                });
            }
        });
    }
};
xhr.send();











/****************************ici****************************** */
/*
let lesLines = document.querySelectorAll(".u-l li");
for (const arr of lesLines) {
    arr.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        //add or toggle class element
        console.log("hhhh");
        document.querySelector(".l-s").classList.add("line-stop");
        document.querySelector(".u-l").classList.add("ul-line-after");



        let lesStops = document.querySelectorAll(".line-stop li");
        for (const arr of lesStops) {
            arr.addEventListener("click", (a) => {
                a.stopPropagation();
                a.preventDefault();
                console.log("hdggdgdgd");
                document.querySelector(".s-h").classList.add("stop-hours");

            });
        }





    });
}
document.querySelector(".r-s").addEventListener("click", () => {
    document.querySelector(".l-s").classList.remove("line-stop");

    document.querySelector(".s-h").classList.remove("stop-hours");

    document.querySelector(".u-l").classList.remove("ul-line-after");
    //document.querySelector(".s-h").classList.remove("stop-hours");

});
document.querySelector(".r-h").addEventListener("click", () => {
    document.querySelector(".s-h").classList.remove("stop-hours");
    //document.querySelector(".s-h").classList.remove("stop-hours");
});

*/