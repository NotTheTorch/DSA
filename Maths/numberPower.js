//This solution Time Complexity is O(log N) and Space Complexity is O(log N) which is better solution than O(n) Time Complexity


function power(num,pow)
{
    if(pow === 0)
        return 1;

    temp = power(num,Math.floor(pow/2));
    temp = temp * temp;

    if(pow%2 === 0)
        return temp;
    else
        return temp * num;
}

console.log(power(2,3));