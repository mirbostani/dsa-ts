class StackNode<T> {
    public data: T;
    public next: StackNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class StackWithLinkedList<T> {
    private head: StackNode<T> | null;

    constructor() {
        this.head = null;
    }

    get size(): number {
        let currentNode: StackNode<T> | null = this.head;
        let counter: number = 0;

        while (currentNode !== null) {
            counter++;
            currentNode = currentNode.next
        }

        return counter;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    push(data: T): void {
        const newNode = new StackNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // Stack underflow
        }

        const popped_node = this.head;
        this.head = this.head!.next;
        return popped_node?.data;
    }

    top(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.head!.data;
    }

    peek(): T | undefined {
        return this.top();
    }
}