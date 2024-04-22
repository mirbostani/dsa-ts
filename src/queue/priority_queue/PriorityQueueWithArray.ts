type Item<T> = {
    item: T;
    priority: number;
};

export class PriorityQueueWithArray<T> {
    private queue: Item<T>[];

    constructor() {
        this.queue = new Array<Item<T>>();
    }

    /**
     * Inserts new data into the queue.
     */
    enqueue(item: T, priority: number): void {
        this.queue.push({ item, priority });
        this.queue.sort((a, b) => a.priority - b.priority); // O(n log n)
    }

    /**
     * Removes the element with the highest priority from the queue.
     */
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue.shift()?.item;
    }

    /**
     * Get the highest priority element in the queue without removing it from
     * the queue.
     */
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue[0].item;
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }
}