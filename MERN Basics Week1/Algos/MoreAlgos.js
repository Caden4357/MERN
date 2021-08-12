const randomArray = () => {
    let arr = [];
    for (var i = 0; i <= 10; i ++){
        arr.push((Math.floor) (Math.random() * 100))
    }
    return arr
}
console.log(randomArray());

const swappingValues = (arr) => {
    let firstValue = arr[0];
    let secondValue = arr[arr.length-1];
    arr[0] = secondValue;
    arr[arr.length-1] = firstValue;
    return arr;
}
console.log(swappingValues([32,2,3,5,7,6.1,3,66,10,-202,-20202,-332]));

const reverse = (arr) => {
    for (var i = 0; i < Math.floor(arr.length/2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverse([-3,5,1,3,2,4,10]));

const insertXintoY = (arr, x, y) => {
arr.push(0);
    for (var i = arr.length-1; i > y; i --){
        arr[i] = arr[i-1];
    }
    // arr[arr.length-1] = arr[y];
    arr[y] = x;
    return arr;
}
console.log(insertXintoY([1, 3, 5, 7], 10, 2));

const insertXintoY2 = (arr, x, y) => {
    arr.push(0);
    arr[arr.length-1] = arr[y];
    arr[y] = x;
    return arr;
}
console.log(insertXintoY2([1, 3, 5, 7], 10, 2));

const noNegatives = (arr) => {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr.pop();
        }
    }
    return arr;
}
console.log(noNegatives([1,3,4,-6,-1,2,-66,0,-7,1]));