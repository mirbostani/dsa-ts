import { QueueWithDynamicArray } from "./QueueWithDynamicArray";

describe("Queue with dynamic array", () => {
    it("Should create a queue including three elements", () => {
        let queue = new QueueWithDynamicArray<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.size).toBe(3);
    });
});