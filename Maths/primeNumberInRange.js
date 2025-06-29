function primeNumberRange(N)
{
    const arr = new Array(N+1).fill(true);
    
    for(let i = 2; i <= N; i++)
    {
        if(arr[i])
        {
            console.log(i);
            for(let j = i*i; j <= N; j += i)
            {
                arr[j] = false;
            }
        }
    }
    return "";
}

console.log(primeNumberRange(19));