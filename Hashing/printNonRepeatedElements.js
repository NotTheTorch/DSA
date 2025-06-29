function printNonRepeated(arr, n) 
{
    const map = new Map();
    for(let i = 0; i < n; i++)
    {
        map.set(arr[i],(map.get(arr[i]) || 0) + 1);
    }
    const newArr = [];
    for(const [key,value] of map)
    {
        if(value === 1)
            newArr.push(key);
    }
    return newArr;
}

console.log([1,1,2,2,3,3,4,5,6,7],10);