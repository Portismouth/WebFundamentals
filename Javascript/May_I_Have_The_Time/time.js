// function time(hr, min, per){
//     if(min < 30 && per == "AM"){
//         console.log("It is just after "+hour+" in the morning.")
//     } else if(min > 30 && per == "AM"){
//         console.log("It's almost "+hour+1" in the morning.")
//     } else if()
// }

function time(hr, min, per){
    if(per.toLowerCase() == "am"){
        if (min < 30) {
        console.log("It is just after "+hr+" in the morning.");
        } else if (min > 30 && per == "AM") {
        console.log("It's almost "+(hr+1)+" in the morning.");
        }
    } else if(min < 30){
        console.log("It is just after " + hr + " in the evening.")
    } else {
        console.log("It's almost " + (hr + 1) + " in the evening.");
    }
}

time(5, 45, "am");
