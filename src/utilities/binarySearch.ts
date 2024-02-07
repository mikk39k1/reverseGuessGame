
type Props = {
    guess: number;
    values: number[];
}


export function binarySearch({guess, values}: Props) {
    let start = 0;
    let end = values.length - 1;
   

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (guess === values[middle]){
            return `index position: ${middle} , Value: ${values[middle]}`;
        }
        else if (values[middle] < guess) {
            start = middle + 1;
        } else if (values[middle] > guess) {
            end = middle - 1;
        }
    }

    return -1

}

