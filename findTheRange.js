// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let result = FindRange(array);
console.log(`The minimum value in the array is ${result[0]} and the maximum value in th array is ${result[1]}`)

function FindRange(mySet){

    let min = mySet[0];
    let max = mySet[0];

    for (i=1; i<mySet.length; i++){

        if (mySet[i] < min){
            min = mySet[i];
        }

        if (mySet[i] > max){
            max = mySet[i];
        }
    }

    let range = [];
    range[0] = min;
    range[1] = max;

    return range;
}