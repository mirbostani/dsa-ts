import { StackWithDynamicArray } from "./StackWithDynamicArray";
import { StackWithLinkedList } from "./StackWithLinkedList";
import { StackWithFixedSizeArray } from "./StackWithFixedSizeArray";

describe("Stack with dynamic array", () => {
    it("Should create a stack containing three elements", () => {
        let stack: StackWithDynamicArray<number> = new StackWithDynamicArray();
        stack.push(3);
        stack.push(2);
        stack.push(1);

        expect(stack.size).toBe(3);
    });

    it("Should push and pop elements following LIFO principle", () => {
        let stack: StackWithDynamicArray<number> = new StackWithDynamicArray();
        stack.push(3);
        stack.push(2);
        stack.push(1);

        let value: number | undefined;

        value = stack.pop();
        expect(value).toBe(1)

        value = stack.pop();
        expect(value).toBe(2);

        value = stack.pop();
        expect(value).toBe(3);

        expect(stack.isEmpty()).toBeTruthy();
    });

    it("Should peek the top element of the stack", () => {
        let stack: StackWithDynamicArray<number> = new StackWithDynamicArray();
        stack.push(3);
        stack.push(2);
        stack.push(1);

        let value: number | undefined = stack.peek();
        expect(value).toBe(1);
        expect(stack.size).toBe(3);
    });
});

describe("Stack with linked list", () => {
    it("Should create a stack containing three elements", () => {
        let stack: StackWithLinkedList<number> = new StackWithLinkedList();
        stack.push(3);
        stack.push(2);
        stack.push(1);

        expect(stack.size).toBe(3);
    });

    it("Should push and pop elements following LIFO principle", () => {
        let stack: StackWithLinkedList<number> = new StackWithLinkedList();
        stack.push(3);
        stack.push(2);
        stack.push(1);

        let value: number | undefined;

        value = stack.pop();
        expect(value).toBe(1);

        value = stack.pop();
        expect(value).toBe(2);

        value = stack.pop();
        expect(value).toBe(3);

        expect(stack.isEmpty()).toBeTruthy();
    });

    it("Should peek the top element of the stack", () => {
        let stack: StackWithLinkedList<number> = new StackWithLinkedList();
        stack.push(3);
        stack.push(2);
        stack.push(1);

        let value: number | undefined = stack.peek();
        expect(value).toBe(1)
        expect(stack.size).toBe(3)
    });
});

describe("Stack with fixed-size array", () => {
    it("Should create a stack with three elements", () => {
        let stack: StackWithFixedSizeArray<number> = new StackWithFixedSizeArray(10);
        stack.push(3);
        stack.push(2);
        stack.push(1);

        expect(stack.size).toBe(3);
        expect(stack.capacity).toBe(10);
    });

    it("Should push and pop elements following LIFO principle", () => {
        let stack: StackWithFixedSizeArray<number> = new StackWithFixedSizeArray(10);
        stack.push(3);
        stack.push(2);
        stack.push(1);

        let value: number | undefined;
        
        value = stack.pop();
        expect(value).toBe(1);

        value = stack.pop();
        expect(value).toBe(2);

        value = stack.pop();
        expect(value).toBe(3)

        expect(stack.size).toBe(0);
    });

    it("Should prevent adding more elements when stack is full", () => {
        let stack: StackWithFixedSizeArray<number> = new StackWithFixedSizeArray(3);
        stack.push(3);
        stack.push(2);
        stack.push(1);

        expect(stack.isFull()).toBeTruthy();
        
        expect(() => {
            stack.push(0);
        }).toThrow("Push to a full stack");
    });

    it("Should prevent popping from an empty stack", () => {
        let stack: StackWithFixedSizeArray<number> = new StackWithFixedSizeArray(3);

        expect(stack.isEmpty()).toBeTruthy();
        
        const value: number | undefined = stack.pop();
        expect(value).toBeUndefined();
    });
});