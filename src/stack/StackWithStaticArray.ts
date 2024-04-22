export class StackWithStaticArray<T> {
    private stack: T[];
    private maxSize: number;
    private head: number;

    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.stack = Array<T>(this.maxSize);
        this.head = -1;
    }

    get size(): number {
        return this.head + 1;
    }

    get capacity(): number {
        return this.maxSize;
    }

    isEmpty(): boolean {
        return this.head === -1;
    }

    isFull(): boolean {
        return this.head === this.maxSize - 1;
    }

    push(data: T): void {
        if (this.isFull()) {
            throw new Error("Push to a full stack"); // stack overflow
        }

        this.head += 1;
        this.stack[this.head] = data;
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // stack underflow
        }

        const popped_element: T = this.stack[this.head];
        this.head -= 1;
        return popped_element;
    }

    top(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.stack[this.head];
    }

    peek(): T | undefined {
        return this.top();
    }
}