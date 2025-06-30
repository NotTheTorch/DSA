class Stack
{
    constructor()
    {
        this.arr = [];
    }

    push(x)
    {
        this.arr.push(x);
    }

    pop()
    {
        let value = this.arr.pop();
        return value;
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


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

//Implementation

function zigzag(node)
{
    if(node === null)
        return node;

    const arr = [];
    const queue = new Queue();
    queue.enqueue(node);

    while(queue.front <= queue.end)
    {
        let levelSize = queue.end - queue.front + 1;
        let level = [];

        for(let i = 0; i < levelSize; i++)
        {
            let curr = queue.dequeue();
            level.push(curr.data);

            if(levelSize % 2 == 0)
            {
                if(curr.left)
                    queue.enqueue(curr.left);
                if(curr.right)
                    queue.enqueue(curr.right);
            }
            else
            {
                if(curr.right)
                    queue.enqueue(curr.right);
                if(curr.left)
                    queue.enqueue(curr.left);
            }
        }
        arr.push(level);
    }
    return arr;
}

console.log(zigzag(root));