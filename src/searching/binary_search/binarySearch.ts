/**
 * Binary Search is a searching algorithm used on a sorted array by repeatedly
 * dividing the search interval in half to find the target value in the array.
 * 
 * The time complexity of the Binary Search algorithm is $O(\log n)$.
 * 
 * The space complexity of the Binary Search algorithm is $O(1)$.
 * 
 * @param arr Array of elements
 * @param target Target value to be found
 * @returns Index of the found target; otherwise -1
 */
export default function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.trunc((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // found the target
        } else if (arr[mid] < target) {
            low = mid + 1; // discard the left half
        } else {
            high = mid - 1; // discard the right half
        }
    }

    return -1;
}

/**
 * Binary Search implemented with a recursive function.
 * 
 * Time Complexity: $O(\log n)$
 * Space Complexity: $O(1)$
 * 
 * @param arr Array of elements
 * @param target Target value to be found
 * @param low Low element's index
 * @param high High element's index
 * @returns The index of the target
 */
export function binarySearchRecursive(arr: number[], target: number, low?: number, high?: number,): number {
    let n = arr.length;
    if (low === undefined) low = 0;
    if (high === undefined) high = n - 1;

    if (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, high);
        else return binarySearchRecursive(arr, target, low, mid - 1);
    }

    return -1;
}