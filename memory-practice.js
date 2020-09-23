
class Memory {
    constructor () {
        this.length = 0;    // length starts at 0
        this._capactiy = 0;     // max size of arr
        this.ptr = memory.allocate(this.length)     // to distribute the memory at same rate as length
    }
    push (value) {
        if (this.length >= this._capactiy) {    // if length is >+ capactiy
            this._resize((this.length + 1) * Array.SIZE_RATIO)  // add length to arr by * by size ratio (usually 3)
        }
        memory.set(this.ptr + this.length, value)   // add value to the ptr/length spot in arr
        this.length++   // adds 1 to length
    }
    resize (size) {
        const oldPtr = this.ptr     // defines current ptr
        this.ptr = memory.allocate(size)    // defines method to resize memory
        if (this.ptr === null) {    // conditional checkign memory for space
            throw new Error ('out of memory')   // throws error
        } memory.copy(oldPtr, this.ptr, this.length)    // copies everything in arr
        memory.free(oldPtr)     // adds ptr to free space
        this._capactiy = size   // new size of arr
    }
}
Array.SIZE_RATIO = 3