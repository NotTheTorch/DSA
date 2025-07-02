function palindrome(s,len)
{
    if(len === 0)
        return "";

    let value =  s[len-1] + palindrome(s,len-1);
    
    return value;
}

console.log("madam" === palindrome("madam",5));


//Optimal Solution

function palindromeOptimal(s,left,right)
{
    if(left >= right)
        return true;

    if(s[left] !== s[right])
        return false;

    return palindromeOptimal(s,left+1,right-1);
}

console.log(palindromeOptimal("torch",0,4));