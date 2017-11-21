function daysUntilMyBirthday(num){
    while(num >= 0){
        if(num >=30){
            console.log(num+" days until my birthday... Sad panda...");
        } else if(num <=29 && num > 5){
            console.log(num+" days until my birthdaaaaay...");
        } else if(num <=5 && num !== 0){
            console.log(num+" DAYS UNTIL MY BIRTHDAY!!");
        } else if(num === 0){
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*"+
                "♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪"+
            "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«")
        } num--;
    }
}

daysUntilMyBirthday(60);