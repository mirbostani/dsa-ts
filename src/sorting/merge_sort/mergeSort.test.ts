import mergeSort from "./mergeSort";

describe("Merge Sort Algorithm", () => {
    it("Should sort an array of numbers.", () => {
        let data: number[] = [5, 4, 3, 2, 1];
        mergeSort(data);
        expect(data).toEqual([1, 2, 3, 4, 5]);
    });
});