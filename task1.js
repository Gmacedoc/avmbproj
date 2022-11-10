

function isOdd(number)
{
    return (number % 2) == 1? true : false;
}

function odds(x){
    var count = 0;
    x.forEach(element => {
        
        if(isOdd(element))
        { 
            count++;
        }
    });
    return count;
}




