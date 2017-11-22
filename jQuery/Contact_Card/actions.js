$(document).ready(function(){

    $('form').submit(function(){
        $('.contacts').append('<div class="front"><h1>' + $('#first_name').val() + " " + $('#last_name').val() + '</h1><p class="action">Click here for a description!</p><p class="desc">' + $('#desc').val() + '</p></div>');
        $('.desc').hide();
        $('.field').val('');
        return false; 
    });

    $(document).on("click", ".front", function(){
        $(this).children().slideToggle();
    });  

});