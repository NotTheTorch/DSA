function sumExists(arr, N, sum) 
{
    const set1 = new Set(arr);
    for(const value of set1)
    {
        let target = sum - value
        if(set1.has(target) && target !== value)
            return 1;
    }
    return 0;
}

sumExists([1,2,3,4,5,6,7,8,9,10],10,14);