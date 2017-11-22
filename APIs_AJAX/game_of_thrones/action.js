$(document).ready(function(){
    $('img').click(function(){
        var id = $(this).attr('id');
        $.get("https://api.got.show/api/houses/House "+id, function(res){
            $('.details').html("<h3>Name: "+res.data.name+"</h3>");
            $('.details').append("<h3>Words: "+res.data.words+"</h3>");
            $('.details').append("<p>Title: "+res.data.title+"</p>")
        })
    });
});