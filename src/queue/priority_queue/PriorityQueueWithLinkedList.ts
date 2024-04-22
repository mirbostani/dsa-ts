class Node<T> {
    constructor(public data: T, public priority: number, public next: Node<T> | null = null) { }
}

export class PriorityQueueWithLinkedList<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    enqueue(data: T, priority: number): void {
        const newNode = new Node<T>(data, priority);
        if (!this.head || priority < this.head.priority) {
            // Insert at the rear (beginning)
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next && priority >= currentNode.next.priority) {
            currentNode = currentNode.next;
        }
        // Insert after the current node
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const data = this.head.data
        this.head = this.head.next;
        this.size--;
        return data;
    }

    peek(): T | undefined {
        return this.head ? this.head.data : undefined;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }
}
