import { MaxHeapWithDynamicArray } from "./MaxHeapWithDynamicArray";

describe("Max heap with dynamic array", () => {
    it("Should create a heap of three elements", () => {
        const maxHeap = new MaxHeapWithDynamicArray();
        maxHeap.insert(40);
        maxHeap.insert(10);
        maxHeap.insert(50);
        maxHeap.insert(30);
        maxHeap.insert(70);
        maxHeap.insert(100);
        maxHeap.insert(20);

        expect(maxHeap.size()).toBe(7);
        expect(maxHeap.peek()).toBe(100);
        expect(maxHeap.extractMax()).toBe(100);
        expect(maxHeap.size()).toBe(6);
    });
});