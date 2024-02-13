export function bubbleSort(arr: number[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        let isSwapped: boolean = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swapped
                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }
}
