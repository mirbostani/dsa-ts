import binarySearch, { binarySearchRecursive } from "./binarySearch";

describe("Binary Search Algorithm", () => {
    it("Should return the target index of the target", () => {
        let arr = [10, 20, 30, 40, 50, 60, 70];
        let target = 40;
        let index = binarySearch(arr, target);

        expect(index).toBe(3);
    });

    it("Should not find the target, returning default value", () => {
        let arr = [10, 20, 30, 40, 50, 60, 70];
        let target = 100;
        let index = binarySearch(arr, target);

        expect(index).toBe(-1);
    });
});

describe("Binary Search Recursive Algorithm", () => {
    it("Should return the index of the target", () => {
        let arr = [10, 20, 30, 40, 50, 60, 70];
        let target = 40;
        let index = binarySearchRecursive(arr, target);

        expect(index).toBe(3);
    });

    it("Should return the index of the target searching in a range", () => {
        let arr = [10, 20, 30, 40, 50, 60, 70];
        let target = 40;
        let index = binarySearchRecursive(arr, target, 2, 5);
        
        expect(index).toBe(3);
    });

    it("Should not find the target, returning default value", () => {
        let arr = [10, 20, 30, 40, 50, 60, 70];
        let target = 100;
        let index = binarySearchRecursive(arr, target);

        expect(index).toBe(-1);
    });

    it("Should not find the target searching in a range, returning default value", () => {
        let arr = [10, 20, 30, 40, 50, 60, 70];
        let target = 40;
        let index = binarySearchRecursive(arr, target, 0, 2);

        expect(index).toBe(-1);
    });
});