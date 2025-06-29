class Node
{
    constructor(data)
    {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

function height(root)
{
    if(root === null)
        return 0;

    return Math.max(height(root.left),height(root.right)) + 1 ;
}

console.log(height(root));