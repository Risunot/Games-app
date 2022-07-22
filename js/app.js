console.log(myGames)

function listAllGames(games, urls) {
    ol = document.getElementById("game_list");
     for (let i = 0; i < games.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = urls[i];
        a.appendChild(document.createTextNode(games[i]))
        li.appendChild(a);
        ol.appendChild(li)
     }
}

listAllGames(myGames, urls)