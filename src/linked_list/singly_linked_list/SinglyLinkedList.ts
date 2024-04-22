class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

/**
 * A linked list is a linear data structure consisting of a sequence of elements
 * called nodes. Each node contains two parts: data and a reference (or pointer)
 * to the next node in the sequence. Unlike arrays, linked lists do not store
 * elements in contiguous memory locations; instead, they use pointers to link
 * nodes together.
 */
export class SinglyLinkedList<T> {
    head: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at the beginning
    prepend(data: T): void {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Insert at the end
    append(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }
        let currentNode: Node<T> | null = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.size++;
    }

    // Insert at a specific position
    insertAt(data: T, index: number): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds.");
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        const newNode = new Node(data);
        let currentNode: Node<T> | null = this.head;
        let previousNode: Node<T> | null = null;
        let currentIndex = 0;
        while (currentIndex < index && currentNode) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        if (previousNode) {
            previousNode.next = newNode; // insert node
            newNode.next = currentNode;
            this.size++;
        }
    }

    // Remove at a specific position
    removeFrom(index: number): void {
        if (index < 0 || index >= this.size || !this.head) {
            throw new Error("Index out of bounds.");
        }
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let currentNode: Node<T> | null = this.head;
        let previousNode: Node<T> | null = null;
        let currentIndex = 0;
        while (currentIndex < index && currentNode) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        if (previousNode && currentNode) {
            previousNode.next = currentNode.next; // remove node
            this.size--;
        }
    }

    // Get element at a specific index
    get(index: number): T | undefined {
        if (index < 0 || index >= this.size || !this.head) {
            return undefined;
        }
        let currentNode: Node<T> | null = this.head;
        let currentIndex = 0;
        while (currentIndex < index && currentNode) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode ? currentNode.data : undefined;
    }

    // Print the linked list
    getArray(): T[] {
        let currentNode = this.head;
        let arr: T[] = []
        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr;
    }
}