class ListNode
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class Queue
{

    constructor()
    {
        this.head = null;
        this.lastNode = null;
    }
    

    enqueue(x)
    {
        let temp = new ListNode(x);
        if(this.head === null)
        {
            this.head = temp;
            this.lastNode = this.head;
            return;
        }

        this.lastNode.next = temp;
        this.lastNode = this.lastNode.next;
        return;
    }

    dequeue()
    {
        if(this.head === null)
            return "Stack is Empty";

        let result = this.head.data;
        this.head = (this.head.next === null)? null : this.head.next;
        return result;
    }
}


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
root.right.right = new Node(50);


function LevelOrderTraversal(root)
{
    if(root === null)
        return;

    let arr = [];
    let queue = new Queue();
    queue.enqueue(root);

    while(queue.head !== null)
    {
        let curr = queue.dequeue();
        arr.push(curr.key);
        if(curr.left !== null)
            queue.enqueue(curr.left);
        if(curr.right !== null)
            queue.enqueue(curr.right);
    }
    return arr;
}