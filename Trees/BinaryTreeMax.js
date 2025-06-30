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


//Recursive Implementation

function getMax(root)
{
    if(root === null)
        return Number.NEGATIVE_INFINITY;

    return Math.max(root.data,getMax(root.left),getMax(root.right));
}


//Iterative Implementation

function iterative_getMax(root)
{
    const queue = new Queue();
    let maxValue = Number.NEGATIVE_INFINITY;
    queue.enqueue(root);

    while(queue.front <= queue.end)
    {
        let curr = queue.dequeue();
        maxValue = Math.max(maxValue,curr.data);

        if(curr.left)
            queue.enqueue(curr.left);

        if(curr.right)
            queue.enqueue(curr.right)
    }
    return maxValue;
}

console.log(iterative_getMax(root));