function GCD(a,b)
{
    while(b !== 0)
    {
        a = a % b;
        [a,b] = [b,a]
    }
    return a;
}


console.log(GCD(10,15));