export class StackWithDynamicArray<T> {
    private stack: T[] = [];

    get size(): number {
        return this.stack.length;
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    push(data: T): void {
        this.stack.push(data);
    }

    pop(): T | undefined {
        return this.stack.pop();
    }

    top(): T | undefined {
        return this.stack[this.stack.length - 1];
    }

    peek(): T | undefined {
        return this.top();
    }
}