let array = generateArray();

console.log('Array não ordenado');
console.log(array);

console.log('Array ordenado');
quickSort(array, 0, array.length -1 );
console.log(array);

function generateArray() {
    let numbers = [];

    for (var i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * (100 + 1));
        numbers.push(randomNumber);
    }

    return numbers;
}

function quickSort(array, lowOrig, highOrig) {

    let pivot = array[Math.floor((lowOrig + highOrig) / 2)];

    let low = lowOrig;
    let high = highOrig;


    while (low <= high) {

        while (array[low] < pivot) {
            low++;
        }

        while (array[high] > pivot) {
            high--;
        }

        if (low <= high) {
            let temp = array[low];
            array[low] = array[high];
            array[high] = temp;

            low++;
            high--;
        }

        if (lowOrig < high) {
            quickSort(array, lowOrig, high);
        }

        if (low < highOrig) {
            quickSort(array, low, highOrig);
        }
    }

    return array;

}