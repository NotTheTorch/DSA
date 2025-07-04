class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const head = new Node(50);
head.left = new Node(30);
head.left.left = new Node(20);
head.left.right = new Node(40);
head.right = new Node(70);
head.right.right = new Node(80);
head.right.left = new Node(60);

function deleteNode(root,x)
{
    if(root === null)
        return 0;

    if(root.data > x)
        root.left = deleteNode(root.left,x);
    else if(root.data < x)
        root.right = deleteNode(root.right,x);
    else
    {
        if(root.left === null)
            return root.right;
        else if(root.right === null)
            return root.left;
        else
        {
            let succ = getSuccessor(root.right,x);
            root.data = succ;
            root.right = deleteNode(root.right,succ);
        }
    }
    return root;
}

function getSuccessor(curr,key)
{
    while(curr.left !== null)
        curr = curr.left;

    return curr.data;
}

console.log(deleteNode(head,50));