class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


let root = new Node(10);
root.left = new Node(20);
root.right = new Node(80);
root.right.left = new Node(5);


//Recursive Method Implementation

function getMax(root)
{
    if(root === null)
        return Number.NEGATIVE_INFINITY;

    return Math.max(root.data,getMax(root.left),getMax(root.right));
}

console.log(getMax(root));