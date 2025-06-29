class Node
{
    constructor(x)
    {
        this.data = x;
        this.next = null;
    }
}

function printList(head)
{
    let curr = head.next;
    let string = head.data + "=>";

    while(curr !== head)
    {
        string += curr.data + "=>";
        curr = curr.next;
    }
    return string + "NULL"
}

let head = new Node(10);
head.next = new Node(5);
head.next.next = new Node(20);
head.next.next.next = new Node(15);
head.next.next.next.next = head;

console.log(printList(head));