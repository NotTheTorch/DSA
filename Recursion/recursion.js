function fun(n)
{
    if(n === 0)
        return;

    console.log("Geeks");
    return fun(n-1);
}

fun(10);