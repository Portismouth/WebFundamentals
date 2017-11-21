function numbersOnly(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            newArr.push(arr[i]);
        }
    } return newArr;
}

console.log(numbersOnly([1, "apple", -3, "orange", 0.5]));

function numbersOnly1(arr){
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            arr.splice(i, 1);
        }
    } return arr;
}

console.log(numbersOnly1([1, "apple", -3, "orange", 0.5]));