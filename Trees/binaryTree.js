class Node
{
    constructor(data)
    {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

/*
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(5);
root.left.right = new Node(10);
root.right.left = new Node(100);
root.right.right = new Node(40);

console.log(root);
*/

//Implementation of Inorder Tree Traversal

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

function inorder(root)
{
    if(root !== null)
    {
        inorder(root.left);
        console.log(root.key);
        inorder(root.right);
    }
}

function preorder(root)
{
    if(root !== null)
    {
        console.log(root.data);
        preorder(root.left);
        preorder(root.right);
    }
}

function postorder(root)
{
    if(root !== null)
    {
        postorder(root.left);
        postorder(root.right);
        console.log(root.data);
    }
}