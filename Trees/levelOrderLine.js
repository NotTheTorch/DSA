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
        let value = this.arr[this.front];
        this.front++;
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

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);



function levelPrint(root)
{
    let queue = new Queue();
    let ans = '';

    if(root === null)
        return ans;

    queue.enqueue(root);
    queue.enqueue(null);

    while(queue.front < queue.end)
    {
        let curr = queue.dequeue();

        if(curr === null)
        {
            ans += "\n";
            queue.enqueue(null);
            continue;
        }

        ans += curr.data + " ";
        if(curr.left !== null)
            queue.enqueue(curr.left);
        if(curr.right !== null)
            queue.enqueue(curr.right);
    }
    return ans;
}


console.log(levelPrint(root));