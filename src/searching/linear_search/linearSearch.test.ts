import { linearSearch, linearSearchBidirectional } from "./linearSearch";

describe("Linear Search", () => {
    it("Should find the element in the array", () => {
        const arr = [11, 34, 8, 14];
        const x = 34;
        const index = linearSearch(arr, x);

        expect(index).not.toBe(-1);
        expect(index).toBe(1);
    });
});

describe("Linear Search Optimized", () => {
    it("Should find the element in the array", () => {
        const arr = [11, 34, 8, 14];
        const x = 14;
        const index = linearSearchBidirectional(arr, x);

        expect(index).not.toBe(-1);
        expect(index).toBe(3);
    });
});
