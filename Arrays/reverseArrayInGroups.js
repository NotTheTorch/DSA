function reverseArrayInGroups(arr,k)
{
    function reverseArr(start,end)
    {
        while(start < end)
        {
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    }

    let i = 0;
    let j = k - 1;
    let n = arr.length - 1;

    while(j <= n)
    {
        reverseArr(i,j);
        i += k;
        j += k
    }

    if(i < n)
        reverseArr(i,n);

}

let arr = [1,2,3,4,5];
let k = 3;

reverseArrayInGroups(arr,k);
console.log(arr);