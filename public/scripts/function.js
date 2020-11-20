
$.ajax({
    url : "https://sky-frontend.herokuapp.com/movies",
    type : 'get',
    

})
.done(function(msg){
    console.log(msg)
})
.fail(function(jqXHR, textStatus, msg){
    alert(msg);
});