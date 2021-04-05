
let sumCalculator = (numArray) => {
    let sum = 0;
    for (let index = 0; index < numArray.length; index++) {
        sum = sum + numArray[index];
    }
    return sum;
}
let result = sumCalculator([4, 6, 9]);

console.log(result)