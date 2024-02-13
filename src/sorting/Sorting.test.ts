import { bubbleSort } from "./bubble_sort/bubbleSort";
import { insertionSort } from "./insertion_sort/insertionSort";
import { selectionSort } from "./selection_sort/selectionSort";
import { mergeSort } from "./merge_sort/mergeSort";

describe("Sorting algorithms", () => {
    it("Should sort an array of numbers using bubble sort algorithm", () => {
        let arr: number[] = [5, 4, 3, 2, 1];
        bubbleSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it("Should sort an array of numbers using insertion sort algorithm", () => {
        let arr: number[] = [5, 4, 3, 2, 1];
        insertionSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it("Should sort an array of numbers using selection sort algorithm", () => {
        let arr: number[] = [5, 4, 3, 2, 1];
        selectionSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it("Should sort an array of numbers using merge sort algorithm", () => {
        let arr: number[] = [5, 4, 3, 2, 1];
        mergeSort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
});