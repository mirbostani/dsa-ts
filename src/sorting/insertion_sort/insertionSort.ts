/**
 * Insertion Sort is a simple sorting algorithm that repeatedly picks an element
 * from the unsorted part of an array and inserts it into its correct position
 * in the sorted part of the array.
 * 
 * 1. Start with the first element in the input array as the sorted sequence.
 * 2. Compare the next element (key) in the input array to each element in the
 *    sorted sequence.
 * 3. If the key is less than the first element in the sorted sequence, move the
 *    first element to the left and insert the key at the beginning of the
 *    sorted sequence.
 * 4. Repeat step 2 and 3 until there are no more elements in the input array.
 * 5. The final output array will be sorted in ascending or descending order,
 *    depending on how you compare the keys.
 * 
 * Insertion Sort is an efficient algorithm for sorted arrays and small data
 * sets, but it has a quadratic time complexity of $O(n^2)$ for large data sets,
 * making it less suitable for very large input sizes.
 *  
 * @param arr Array of elements
 * @returns Sorted array
 */
function insertionSort(arr: number[]): number[] {
    // Assume first element is sorted, start from the second element (i = 1).
    for (let i = 1; i < arr.length; i++) {
        let key: number = arr[i]; // Temporarily save current element into key
        let j: number = i - 1; // First element of the sorted seq (from right)

        // Move elements larger than key one position to the right until
        // reaching a smaller one.
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift one position to the right
            j--;
        }

        // Insert the key to the right side of the element that is smaller than
        // the key.
        arr[j + 1] = key
    }
    return arr;
}
export default insertionSort;