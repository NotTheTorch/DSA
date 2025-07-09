function leftRotate(arr)
{
    let x = arr[0]

    for(let i = 0; i < arr.length - 1; i++)
    {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = x;

    return arr;
}

function rotateInGroups(arr,d)
{
    function reverseArr(arr,start,end)
    {
        while(start < end)
        {
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    }

    let n = arr.length;

    reverseArr(arr,0,d-1);
    reverseArr(arr,d,n-1);
    reverseArr(arr,0,n-1);

    return arr;
}


console.log(rotateInGroups([1,2,3,4,5,6,7],3));