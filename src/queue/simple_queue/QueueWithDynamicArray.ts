export class QueueWithDynamicArray<T> {
    private queue: T[];
    private front: number;

    constructor() {
        this.queue = new Array<T>();
        this.front = 0;
    }

    get size(): number {
        return this.queue.length;
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    enqueue(data: T): void {
        this.queue.push(data);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.queue.shift();
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.queue[this.front];
    }
}