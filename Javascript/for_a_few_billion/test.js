function bitchBettaHaveMyMoney(days){
    var reward = 0.01;
    for(var i = 1; i <= days; i++){
        reward = reward*2;
    } console.log(reward);
}

bitchBettaHaveMyMoney(30);

function tenK(){
    var reward = 0.01;
    for(days = 1; reward <= 10000; days++){
        reward*=2;
    } console.log(days, reward);
}
tenK();

function billion(){
    var reward = 0.01;
    for (days = 1; reward <= 1000000000; days++) {
        reward *= 2;
    } console.log(days, reward);
}
billion()