function primeNumber(num)
{
    if(num === 2)
        return true;

    if(num % 2 === 0)
        return false;

    for(let i=3; i*i<=num; i += 2)
    {
        if(num % i === 0)
            return false;
    }
    return true;
}

console.log(primeNumber(8));