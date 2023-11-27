function linearSearch(arr: number[], target: number): number {
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1
}

function linearSearchBidirectional(arr: number[], target: number): number {
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

export {
    linearSearch,
    linearSearchBidirectional,
};