/**
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through an
 * array, compares adjacent elements, and swaps them if they are in the wrong
 * order. Passing through the array continues until the it is sorted.
 * 
 * 1. Start at the beginning of the list.
 * 2. Compare the current element with the next element. If the current element
 *    is greater than the next element, swap them.
 * 3. Move to the next pair of elements and repeat step 2 until you reach the
 *    end of the list.
 * 4. Repeat steps 1-3 until the entire list has been sorted.
 * 5. Return the sorted list.
 * 
 * The time complexity of bubble sort is $O(n^2)$, where $n$ is the length of
 * the array being sorted. This makes it an inefficient algorithm for large
 * arrays.
 * 
 * @param arr Array of elements
 * @returns Sorted array
 */
function bubbleSort(arr: number[]): number[] {
    for (let i = arr.length; i > 0; i--) {
        let swapped: boolean = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swapped
                swapped = true;
            }
        }
        if (!swapped) { // stop early if no swaps were made
            return arr;
        }
    }
    return arr;
}

export default bubbleSort;