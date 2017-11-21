function range(low, high, skip){
    for(low; low < high; low+=skip){
        console.log(low);
    }
}
range(-5, 21, 2);

function range1(low, high, skip){
    if(skip === undefined){
        skip = 1;
        for (low; low < high; low+=skip) {
            console.log(low);
        }
    }
}
range1(2, 10);

function range2(low, high, skip){
    if(high === undefined && skip === undefined){
        high = low;
        low = 0;
        skip = skip || 1;
        for(low; low < high; low+=skip){
            console.log(low);
        }
    }
}

range2(5);