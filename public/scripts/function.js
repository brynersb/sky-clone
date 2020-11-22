
$.ajax({

    url: "https://sky-frontend.herokuapp.com/movies",
    type: 'get',

}).done(function (data) {
        const [highlight, menu, casousel] = data

        for (const [i, item] of highlight.items.entries()) {

            $("#highlight").append(`<a class="carousel-item" href="#highlight${i}"><img src="${item.images[0].url}"></a>`)

        }

        for (const movie of casousel.movies) {

            $(".movies").append(`<div  class="swiper-slide"><img src="${movie.images[0].url}"> <a href="#" class="store-btn"><i class="material-icons ">https</i></a></div>`)
        }

        // console.log(menu)
        init()
    })

    .fail(function ( data) {
        alert(data);
    });


function init() {
    $('.carousel').carousel({
        duration: 200,
        indicators: true
    });

    initCarousel()
}


