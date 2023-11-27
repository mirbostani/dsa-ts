import { binarySearch } from "./binarySearch";

describe("Binary Search", () => {
    it("Should return the target index using binary search", () => {
        let arr = [10, 20, 30, 40, 50, 60, 70];
        let target = 40;
        let index = binarySearch(arr, target);

        expect(index).toBe(3);
    });

    it("Should not find the target returning default index value", () => {
        let arr = [10, 20, 30, 40, 50, 60, 70];
        let target = 100;
        let index = binarySearch(arr, target);

        expect(index).toBe(-1);
    });
});