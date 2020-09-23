const memory = require('./memory.js')

// writing an array :
// we need to push the new element to the end
// w/ ea new space we need to increase the contigious memory
// then set the value of the final space to the new value


// PUSH METHOD w/ O(1), doesn't work w input > length
class Array {
    constructor() {
      this.length = 0;
      this.ptr = memory.allocate(this.length);
    }
    push(value) {
      this._resize(this.length + 1)
      memory.set(this.ptr + this.length, value)
      this.length++
    }
    _resize(size) {
      const oldPtr = this.ptr
      this.ptr = memory.allocate(size)
      if (this.ptr === null) {
          throw new Error('Out of memory')
      }
      memory.copy(this.ptr, oldPtr, this.length)
      memory.free(oldPtr)
      this._capacity = size
    }
}
Array.SIZE_RATIO = 3

// RETRIEVING VALUES
get(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
}

//POPPING VALUES O(1)
...
pop() {
    if (this.length == 0) {
        throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
}
...

//INSERTING VALUES O(n) if inserting at beg or mid and O(1) if inserting at end of arr
...
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
...

//REMOVING VALUES O(n) O(1)
...
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
...