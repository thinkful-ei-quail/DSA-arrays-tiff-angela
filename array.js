
const Memory = require('./memory')
const memory = new Memory()

class Array {
    constructor() {
        this.length = 0;    // length starts at 0
        this.ptr = memory.allocate(this.length)     // to distribute the memory at same rate as length
    }
    push(value) {
        this._resize(this.length + 1)
        memory.set(this.ptr + this.length, value)
        this.length++
    }
    _resize(size) {
        const oldPtr = this.ptr     // defines current ptr
        this.ptr = memory.allocate(size)    // defines method to resize memory
        if (this.ptr === null) {    // conditional checking memory for space
            throw new Error('out of memory')   // throws error
        }
        memory.copy(this.ptr, oldPtr, this.length)    // copies everything in arr
        memory.free(oldPtr)     // adds ptr to free space
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
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
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}


Array.SIZE_RATIO = 3

module.exports = Array;