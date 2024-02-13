export function insertionSort(arr: number[]) {
    // Assume first element is sorted, start from the second element (i = 1).
    for (let i = 1; i < arr.length; i++) {
        let key: number = arr[i]; // Save temporarily
        let j: number = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift to right
            j--;
        }

        // Place the key after the element that is smaller than it.
        arr[j + 1] = key
    }
}