export class MaxHeapWithDynamicArray {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    /**
     * Add a value to the heap.
     */
    public insert(value: number): void {
        this.heap.push(value); // Add the new value to the end of the array
        this.bubbleUp(); // Ensure the heap property is maintained
    }

    /**
     * Moves the newly inserted element to its correct position to maintain the
     * max-heap property.
     * 
     * In a heap, which is a complete binary tree, every node (except the root)
     * has exactly one parent, and each parent can have up to two children. The
     * tree is filled level by level from left to right.
     * 
     * When a heap is represented as an array: 
     * 
     * - The root of the tree (the maximum in a max-heap or the minimum in a 
     *   min-heap) is placed at the first postion, i.e., `index 0`.
     * - For any node at index `i` in the array, the left child (if it exists)
     *   is located at `2 * i + 1`,
     * - For any node at index `i` in the array, the right child (if it exists) 
     *   is located at `2 * i + 2`.
     * 
     * To find the parent index of a node at index `i`:
     * 
     * - If `i` is 0 (the root), it has no parent.
     * - If `i` is greater than 0, it must have a parent. The parent index of
     *   the left child or right child will be `Math.floor((i - 1) / 2)`,
     *   considering both `(i - 1) / 2` for the left child and `(i - 2) / 2`
     *   for the right child will result the same value after `Math.floor()`.
     * 
     * ```
     *          100(0)
     *       /         \
     *      /           \
     *     50(1)         70(2)
     *    /  \          /  \
     *   /    \        /    \
     *  40(3) 10(4)   30(5)  20(6)
     * 
     * [100, 50, 70, 40, 10, 30, 20]
     *  0    1   2   3   4   5   6
     * ```
     */
    private bubbleUp(): void {
        let index = this.heap.length - 1; // Start with the new element's index
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] > this.heap[parentIndex]) {
                // Swap
                [this.heap[index], this.heap[parentIndex]] =
                    [this.heap[parentIndex], this.heap[index]];
                index = parentIndex; // Move up to the parent's index and continue
            } else {
                break; // If no swap is needed, break out of the loop
            }
        }
    }

    /**
     * Remove and return the maximum value from the heap.
     */
    public extractMax(): number | undefined {
        if (this.size() === 0) return undefined; // Heap is empty
        if (this.size() === 1) return this.heap.pop() // Only one element

        const max = this.heap[0] // Store the maximum element (root of the heap)
        this.heap[0] = this.heap.pop()!; // Replace the root with the last elem
        this.siftDown(); // Restore the heap property from the root downwards
        return max;
    }

    /**
     * Adjust the heap after the root has been replaced.
     */
    private siftDown(): void {
        let index = 0; // start from root
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let largest = index; // Assume the largetst element is the root

        while (leftChildIndex < this.heap.length) {
            if (this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex; // Update if left child is greater
            }
            if (rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex; // Update if right child is greater
            }
            if (largest !== index) {
                // If the largest elelent is not the root, swap with the root.
                [this.heap[index], this.heap[largest]] =
                    [this.heap[largest], this.heap[index]];
                index = largest; // Update index to largest
                // Recalculate children indices
                leftChildIndex = 2 * index + 1;
                rightChildIndex = 2 * index + 2;
            } else {
                break; // If the root is the largest, stop
            }
        }
    }

    /**
     * Peek at the maximum value (stored in the root node) without removing it.
     */
    public peek(): number | undefined {
        if (this.size() > 0) {
            return this.heap[0]; // Return the root element
        }
        return undefined;
    }

    /**
     * Get the number of elements in the heap.
     */
    public size(): number {
        return this.heap.length;
    }
}