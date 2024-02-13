export function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex: number = i; // Consider the first element as the minimum

        // Update the index if an element with the minimum value is found.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Move the minimum element to the beginning of the array.
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swapped
    }
}