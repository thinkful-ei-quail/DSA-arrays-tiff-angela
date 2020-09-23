
const Memory = require('./memory')
const memory = new Memory()

class Array {
    constructor () {
        this.length = 0;    // length starts at 0
        this._capacity = 0;     // max size of arr
        this.ptr = memory.allocate(this.length)     // to distribute the memory at same rate as length
    }
    push (value) {
        if (this.length >= this._capacity) {    // if length is >+ capacity
            this._resize((this.length + 1) * Array.SIZE_RATIO)  // add length to arr by * by size ratio (usually 3)
        }
        memory.set(this.ptr + this.length, value)   // add value to the ptr/length spot in arr
        this.length++   // adds 1 to length
    }
    _resize (size) {
        const oldPtr = this.ptr     // defines current ptr
        this.ptr = memory.allocate(size)    // defines method to resize memory
        if (this.ptr === null) {    // conditional checkign memory for space
            throw new Error ('out of memory')   // throws error
        } memory.copy(oldPtr, this.ptr, this.length)    // copies everything in arr
        memory.free(oldPtr)     // adds ptr to free space
        this._capacity = size   // new size of arr
    }
    get (index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    }
    function pop () {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    function insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
   function  remove (index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

Array.SIZE_RATIO = 3

console.log(Array)
module.exports = Array;