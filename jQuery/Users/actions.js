$(document).ready(function(){

    $('form').submit(function(){
        $('table').append('<tr><td>' + $('#first_name').val() + '</td><td>' + $('#last_name').val() + '</td><td>' + $('#email').val() + '</td><td>' + $('#phone').val() + '</td>');
        $('.field').val('');
        return false; 
    });

    


});