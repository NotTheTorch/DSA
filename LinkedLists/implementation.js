class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }

    setter(data)
    {
        this.data = data;
    }

}

function printList(head)
{
    let string = "";
    let curr = head;
    while(curr !== null)
    {
        string += curr.data + "-->";
        curr = curr.next;
    }
    return string + "NULL";
}

function recurivePrint(head)
{
    head;
    let string = "";
    if(head === null)
        return null;
    console.log(head.data);
    return recurivePrint(head.next);
}

function insertAtEnd(head,value)
{
    let curr = head;
    let temp = new Node(value);

    while(curr.next !== null)
    {
        curr = curr.next;
    }
    curr.next = temp;
    return head;
}

function insertAtStart(value,head)
{
    let temp = new Node(value);
    temp.next = head
    head = temp;
    return head;
}

function insertAtPos(pos,value,head)
{
    if(pos === 1)
        return insertAtStart(value,head);

    let curr = head; 
    let posCount = 1;
    let temp = new Node(value);

    while(curr !== null)
    {
        if(posCount+1 === pos)
        {
            temp.next = curr.next;
            curr.next = temp;
        }
        curr = curr.next;
        posCount++;
    }
    return head;
}

function deleteFirstNode(head)
{
    if(head === null)
        return head;
    return head.next;
}


function getMiddle(head)
{
    let slow = head;
    let fast = head;

    if(!head)
        return head;

    while(fast !== null && fast.next !== null)
    {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}

function getLength(head)
{
    if(!head)
        return 0;

    if(!head.next)
        return 1;

    let curr = head;
    let count = 0;
    while(curr !== null)
    {
        count ++;
        curr = curr.next;
    }
    return count;
}

function printNthEnd(head,pos)
{
    let length = getLength(head);
    let curr = head;
    let currPos = (length - pos + 1);

    while(curr !== null)
    {
        if(currPos - 1 === 0)
            return curr.data;

        currPos--;
        curr = curr.next;
    }
    return -1;
}

function reverseList(head)
{
    if(!head || head.next === null)
        return head;

    let prev = null;
    let curr = head;
    
    while(curr !== null)
    {
        let next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;

    }
    return prev;
}

function reverseFirstKNodes(head,k)
{
    let prev = null;
    let curr = head;
    let count = 1;

    while(curr & count < k)
    {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;

        if(next)
        {
            let rem_head = reverseFirstKNodes(next,k);
            head.next = rem_head;
        }
    }
    return head;
}

function mapping(head)
{
    let m = new Map();
    m.set(null,null);
    
    let curr = head;
    while(curr !== null)
    {
        m.set(curr,curr.next);
        curr = curr.next;
    }

    return m.get(100);
}

/*

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
insertAtEnd(head,100);
head = deleteFirstNode(head);
head = insertAtStart(120,head);
head = insertAtPos(2,130,head);
head = insertAtPos(6,90,head);

console.log(printList(head));
console.log(getLength(head));
console.log(getMiddle(head));
console.log(printNthEnd(head,1));

*/

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(40);
head.next.next.next = new Node(50);
head.next.next.next.next = new Node(60);

console.log(printList(head));
console.log(mapping(head));
