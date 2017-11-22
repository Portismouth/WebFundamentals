$(document).ready(function(){
    for (var i = 1; i < 151; i++) {
        $('.images').append("<img id='"+i+"'src='https://pokeapi.co/media/sprites/pokemon/" + i + ".png'>");
    }

    $(document).on('click', 'img', function(){
        var id = $(this).attr('id');
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        $.get(proxyurl+"http://pokeapi.co/api/v2/pokemon/"+id+"/", function(res){
            $('.info').html("<h1>"+res.name+"</h1>");
            $('.info').append("<img id='" + id + "'src='https://pokeapi.co/media/sprites/pokemon/" + id + ".png'>")
            $('.info').append("<h3>Type</h3>")
            for (var i = 0; i < res.types.length; i++) {
                $('.info').append("<li>" + res.types[i].type.name + "</li>");
            }
            $('.info').append("<h3>Height</h3>")
            $('.info').append("<p>" + res.height + "</p>");
            $('.info').append("<h3>Weight</h3>")
            $('.info').append("<p>" + res.weight + "</p>");
        }, 'json');
    });
});



