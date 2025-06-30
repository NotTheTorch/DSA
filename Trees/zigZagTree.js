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
    let arr = [];
    const oddStack = new Stack();
    const evenStack = new Stack();
    oddStack.push(node);
    let leftToRight = true;

    while(oddStack.arr.length !== 0 || evenStack.arr.length !== 0)
    {
        if(leftToRight)
        {
            while(oddStack.arr.length)
            {
                let curr = oddStack.pop();
                arr.push(curr.data);

                if(curr.left)
                    evenStack.push(curr.left);
                if(curr.right)
                    evenStack.push(curr.right);
            }
        }
        else
        {
            while(evenStack.arr.length)
            {
                let curr = evenStack.pop();
                arr.push(curr.data);

                if(curr.left)
                    oddStack.push(curr.right);
                if(curr.right)
                    oddStack.push(curr.left);
            }
        }
        leftToRight = !leftToRight;
    }
    return arr;
}

console.log(zigzag(root));