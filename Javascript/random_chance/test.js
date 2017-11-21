function slots(quarters){
    while(quarters > 0){
        quarters--;
        if (Math.floor(Math.random() * 100) + 1 === 59){
            var winnings = Math.floor(Math.random() * 51) + 50;
            quarters += winnings
            console.log("You won "+winnings+" quarters!. You now have "+quarters+" quarters.");
        } 
    } console.log("YOU OUT OF MONEY, YO!!")
}

slots(100);

function slots1(quarters, leave) {
    while (quarters > 0) {
        quarters--;
        if (Math.floor(Math.random() * 100) + 1 === Math.floor(Math.random() * 100) + 1) {
            var winnings = Math.floor(Math.random() * 51) + 50;
            quarters += winnings;
            console.log("You won " + winnings + " quarters!. You now have " + quarters + " quarters.");
            if (leave !== undefined && quarters >= leave) {
                console.log("You have won " + quarters + " quarters. Congratulations!");
                break;
            }
        } 
    } console.log("YOU OUT OF MONEY, YO!!")
}

slots1(500, 500);



