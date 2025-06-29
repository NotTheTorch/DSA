function checkEqual(a,b)
{
    if(a.length !== b.length)
        return false;

    const map1 = new Map();
    const map2 = new Map();

    for(let i = 0; i < a.length; i++)
    {
        map1.set(a[i],( map1.get(a[i]) || 0) + 1);
        map2.set(b[i],( map2.get(b[i]) || 0) + 1);
    }

    if(map1.size !== map2.size)
        return false;

    for(let [key,value] of map1)
    {
        if(map2.get(key) !== value)
            return false;
    }
    return true;
}

console.log(checkEqual([1,2,5,4,0],[2,4,5,0,1]));