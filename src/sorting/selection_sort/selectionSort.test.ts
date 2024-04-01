import selectionSort from "./selectionSort";

describe("Selection Sort Algorithm", () => {
    it("Should sort an array of numbers.", () => {
        let data: number[] = [5, 4, 3, 2, 1];
        selectionSort(data);
        expect(data).toEqual([1, 2, 3, 4, 5]);
    });
});