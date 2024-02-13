export function mergeSort(arr: number[]) {
    let n: number = arr.length; // Array size
    
    // Skip sorting if not required
    if (n <= 1) return;

    // Divide the array into two sub-arrays
    let m: number = Math.trunc(n / 2);
    let larr: number[] = arr.slice(0, m);
    let rarr: number[] = arr.slice(m);
    
    // Sort the two sub-arrays
    mergeSort(larr);
    mergeSort(rarr);

    // Merge two sub-arrays
    let i: number = 0;
    let j: number = 0;
    let k: number = 0;

    // Pick the larger element among left and right array elements, and replace
    // them in the correct position until reaching the end of either left or
    // right arrays.
    while (i < larr.length && j < rarr.length) {
        if (larr[i] < rarr[j]) {
            arr[k] = larr[i];
            i++;
        } else {
            arr[k] = rarr[j];
            j++;
        }
        k++;
    }

    // When either left or right arrays run out of elements, pick up the
    // remaining elements and put them at the end of the combined array.
    // Only one of the following loops will be executed.
    while (i < larr.length) {
        arr[k] = larr[i];
        i++;
        k++;
    }

    while (j < rarr.length) {
        arr[k] = rarr[j];
        j++;
        k++;
    }
}