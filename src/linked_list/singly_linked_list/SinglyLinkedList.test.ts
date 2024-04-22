import { SinglyLinkedList } from "./SinglyLinkedList";

describe("Singly linked list", () => {
    it("Should create a linked list containing three elements", () => {
        let list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.size).toBe(3);
        expect(list.getArray()).toEqual([1, 2, 3]);
    });
});