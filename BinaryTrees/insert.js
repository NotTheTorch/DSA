class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const head = new Node(15);
head.left = new Node(5);
head.left.left = new Node(3);
head.right = new Node(20);
head.right.right = new Node(80);
head.right.left = new Node(18);
head.right.left.left = new Node(16);

function insert(root,value)
{
    if(root === null)
        return new Node(value);

    if(root.data === value)
        return root;

    if(root.data > value)
        root.left = insert(root.left,value);
    else
        root.right = insert(root.right,value);

    return root;
}

function iterativeInsert(root,value)
{
    let prev = null;
    let curr = root;
    let temp = new Node(value);

    while(curr !== null)
    {
        prev = curr;

        if(curr.data === value)
            return curr;

        if(curr.data > value)
            curr = curr.left;
        else
            curr = curr.right;
    }

    if(prev === null)
        return temp;
    else if(prev.data > value)
        prev.left = temp;
    else
        prev.right = temp;

    return root;
}

console.log(iterativeInsert(head,7));