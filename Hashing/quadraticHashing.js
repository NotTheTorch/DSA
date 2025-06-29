function QuadraticProbing(hashSize, arr, N) 
{
    const hash = new Array(hashSize).fill(-1);
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < hashSize; j++)
        {
            let hashIndex = (arr[i] + j*j) % hashSize;
            
            if(hash[hashIndex] === -1 || hash[hashIndex] === arr[i])
            {
                hash[hashIndex] = arr[i];
                break;
            }
        }
    }
    return hash;
}

console.log(QuadraticProbing(11,4,[21,10,32,43]));