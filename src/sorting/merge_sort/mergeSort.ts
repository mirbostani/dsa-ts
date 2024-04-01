/**
 * Merge Sort is a divide and conquer algorithm that works by dividing the input
 * array in half repeatedly until each element forms its own sub-array. The
 * sorted elements are then merged back together from the bottom up to form a
 * single sorted array.
 * 
 * 1. Divide: Divide the array into two halves recursively until you reach the
 *    base case of a single element array.
 * 2. Conquer: Sort each sub-array using merge sort or some other algorithm.
 * 3. Merge: Merge the sorted sub-arrays back together starting from the bottom
 *    up to form a single sorted array.
 * 
 * The time complexity of the Merge Sort is $O(n \log n)$ in the worst case.
 * 
 * The following implementation utilizes the same input array by replacing its
 * elements with the sorted elements, using no additional memory allocation. 
 * 
 * @param arr Array of elements
 * @returns Sorted array
 */
function mergeSort(arr: number[]): number[] {
    const n: number = arr.length; // Array size
    
    // Skip sorting if not required
    if (n <= 1) return arr;

    // Divide the array into two sub-arrays
    let m: number = Math.trunc(n / 2); // middle index
    let left: number[] = arr.slice(0, m); // left sub-array
    let right: number[] = arr.slice(m); // right sub-array
    
    // Recursively sort the two sub-arrays
    mergeSort(left); // Array is updated because it's sent by reference
    mergeSort(right);

    // Merge two sub-arrays
    let i: number = 0; // left sub-array index
    let j: number = 0; // right sub-array index
    let k: number = 0; // array index

    // Pick the larger element among the left and right sub-array elements, and 
    // replace them in the correct position until reaching the end of either 
    // left or right sub-arrays.
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    // When either left or right sub-arrays run out of elements, pick up the
    // remaining elements and put them at the end of the combined array.
    // As one sub-array is exhausted during the previous loop itreation, only
    // one of the following loops will be executed.
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }

    return arr;
}
export default mergeSort;