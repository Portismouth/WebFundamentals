function fancyArray(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(i+"->"+" "+arr[i]);
    }
}
fancyArray(["James", "Jill", "Jane", "Jack"]);

function fancyArray1(arr, sym) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+" "+sym+" "+arr[i]);
    }
}
fancyArray1(["James", "Jill", "Jane", "Jack"], "**");

function fancyArray2(arr, sym, rev) {
    if (rev === true) {
        for (var i = arr.length-1; i >= 0; i--) {
            if (sym === true) {
                console.log(i + " " + sym + " " + arr[i])
            }
            else {
                console.log(i + " -> " + arr[i]);
            }
        }
    } 
    else {
        for (var i = 0; i < arr.length; i++) {
            if (sym === true) {
                console.log(i + " " + sym + " " + arr[i])
            }
            else {
            console.log(i+" -> "+ arr[i]);
            }
        }
    }
}
fancyArray2(["James", "Jill", "Jane", "Jack"], "+", true);
