import quickSort, { quickSortV2 } from "./quickSort";

describe("QuickSort Algorithm", () => {
    it("Should sort an array of numbers in a worst-case scenario.", () => {
        let data: number[] = [5, 4, 3, 2, 1];
        quickSort(data);
        expect(data).toEqual([1, 2, 3, 4, 5]);
    });

    it("Should sort an array of numbers in an average-case scenario.", () => {
        let data: number[] = [9, 3, 7, 0, 2, 4, 8, 1, 5, 6];
        quickSort(data);
        expect(data).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe("QuickSort Algorithm V2", () => {
    it("Should sort an array of numbers.", () => {
        let data: number[] = [5, 4, 3, 2, 1];
        let sortedData = quickSortV2(data);
        expect(sortedData).toEqual([1, 2, 3, 4, 5]);
    });
});