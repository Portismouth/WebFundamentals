$(document).ready(function () { 
    console.log("ready!");
    //element  | event | callback
    $('button').click(function(){
        $(this).text("RESET THE BUTTON");
        $('.arena').append("<p>another challneger</p>");
    });

    // $('h1').hover(function () {
    //     console.log($(this).text("RESET THE BUTTON"));
    // });
});