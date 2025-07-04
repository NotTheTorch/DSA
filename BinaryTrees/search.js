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

function search(root,value)
{
    if(root === null)
        return 0;

    if(root.data === value)
        return 1;

    if(root.data > value)
        return search(root.left,value);
    else
        return search(root.right,value);
}

function iterativeSearch(root,value)
{
    let curr = root;
    while(curr !== null)
    {
        if(curr.data === value)
            return 1;

        if(curr.data > value)
            curr = curr.left;
        else
            curr = curr.right;
    }
    return 0;
}

console.log(iterativeSearch(head,16));