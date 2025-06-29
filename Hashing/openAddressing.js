/*
function linearProbing(hashSize, arr, sizeOfArray) 
{
    const hashArr = new Array(hashSize).fill(-1);
    for(let i = 0; i < sizeOfArray; i++)
    {
       let key = arr[i];
       let index = arr[i] % hashSize;

       if(hashArr[index] === -1)
        hashArr[index] = key;
       else
       {
        let currPos = index;
        while(hashArr[currPos] !== -1)
        {   
            currPos++;
            if(currPos > hashSize-1)
             currPos = 0
        }
        hashArr[currPos] = key;
       }
    }
    return hashArr;
}
console.log(linearProbing(10,[9,99,999,9999],4));

*/

// Object based Hashmap

class Hashmap
{
    arr = [];
    size;
    capacity;

    
    constructor(capacity)
    {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(capacity).fill(-1);
    }

    search(element)
    {
        let h = element % this.capacity;
        let index = h;

        while(this.arr[index] !== -1)
        {
            if(element === arr[index])
                return true;

            index = (index + 1) % this.capacity;
            if(index === h)
                return false;

        }
        return false;
    }

    insert(element)
    {
        if(this.size === this.capacity)
            return false;

        let index = element % this.capacity;

        while(this.arr[index] !== -1 && this.arr[index] !== -2 && this.arr[index] !== element)
        {
            index = (index + 1) % this.capacity;
        }
        if(this.arr[index] === element)
            return false;
        else
        {
            this.arr[index] = element;
            this.size++;
            return true;
        }
    }

    remove(element)
    {
        let h = element % this.capacity;
        let index = h;

        if(this.size === 0)
            return false;

        while(this.arr[index] !== -1)
        {
            if(this.arr[index] === element)
            {
                this.arr[index] = -2;
                return true;
            }
            index = (index + 1) % this.capacity;
            if(h === index)
                return false;
        }
        return false;
    }

    show()
    {
        console.log(this.arr);
    }
}

const hash = new Hashmap(10);
hash.insert(4);
hash.insert(44);
hash.insert(444);
console.log(hash.search(40));
hash.remove(44);
hash.show();