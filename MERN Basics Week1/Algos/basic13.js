function print255(){
var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
}
    return arr;
}
console.log(print255());

const oddNumbers = () => {
    for (var i = 1; i <= 100; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
oddNumbers();

const sumOddNumbers = () => {
    let sum = 0;
    for (var i = 1; i <= 5000; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOddNumbers());

const itterateArray = (arr) => {
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
itterateArray([3,5,6,7,8,9]);

const findMax = (arr) => {
    let max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([3,8,99,10,100,890,20200203993434, 1,-300,-900,-10000, 9000292,2020020399346]));

const findAverage = (arr) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return "the average of this array is " + avg;
}
console.log(findAverage([2,4,6,8,10]));