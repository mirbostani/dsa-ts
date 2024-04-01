import linearSearch, { linearSearchBidirectional } from "./linearSearch";

describe("Linear Search Algorithm", () => {
    it("Should find the target in the array.", () => {
        const arr = [11, 34, 8, 14];
        const target = 34;
        const index = linearSearch(arr, target);

        expect(index).not.toBe(-1);
        expect(index).toBe(1);
    });
});

describe("Bidirectional Linear Search Algorithm", () => {
    it("Should find the target in the array.", () => {
        const arr = [11, 34, 8, 14];
        const target = 14;
        const index = linearSearchBidirectional(arr, target);

        expect(index).not.toBe(-1);
        expect(index).toBe(3);
    });
});
