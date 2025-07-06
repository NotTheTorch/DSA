function floorRoot(n)
{
    let low = 1;
    let high = n;

    while (low < high)
    {
        let mid = Math.floor((low + high)/2);

        if(mid * mid === n)
            return mid;

        else if(mid * mid > n)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return low - 1;
}

console.log(floorRoot(3));