$(document).ready(function(){
    $('button').click(function(){
        var cityChosen = $('#city').val();
        console.log(cityChosen);
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityChosen + "&APPID=dc65c19afc6a45dc08f358e15ec2d7e9",
            success: function (result) {
                var temperature = result['main']['temp'];
                temperature = Math.floor(temperature * (9/5) - 459.67);
                $(".temp").text("The temperature is "+temperature);
                $('#city').val('');
            }
        });
    })
});