"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
function binarySearch(_a) {
    var guess = _a.guess, values = _a.values;
    var start = 0;
    var end = values.length - 1;
    while (start <= end) {
        var middle = Math.floor(start + (end - start) / 2);
        if (guess === values[middle]) {
            return "index position: ".concat(middle, " , Value: ").concat(values[middle]);
        }
        else if (values[middle] < guess) {
            start = middle + 1;
        }
        else if (values[middle] > guess) {
            end = middle - 1;
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
console.log(binarySearch({ guess: 15, values: [1, 2, 3, 5, 7, 8, 9, 11, 12, 14, 15] }));
