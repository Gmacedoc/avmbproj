
function createFile(characters){
    characters.forEach(element => {
        var dict = {};
        dict["nome"] = element["name"];
        dict["id"] = element["id"];
        dict["descricao"] = element["desciption"];
        dict["dataModificacao"] = element["modified"];
        var json = JSON.stringify(dict);
        var fs = require('fs');
        fs.writeFile(dict["nome"]+".json", json);
    });
}