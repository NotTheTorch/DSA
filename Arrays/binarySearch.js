function interativeBinarySearch(arr,x)
{

    let low = 0;
    let high = arr.length - 1;

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] === x)
            return x;
        else if(arr[mid] > x)
            high = mid - 1;
        else
            low = mid + 1;
            
    }
    return -1;
}

function recursiveBinarySearch(arr,x,low,high)
{
    if(low > high)
        return -1

    let mid = Math.floor((low + high)/2);

    if(arr[mid] === x)
        return x;
    else if(arr[mid] > x)
        return recursiveBinarySearch(arr,x,low,mid-1);
    else
        return recursiveBinarySearch(arr,x,mid+1,high);
    
}

// console.log(interativeBinarySearch([10,20,30,40,50,60],60));
console.log(recursiveBinarySearch([10,20,30,40,50,60],20,0,5));