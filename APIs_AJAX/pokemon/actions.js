$(document).ready(function(){
    $('button').click(function(){
        $('button').hide();
        for(var i = 1; i < 803;i++){
            $('body').append("<img src='https://pokeapi.co/media/sprites/pokemon/"+i+".png'>");
            console.log(i);
        }
    });
});