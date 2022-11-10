
var apiKey = "263119dd70c9dce43c77eded2a84d5cb";
var privateKey = "4d6729d67c6a32b5f1be1b24129b6594f37b2151";

function marvelHeroes(){
    var req = new XMLHttpRequest();
    var route = "http://gateway.marvel.com/v1/public/characters";
    var web = route + 'ts=1' + '&apiKey=' + apiKey + '&hash=' + privateKey;

    req.open('GET', web, true);

    req.setRequestHeader('Content-Type', 'application/json');
    var nomes = [];
    req.addEventListener('load', function(){
        if(req.status >= 200 && req.status < 400){
            var result = JSON.parse(req.responseText);
            result.data.results.forEach(element => {
                nomes.push(element.name);
            });
        }
    });

    return nomes;
}