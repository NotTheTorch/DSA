//Factorial of a given number recursive implementation

function factorial(n)
{
    if(n <= 0)
        return 1;

    return n * factorial(n-1);
}

console.log(factorial(5));

//Implementation Recursive solution on fibonacci series
function fibonacci(n)
{
    if(n === 1 || n === 0)
        return 1;

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(6));