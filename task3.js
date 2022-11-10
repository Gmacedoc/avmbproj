

function createJson(c, v){
    item = {};
    item[c] = v;
    var json = JSON.stringify(item);
    return json;
}
