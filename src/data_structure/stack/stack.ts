class Stack<T> {
    private stack: T[];
    private capacity: number;

    constructor(capacity: number) {
        this.stack = [];
        this.capacity = capacity;
    }

    /**
     * Push an element onto the stack.
     * @param item T
     * @returns void
     */
    push(item: T): void {
        if (this.isFull()) {
            return;
        }
        this.stack.push(item);
    }

    /**
     * Remove and return the top element of the stack.
     * @returns top element from the stack or `undefined` if stack is empty
     */
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.stack.pop();
    }

    /**
     * Get the number of items stored in the stack.
     */
    size(): number {
        return this.stack.length;
    }

    /**
     * Check if the stack is empty or not.
     * @returns true if the stack is empty; otherwise, false
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * Check if the stack si full or not.
     * @returns true if the stack is full; otherwise, false
     */
    isFull(): boolean {
        return this.size() === this.capacity;
    }

    /**
     * Peek at the top element of the stack without removing it.
     * @returns Top element of the stack or `undefined` if stack is empty
     */
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.stack[this.size() - 1];
    }
}

export {
    Stack,
}