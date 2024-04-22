import { PriorityQueueWithLinkedList } from "./PriorityQueueWithLinkedList";

describe("Priority queue with linked list", () => {
    it("Should create a priority queue with three elements", () => {
       const pq = new PriorityQueueWithLinkedList();
       pq.enqueue("Task 1", 3)
       pq.enqueue("Task 2", 1)
       pq.enqueue("Task 3", 2);

       expect(pq.dequeue()).toBe("Task 2");
       expect(pq.dequeue()).toBe("Task 3");
       expect(pq.dequeue()).toBe("Task 1");
    });
});

