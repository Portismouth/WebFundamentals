$(document).ready(function(){
    $('button').click(function(){
        var cityChosen = $('#city').val();
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityChosen +"&APPID=dc65c19afc6a45dc08f358e15ec2d7e9",
            success: function(res) {
                var temperature = res.main.temp;
                temperature = Math.floor(temperature * (9 / 5) - 459.67);
                $(".temp").html("<h1>"+cityChosen+"</h1>");
                $(".temp").append("<p>The temperature is " + temperature+"</p>");
                $('#city').val('');
            }
        });
    });
});