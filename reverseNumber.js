function reverse(n)
{
    let revNum = 0;
    
    while(n > 0)
    {
        revNum = revNum * 10 + n % 10;
        n = Math.floor(n/10);
    }
    return revNum;

}

function power(num,revNum)
{
    if(revNum === 0)
        return 1;

    let temp = power(num,Math.floor(revNum/2));

    if(revNum%2 === 0)
        return temp * temp;
    else
        return num * temp * temp;
}

console.log(power(2,reverse(2)));