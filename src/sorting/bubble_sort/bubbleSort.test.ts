import bubbleSort from "./bubbleSort";

describe("Bubble Sort Algorithm", () => {
    it("Should sort an array of numbers.", () => {
        let data: number[] = [5, 4, 3, 2, 1];
        bubbleSort(data);
        expect(data).toEqual([1, 2, 3, 4, 5]);
    });
});