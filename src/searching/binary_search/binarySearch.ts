function binarySearch(arr: number[], target: number): number {
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

export {
    binarySearch,
};