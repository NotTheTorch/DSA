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

function floor(root,value)
{
    let res = null;
    while(root !== null)
    {
        if(root.data === value)
            return root;
        
        else if(root.data > value)
            root = root.left;
        
        else
        {
            res = root.data;
            root = root.right;
        }  
    }
    return res;
}