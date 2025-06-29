//Implementing with Circular Array

class Queue
{
    constructor(capacity)
    {
        this.capatity = capacity;
        this.arr = new Array(this.capatity);
        this.front = 0;
        this.size = 0;
    }

    getFront()
    {
        if(this.size === 0)
            return null;
        
        return this.arr[this.front];
    }

    getRear()
    {
        if(this.size === 0)
            return null;
        
        let r = (this.front + this.size - 1) % this.capatity;
        return this.arr[r];
    }

    enqueue(value)
    {
        if(this.size === this.capatity)
            return "Queue is Full"

        let r = (this.front + this.size - 1) % this.capatity;
        r = (r + 1) % this.capatity;
        this.arr[r] = value;
        this.size++;
    }

    dequeue()
    {
        if(this.size === 0)
            return "Queue is Empty"

        let result = this.arr[this.front];
        this.front = (this.front + 1) % this.capatity;

        this.size--;
        return result;
    }
}

const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

/*
console.log(queue.dequeue());

console.log(queue);

*/

//Implementing Queue with Linked List

class QueueNode
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }

}

let head = null;
let lastNode = head;

function pushNode(data)
{
    let temp = new QueueNode(data);

    if(head === null)
    {
        head = temp;
        lastNode = head;
        return
    }

    lastNode.next = temp;
    lastNode = temp;

}

function popNode()
{
    if(head === null)
        return "Queue Node is empty"

    let value = head.data;
    head = (head.next === null)? null : head.next;
    return value;
}

pushNode(10);
pushNode(20);
pushNode(30);
pushNode(40);

popNode();
popNode();
popNode();
popNode();

console.log(head);