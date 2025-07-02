function printNReverse(n)
{
   if(n === 0)
    return;
   console.log(n);
   printNReverse(n-1);
}

function printN(n)
{
   if(n === 0)
    return;
   
   printN(n-1);
   console.log(n);
}

printN(10);