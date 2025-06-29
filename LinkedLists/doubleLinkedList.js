class Node
{
    constructor(x)
    {
        this.data = x;
        this.next = null;
        this.prev = null;
    }
}

function printList(head)
{
    let str = "";
    let curr = head;

    while(curr != null)
    {
        str += curr.data + "==>";
        curr = curr.next;
    }
    return str + "NULL";
}

function insertAtBegin(head,data)
{
    let node = new Node(data);
    head.prev = node;
    node.next = head;
    return node;
}

let head = new Node(10);
head.next = new Node(20);
head.next.prev = head;
head.next.next = new Node(30);
head.next.next.prev = head.next;


head = insertAtBegin(head,50);

console.log(printList(head));