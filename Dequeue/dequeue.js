//Implementation with Doubly Linked List
class DequeueNode
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

let head = null;
let lastNode = null;

function insertFront(value)
{
    let temp = new DequeueNode(value);
    if(head === null)
    {
        head = temp;
        lastNode = head;
        return;
    }

    temp.next = head;
    head.prev = temp;
    head = temp;
}

insertFront(20);
insertFront(30);

console.log(head.data);
console.log(lastNode.data);



function deleteFront()
{
    if(head === null)
        return "Dequeue is Empty";

    if(head.next === null)
    {
        head = null;
        lastNode = null;
        return head;
    }

    head = head.next;
    head.prev.next = null;
    head.prev = null;
    
}

deleteFront();
console.log(head.data);
console.log(lastNode.data);
deleteFront();
console.log(deleteFront());

function insertRear(value)
{
    let temp = new DequeueNode(value);
    if(lastNode === null)
    {
        head = temp;
        lastNode = temp;
    }

    temp.prev = lastNode;
    lastNode.next = temp;
    lastNode = lastNode.next;
    
}

function deleteRear()
{
    if(head === null)
        return "Dequeue is Empty";

    if(lastNode.prev === null)
    {
        head = null;
        lastNode = null;
        return lastNode;
    }

    lastNode = lastNode.prev;
    lastNode.next.prev = null;
    lastNode.next = null;

}