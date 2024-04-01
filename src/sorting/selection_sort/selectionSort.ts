/**
 * Selection Sort is a simple sorting algorithm that works by repeatedly finding
 * the minimum (or maximum) element in an unsorted array and moving it to the 
 * beginning (or end) of the array. The process is repeated until the entire
 * list is sorted.
 * 
 * @param arr Array of elements
 * @returns Sorted array
 */
function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex: number = i; // Consider the first element as the minimum

        // Find the element with minimum value and update the minimum index.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Move the minimum element to the beginning of the array.
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swapped
    }
    return arr;
}
export default selectionSort;