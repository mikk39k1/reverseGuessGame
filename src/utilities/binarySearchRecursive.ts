




export function binarySearchRecursive(guess : number, values: number[], start=0, end=values.length -1) {

    if (start > end ) {
        return -1;
    }

    let middle = Math.floor(start + (end - start) / 2);

    if (guess === values[middle]) {
        return `index position: ${middle} , Value: ${values[middle]}`;
    }
    else if (values[middle] < guess) {
        start = middle + 1;
        return binarySearchRecursive(guess, values, start, end);
    } else if (values[middle] > guess) {
        end = middle - 1;
        return binarySearchRecursive(guess, values, start, end)
    }
}
