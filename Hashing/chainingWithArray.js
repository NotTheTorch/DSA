function linearProbing(hashSize,arr,arrSize)
{
    const hashArr = Array.from({ length: hashSize }, () => []);
    
    for(let i = 0; i < arrSize; i++)
    {
        let key = arr[i];
        let index = arr[i] % hashSize;

        hashArr[index].push(key);
    }
    return hashArr;
}

console.log(linearProbing(10,[4,44,444,4444],4));