class Queue
{
    constructor()
    {
        this.arr = [];
        this.front = -1;
        this.end = -1;
    }

    enqueue(x)
    {
        if(this.arr.length === 0)
        {
            this.arr.push(x);
            this.front = 0;
            this.end = 0;
            return;
        }
        this.arr.push(x);
        this.end++;
        return;
    }

    dequeue()
    {
        let result = this.arr[this.front];
        this.front++;
        return result;
    }
}

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

//Recursion Implentation

function sizeBT(root)
{
    if(root === null)
        return 0;

    return 1 + sizeBT(root.left) + sizeBT(root.right);
}

console.log(sizeBT(root));