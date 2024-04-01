/**
 * Linear Search is defined as a sequential search algorithm that starts at one
 * end and goes through each element of an array to find the target.
 * 
 * The time complexity of the Linear Search algorithm in the worst-case scenario
 * is $O(n)$, where $n$ is the size of the array.
 * 
 * @param arr Array of elements
 * @param target Target value to be found
 * @returns Index of the target; otherwise -1
 */
export default function linearSearch(arr: number[], target: number): number {
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1
}

/**
 * Similar to the Linear Search algorith, but the search starts from both sides
 * of the array.
 * 
 * @param arr Array of elements
 * @param target Target value to be found
 * @returns Index of the target; otherwise -1
 */
export function linearSearchBidirectional(arr: number[], target: number): number {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        // Check from the start of the array
        if (arr[start] === target) {
            return start;
        }

        // Check from the end of the array
        if (arr[end] === target) {
            return end;
        }

        // Update start/end indices if target is not found!
        start += 1;
        end -= 1;
    }

    return -1;
}