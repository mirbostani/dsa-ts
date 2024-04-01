/**
 * QuickSort is an efficient sorting algorithm based on the divide and conquer
 * algorithm that works by partitioning the input array into two sub-arrays
 * around a pivot element. The algorithm then recursively sorts each sub-array
 * until the entire array is sorted. The choice of the pivot element can affect
 * the performance of the algorithm, with some choices leading to faster or
 * slower sorting times.
 * 
 * The time complexity of the QuickSort algorithm for the best-case scenario is 
 * $\Omega(n \log n)$. It occurs when the pivot chosen at the each step divides
 * the array into roughly equal halves. In this case, the algorithm will make 
 * balanced partitions, leading to efficient sorting.
 * 
 * The time complexity of the average-case scenario for the QuickSort algorithm 
 * is $\Theta(n \log n)$, making it one of the fastest sorting algorithms.
 * 
 * The time complexity of the worst-case scenario for QuickSOrt is $O(n^2)$. It
 * occurs when the pivot at each step consistently results in highly unbalanced
 * partitions.
 * 
 * @param arr Array of elements
 * @param low The low element's index
 * @param high The high element's index
 * @returns Sorted array
 */
export default function quickSort(arr: number[], low?: number, high?: number): number[] {
    const n: number = arr.length; // Size of array

    // Default values
    if (low === undefined) low = 0;
    if (high === undefined) high = n - 1;

    // Skip sorting if not required
    if (n <= 1) return arr;

    // Skip if the index of lower and upper bounds are wrong
    if (low > high) return arr;

    // Partitioning
    let index = high; // last element as a pivot (first, last, random, or middle)
    let pivot: number = arr[index];
    let pi: number = low - 1; // Partitioning index (position to insert pivot)

    for (let j: number = low; j < high; j++) {
        if (arr[j] < pivot) {
            pi++;
            [arr[pi], arr[j]] = [arr[j], arr[pi]]; // Swapped
        }
    }

    pi++; // Correct position of pivot
    [arr[pi], arr[index]] = [arr[index], arr[pi]]; // Position pivot

    // Recursively sort each sub-array
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);

    return arr;
}

/**
 * QuickSort algorithm implementation with `slice` and `filter`.
 * 
 * This implementation copies the elements of the array into a secondary array.
 * 
 * @param arr Array of elements
 * @returns Sorted array
 */
export function quickSortV2(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    let pivot = arr[0]; // first element as a pivot (first, last, random, or middle)
    let left = arr.slice(1).filter(v => v <= pivot);
    let right = arr.slice(1).filter(v => v > pivot);
    return [...quickSortV2(left), pivot, ...quickSortV2(right)];
}