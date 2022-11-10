

function isPalindrome(a) {     
    for(var i = 0; i < a.length / 2; i++) 
        if (a[i] != a[a.length - i - 1]) 
            return false;
    return true;
}